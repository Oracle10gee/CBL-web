import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

const LenisContext = createContext(null);
const MotionReadyContext = createContext(true);

export const useLenis = () => useContext(LenisContext);
// False while the intro loader is still covering the page.
export const useMotionReady = () => useContext(MotionReadyContext);

export default function SmoothScroll({ ready, children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const instance = new Lenis({ duration: 1.2, anchors: true });
    instance.on('scroll', ScrollTrigger.update);
    const tick = (time) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionReadyContext.Provider value={ready}>{children}</MotionReadyContext.Provider>
    </LenisContext.Provider>
  );
}
