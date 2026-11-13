import { lazy, Suspense, useCallback, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { pendingPages } from './content/site';
import Loader from './motion/Loader';
import SmoothScroll, { useLenis } from './motion/SmoothScroll';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Solutions from './pages/Solutions';

const About = lazy(() => import('./pages/About'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Insights = lazy(() => import('./pages/Insights'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const People = lazy(() => import('./pages/People'));

// Rendered before the routes so its layout effect runs ahead of each page's
// motion setup, which measures positions from the top of the document.
function ScrollReset() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    let frame;
    if (hash) {
      frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (!target) return;
        const headerHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        if (lenis) lenis.scrollTo(top, { immediate: true, force: true });
        else window.scrollTo(0, top);
      });
    } else {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }
    return () => frame && window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return null;
}

function Shell() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <ScrollReset />
      <main className="page" key={pathname}>
        <Suspense fallback={<div className="container page-loading" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/our-people" element={<People />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/solutions/medical-logistics" element={<Navigate to="/solutions#medical-logistics" replace />} />
            <Route path="/solutions/technology" element={<Navigate to="/solutions#technology-solutions" replace />} />
            <Route path="/solutions/project-management" element={<Navigate to="/solutions#project-management" replace />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
            {pendingPages.map((page) => (
              <Route key={page.path} path={page.path} element={<ComingSoon {...page} />} />
            ))}
            <Route path="*" element={<ComingSoon title="Page not found" eyebrow="404" missing />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const reveal = useCallback(() => setReady(true), []);
  const finish = useCallback(() => setLoading(false), []);

  return (
    <BrowserRouter>
      <SmoothScroll ready={ready}>
        <Shell />
        {loading && <Loader onReveal={reveal} onDone={finish} />}
      </SmoothScroll>
    </BrowserRouter>
  );
}
