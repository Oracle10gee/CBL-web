import { useEffect, useRef, useState } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { useMotionReady } from '../motion/SmoothScroll';
import { usePageMotion } from '../motion/usePageMotion';
import Button from './Button';
import Media from './Media';

const DESKTOP = '(min-width: 992px)';

function useDesktop() {
  const [matches, setMatches] = useState(
    () => typeof window.matchMedia === 'function' && window.matchMedia(DESKTOP).matches
  );
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const query = window.matchMedia(DESKTOP);
    const onChange = () => setMatches(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);
  return matches;
}

function ItemText({ item, heading: Heading = 'h3' }) {
  return (
    <>
      <Heading className="showcase__title">{item.title}</Heading>
      {item.lead && <p className="showcase__lead">{item.lead}</p>}
      <p className="showcase__copy">{item.text}</p>
      {item.cta && (
        <Button to={item.cta.to} variant="navy">
          {item.cta.label}
        </Button>
      )}
    </>
  );
}

// On desktop the section pins and scrolling steps through the items: the next
// image slides up over the last while the copy cross-fades and the paginator
// fills. On small screens (and with reduced motion) the items simply stack.
export default function Showcase({ items }) {
  const root = useRef(null);
  const ready = useMotionReady();
  const pinned = useDesktop() && !prefersReducedMotion();

  usePageMotion(root, [pinned]);

  useGSAP(
    () => {
      if (!pinned || !ready) return;
      const el = root.current;
      const texts = gsap.utils.toArray('.showcase__text', el);
      const frames = gsap.utils.toArray('.showcase__frame', el);
      const bars = gsap.utils.toArray('.showcase__bar', el);
      const fills = gsap.utils.toArray('.showcase__fill', el);
      const count = items.length;

      gsap.set(texts.slice(1), { autoAlpha: 0, y: 40 });
      gsap.set(frames.slice(1), { yPercent: 100 });
      gsap.set(bars, { height: 18 });
      gsap.set(bars[0], { height: 80 });
      gsap.set(fills, { height: '0%' });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: el,
          pin: true,
          start: 'top top',
          end: () => `+=${count * window.innerHeight * 0.8}`,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < count; i += 1) {
        tl.to(fills[i], { height: '100%', duration: 1 }, i);
        if (i === count - 1) break;
        const at = i + 0.5;
        tl.to(texts[i], { autoAlpha: 0, y: -40, duration: 0.2, ease: 'power2.in' }, at)
          .to(frames[i + 1], { yPercent: 0, duration: 0.5, ease: 'power2.inOut' }, at)
          .to(frames[i].firstElementChild, { yPercent: -18, duration: 0.5, ease: 'power2.inOut' }, at)
          .to(bars[i], { height: 18, duration: 0.4, ease: 'power2.inOut' }, at + 0.05)
          .to(bars[i + 1], { height: 80, duration: 0.4, ease: 'power2.inOut' }, at + 0.05)
          .to(texts[i + 1], { autoAlpha: 1, y: 0, duration: 0.25, ease: 'power2.out' }, at + 0.25);
      }
    },
    { scope: root, dependencies: [pinned, ready, items.length], revertOnUpdate: true }
  );

  if (!pinned) {
    return (
      <div className="showcase showcase--stacked" ref={root} data-motion-scope>
        {items.map((item) => (
          <article className="showcase__row" key={item.title}>
            <Media slot={item.slot} className="showcase__media" />
            <div className="showcase__text" data-anim="fade">
              <ItemText item={item} />
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="showcase showcase--pinned" ref={root} data-motion-scope>
      <div className="container showcase__stage">
        <div className="showcase__frames">
          {items.map((item) => (
            <div className="showcase__frame" key={item.title}>
              <Media slot={item.slot} reveal={false} className="media--flat" />
            </div>
          ))}
        </div>

        <div className="showcase__texts">
          {items.map((item) => (
            <article className="showcase__text" key={item.title}>
              <ItemText item={item} />
            </article>
          ))}
        </div>

        <div className="showcase__paginator" aria-hidden="true">
          {items.map((item) => (
            <span className="showcase__bar" key={item.title}>
              <span className="showcase__fill" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
