import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { useMotionReady } from './SmoothScroll';

const numberFormat = new Intl.NumberFormat('en-US');

/**
 * Attribute-driven motion for everything inside `scope`.
 *
 *   data-split="words"   headline: words rise out of masks
 *   data-split="lines"   copy: lines fade up one after another
 *   data-anim="fade"     block fades up            (data-delay)
 *   data-anim="stagger"  direct children fade up in sequence
 *   data-anim="media"    cover + image slide up, scrubbed to scroll
 *   data-anim="scale"    grows from 70% to full size, scrubbed
 *   data-anim="rise"     drifts up into place, scrubbed
 *   data-anim="line"     rule draws from the left
 *   data-anim="hero-bg"  slow zoom-out on load + scroll parallax
 *   data-parallax="50"   moves ±N px across the viewport, scrubbed
 *   data-count="1500"    counts up                 (data-prefix / data-suffix)
 *
 * A nested element with `data-motion-scope` owns its own descendants.
 */
export function usePageMotion(scope, deps = []) {
  const ready = useMotionReady();

  useGSAP(
    () => {
      const root = scope.current;
      if (!ready || !root || prefersReducedMotion()) return undefined;

      const owner = root.closest('[data-motion-scope]');
      const all = (selector) =>
        Array.from(root.querySelectorAll(selector)).filter(
          (el) => el.closest('[data-motion-scope]') === owner
        );
      const viewport = window.innerHeight;
      const onScreen = (el) => el.getBoundingClientRect().top < viewport;
      const delayOf = (el) => parseFloat(el.dataset.delay || 0);
      const enter = (el, start = 'top 90%') => ({
        trigger: el,
        start,
        toggleActions: 'play none none reverse',
      });
      const cleanups = [];

      all('[data-split="words"]').forEach((el) => {
        SplitText.create(el, {
          type: 'words',
          mask: 'words',
          wordsClass: 'split-word',
          autoSplit: true,
          onSplit(self) {
            gsap.set(el, { autoAlpha: 1 });
            return gsap.fromTo(
              self.words,
              { yPercent: 105, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.06,
                ease: 'circ.out',
                delay: delayOf(el),
                scrollTrigger: enter(el),
              }
            );
          },
        });
      });

      all('[data-split="lines"]').forEach((el) => {
        SplitText.create(el, {
          type: 'lines',
          linesClass: 'split-line',
          autoSplit: true,
          onSplit(self) {
            gsap.set(el, { autoAlpha: 1 });
            return gsap.fromTo(
              self.lines,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out',
                delay: delayOf(el),
                scrollTrigger: enter(el),
              }
            );
          },
        });
      });

      all('[data-anim="fade"]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.35,
            ease: 'power2.out',
            delay: delayOf(el),
            scrollTrigger: enter(el, 'top 95%'),
          }
        );
      });

      all('[data-anim="stagger"]').forEach((el) => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.15,
            ease: 'power2.out',
            delay: delayOf(el),
            scrollTrigger: enter(el, 'top 85%'),
          }
        );
      });

      all('[data-anim="media"]').forEach((el) => {
        const cover = el.querySelector(':scope > .media__cover');
        const item = el.querySelector(':scope > .media__item');
        if (!item) return;
        const immediate = onScreen(el);
        const ease = immediate ? 'power2.out' : 'none';

        gsap.set(el, { autoAlpha: 1 });
        gsap.set([cover, item].filter(Boolean), { yPercent: 112 });
        const tl = gsap.timeline({ paused: true, delay: delayOf(el) });
        if (cover) tl.to(cover, { yPercent: 0, duration: 0.62, ease }, 0);
        tl.to(item, { yPercent: 0, duration: 0.72, ease }, 0.16);
        if (cover) tl.set(cover, { autoAlpha: 0 }, 0.88);

        if (immediate) {
          tl.timeScale(0.7).play();
        } else {
          // Neighbours in a row pass a growing delay so they land one after another.
          const start = Math.max(52, 100 - delayOf(el) * 30);
          ScrollTrigger.create({
            trigger: el,
            start: `top ${start}%`,
            end: `top ${start - 35}%`,
            scrub: 0.7,
            animation: tl,
            invalidateOnRefresh: true,
          });
        }
      });

      all('[data-anim="scale"]').forEach((el) => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.fromTo(
          el,
          { scale: 0.7 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 20%', scrub: true },
          }
        );
      });

      all('[data-anim="rise"]').forEach((el) => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.fromTo(
          el,
          { y: 150 },
          { y: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top 100%', end: 'top 55%', scrub: 1 } }
        );
      });

      all('[data-anim="line"]').forEach((el) => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.fromTo(
          el,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.2, ease: 'power2.inOut', transformOrigin: '0 50%', scrollTrigger: enter(el) }
        );
      });

      all('[data-anim="hero-bg"]').forEach((el) => {
        const section = el.closest('section') || el;
        const inner = el.firstElementChild;
        gsap.set(el, { autoAlpha: 1 });
        if (inner) gsap.fromTo(inner, { scale: 1.2 }, { scale: 1, duration: 1.8, ease: 'power2.out' });
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(el, { y: self.progress * section.offsetHeight * 0.2 }),
        });
      });

      all('[data-parallax]').forEach((el) => {
        const amount = parseFloat(el.dataset.parallax) || 50;
        gsap.fromTo(
          el,
          { y: amount },
          {
            y: -amount,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section, footer') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      all('[data-count]').forEach((el) => {
        const end = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const finalText = el.textContent;
        const state = { value: 0 };
        const render = () => {
          el.textContent = `${prefix}${numberFormat.format(Math.round(state.value))}${suffix}`;
        };
        render();
        gsap.to(state, {
          value: end,
          duration: 2,
          ease: 'power2.out',
          onUpdate: render,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
        cleanups.push(() => {
          el.textContent = finalText;
        });
      });

      // Pinned sections created by child components change every position below them.
      ScrollTrigger.sort();
      ScrollTrigger.refresh();

      return () => cleanups.forEach((fn) => fn());
    },
    { scope, dependencies: [ready, ...deps], revertOnUpdate: true }
  );
}
