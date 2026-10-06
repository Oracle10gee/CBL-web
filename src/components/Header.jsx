import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../content/site';
import { useLenis } from '../motion/SmoothScroll';
import Icon from './Icon';
import Logo from './Logo';

const HIDE_AFTER = 100;
const SHOW_AFTER = 120;
const TOP_ZONE = 180;
const PROBE_Y = 40;

// Tracks scroll direction (to tuck the bar away) and the theme of whichever
// section currently sits under the bar (to keep the text legible).
function useHeaderState(pathname, frozen) {
  const [state, setState] = useState({ theme: 'dark', hidden: false, atTop: true });

  useEffect(() => {
    let frame = null;
    let last = window.scrollY;
    let turn = last;
    let goingDown = false;
    let hidden = false;

    const update = () => {
      frame = null;
      const y = window.scrollY;
      if (Math.abs(y - last) > 2) {
        const down = y > last;
        if (down !== goingDown) {
          goingDown = down;
          turn = last;
        }
        last = y;
      }
      if (y < TOP_ZONE || (!goingDown && turn - y > SHOW_AFTER)) hidden = false;
      else if (goingDown && y - turn > HIDE_AFTER) hidden = true;

      let theme = 'light';
      for (const section of document.querySelectorAll('[data-theme]')) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= PROBE_Y && rect.bottom > PROBE_Y) {
          theme = section.dataset.theme;
          break;
        }
      }

      const atTop = y < 8;
      setState((prev) =>
        prev.theme === theme && prev.hidden === hidden && prev.atTop === atTop ? prev : { theme, hidden, atTop }
      );
    };
    const schedule = () => {
      if (frame == null) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame != null) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return frozen ? { ...state, hidden: false } : state;
}

export default function Header() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, hidden, atTop } = useHeaderState(pathname, menuOpen || dropdown !== null);

  useEffect(() => {
    setDropdown(null);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    lenis?.stop();
    document.documentElement.classList.add('is-locked');
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      lenis?.start();
      document.documentElement.classList.remove('is-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen, lenis]);

  const classes = [
    'header',
    `header--on-${menuOpen ? 'dark' : theme}`,
    hidden && 'header--hidden',
    !atTop && !menuOpen && 'header--scrolled',
    menuOpen && 'header--menu-open',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={classes}>
        <div className="container header__bar">
          <Link className="header__logo" to="/" aria-label="Carter Biggs — home">
            <Logo />
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div
                  className={`nav__item ${dropdown === item.label ? 'nav__item--open' : ''}`}
                  key={item.label}
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                  onKeyDown={(event) => event.key === 'Escape' && setDropdown(null)}
                >
                  <button
                    className="nav__link"
                    type="button"
                    aria-expanded={dropdown === item.label}
                    onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="chevron" size={14} className="nav__caret" />
                  </button>
                  <ul className="nav__submenu">
                    {item.children.map((child, index) => (
                      <li key={child.to} style={{ '--i': index }}>
                        <NavLink className="nav__sublink" to={child.to}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink className="nav__link" to={item.to} key={item.label}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="header__actions">
            <Link className="header__cta" to="/contact">
              Get in touch
              <span className="header__cta-icon">
                <Icon name="arrow" size={14} />
              </span>
            </Link>
            <button
              className={`menu-btn ${menuOpen ? 'menu-btn--active' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="menu-btn__line" />
              <span className="menu-btn__line" />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu ${menuOpen ? 'menu--open' : ''}`} aria-hidden={!menuOpen} data-lenis-prevent>
        <div className="menu__bg" />
        <nav className="container menu__inner" aria-label="Mobile">
          {nav.map((item, index) => (
            <div className="menu__group" key={item.label} style={{ '--i': index }}>
              {item.children ? (
                <>
                  <span className="menu__heading">
                    <span>{item.label}</span>
                  </span>
                  <ul className="menu__sublist">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to} tabIndex={menuOpen ? 0 : -1}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link className="menu__heading" to={item.to} tabIndex={menuOpen ? 0 : -1}>
                  <span>{item.label}</span>
                </Link>
              )}
              <span className="menu__rule" />
            </div>
          ))}
          <div className="menu__group" style={{ '--i': nav.length }}>
            <Link className="menu__heading" to="/contact" tabIndex={menuOpen ? 0 : -1}>
              <span>Get in touch</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
