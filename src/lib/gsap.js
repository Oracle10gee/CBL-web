import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Every route starts from the top; ScrollTrigger owns history.scrollRestoration,
// so it has to be told here rather than set on window.history directly.
if (typeof window !== 'undefined') {
  ScrollTrigger.clearScrollMemory('manual');
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger, SplitText, useGSAP };
