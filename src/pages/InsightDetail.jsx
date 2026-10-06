import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';
import { getInsight } from '../services/insights';
import { formatDate } from './Insights';

export default function InsightDetail() {
  const { slug } = useParams();
  const root = useRef(null);
  const [state, setState] = useState({ status: 'loading', item: null });
  usePageMotion(root, [state.status]);

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading', item: null });
    getInsight(slug)
      .then((item) => !cancelled && setState({ status: item ? 'ready' : 'missing', item }))
      .catch(() => !cancelled && setState({ status: 'error', item: null }));
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const { status, item } = state;
  const heading = {
    loading: 'Loading…',
    missing: 'Insight not found',
    error: 'We couldn’t load this insight',
  }[status];

  return (
    <div className="insight" ref={root}>
      <section className="hero hero--compact" data-theme="dark">
        <div className="container hero__content">
          <Eyebrow>{item ? [item.category, formatDate(item.publishedAt)].filter(Boolean).join(' · ') : 'Insights'}</Eyebrow>
          <h1 className="h1 h1--sm" data-split="words" key={status}>
            {item ? item.title : heading}
          </h1>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container article">
          {item && (
            <>
              <Media slot="insight.default" src={item.cover} alt="" className="media--wide" />
              <div className="prose">
                <p className="lead" data-anim="fade">
                  {item.excerpt}
                </p>
                {item.body.map((paragraph, index) => (
                  <p key={index} data-anim="fade">
                    {paragraph}
                  </p>
                ))}
              </div>
            </>
          )}
          <div data-anim="fade">
            <Button to="/insights" variant="navy">
              All insights
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
