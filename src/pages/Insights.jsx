import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Media from '../components/Media';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';
import { listInsights } from '../services/insights';

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatDate = (value) => (value ? dateFormat.format(new Date(value)) : '');

export default function Insights() {
  const root = useRef(null);
  const [state, setState] = useState({ status: 'loading', items: [] });
  usePageMotion(root, [state.status]);

  useEffect(() => {
    let cancelled = false;
    listInsights()
      .then((items) => !cancelled && setState({ status: 'ready', items }))
      .catch(() => !cancelled && setState({ status: 'error', items: [] }));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="insights" ref={root}>
      <section className="hero hero--compact" data-theme="dark">
        <div className="container hero__content">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="h1 h1--sm" data-split="words">
            Project stories, ideas and updates.
          </h1>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          {state.status === 'loading' && <p className="copy">Loading insights…</p>}
          {state.status === 'error' && (
            <p className="copy">We couldn’t load insights right now. Please try again shortly.</p>
          )}
          {state.status === 'ready' && state.items.length === 0 && (
            <p className="copy">No insights have been published yet.</p>
          )}
          <ul className="cards">
            {state.items.map((item, index) => (
              <li key={item.slug}>
                <Link className="card" to={`/insights/${item.slug}`}>
                  <Media
                    slot="insight.default"
                    src={item.cover}
                    alt=""
                    className="card__media"
                    delay={(index % 3) * 0.35}
                  />
                  <span className="card__meta">
                    {item.category}
                    {item.category && item.publishedAt ? ' · ' : ''}
                    {formatDate(item.publishedAt)}
                  </span>
                  <h2 className="card__title">{item.title}</h2>
                  <p className="card__text">{item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
