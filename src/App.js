import { useCallback, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { pendingPages } from './content/site';
import Loader from './motion/Loader';
import SmoothScroll, { useLenis } from './motion/SmoothScroll';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import Home from './pages/Home';
import InsightDetail from './pages/InsightDetail';
import Insights from './pages/Insights';
import Partnerships from './pages/Partnerships';
import People from './pages/People';

// Rendered before the routes so its layout effect runs ahead of each page's
// motion setup, which measures positions from the top of the document.
function ScrollReset() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

function Shell() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <ScrollReset />
      <main className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/our-people" element={<People />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<Contact />} />
          {pendingPages.map((page) => (
            <Route key={page.path} path={page.path} element={<ComingSoon {...page} />} />
          ))}
          <Route path="*" element={<ComingSoon title="Page not found" eyebrow="404" missing />} />
        </Routes>
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
