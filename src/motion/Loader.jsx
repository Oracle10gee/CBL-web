import { useEffect, useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { LogoMark } from '../components/Logo';
import { useLenis } from './SmoothScroll';

// Intro curtain: the brand mark settles, then a hexagon-shaped opening grows
// from the centre until the page behind is fully uncovered.
export default function Loader({ onReveal, onDone }) {
  const root = useRef(null);
  const lenis = useLenis();

  // Scrolling stays locked for as long as the curtain is mounted.
  useEffect(() => {
    if (!lenis) return undefined;
    lenis.stop();
    return () => lenis.start();
  }, [lenis]);

  useGSAP(
    () => {
      const el = root.current;
      if (prefersReducedMotion()) {
        onReveal();
        onDone();
        return;
      }

      const hole = { size: 0 };
      const target = Math.max(window.innerWidth, window.innerHeight) * 2.8;
      const applyHole = () => {
        const value = `${hole.size}px ${hole.size}px, 100% 100%`;
        el.style.maskSize = value;
        el.style.webkitMaskSize = value;
      };

      gsap
        .timeline({ onComplete: onDone })
        .fromTo('.loader__mark', { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power2.out' })
        .fromTo('.loader__bar-fill', { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, 0.1)
        .to('.loader__inner', { autoAlpha: 0, scale: 0.9, duration: 0.35, ease: 'power2.in' }, '+=0.1')
        .addLabel('open')
        .to(hole, { size: target, duration: 1.6, ease: 'power2.inOut', onUpdate: applyHole }, 'open')
        .call(onReveal, null, 'open+=0.55');
    },
    { scope: root }
  );

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loader__inner">
        <LogoMark className="loader__mark" />
        <span className="loader__bar">
          <span className="loader__bar-fill" />
        </span>
      </div>
    </div>
  );
}
