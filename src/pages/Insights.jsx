import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Media from '../components/Media';
import { usePageMotion } from '../motion/usePageMotion';
import { listInsights } from '../services/insights';

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const newsDateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
export const formatDate = (value) => (value ? dateFormat.format(new Date(value)) : '');
const formatNewsDate = (value) => (value ? newsDateFormat.format(new Date(value)).replace(/^(\d+) /, '$1, ') : '');

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
      <section className="hero hero--split insights__hero" data-theme="dark">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="h1 h1--sm" data-split="words">
              What's happening at Carter Biggs.
            </h1>
            <p className="lead" data-split="lines">
              From new partnerships and project milestones to team announcements and industry engagements, this is where
              we share what we're doing and why it matters. Explore the latest updates from across our organisation.
            </p>
          </div>
          <Media slot="insights.hero" className="hero__media insights__hero-media" delay={0.4} />
        </div>
      </section>

      <section className="section insights__latest" data-theme="light">
        <div className="container">
          <h2 className="insights__section-title">Latest News</h2>
          {state.status === 'loading' && <p className="copy">Loading insights…</p>}
          {state.status === 'error' && (
            <p className="copy">We couldn’t load insights right now. Please try again shortly.</p>
          )}
          {state.status === 'ready' && state.items.length === 0 && (
            <p className="copy">No insights have been published yet.</p>
          )}
          <ul className="cards insights__cards">
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
                  <span className="card__meta">{formatNewsDate(item.publishedAt)}</span>
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
