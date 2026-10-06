import { useRef } from 'react';
import Button from '../components/Button';
import { Eyebrow } from '../components/sections';
import { usePageMotion } from '../motion/usePageMotion';

// Stand-in for routes that are linked from the navigation but not designed yet.
export default function ComingSoon({ title, eyebrow, missing = false }) {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div ref={root}>
      <section className="hero hero--full hero--short" data-theme="dark">
        <div className="container hero__content">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h1 h1--sm" data-split="words">
            {title}
          </h1>
          <p className="lead" data-split="lines" data-delay="0.3">
            {missing
              ? 'The page you’re looking for doesn’t exist or has moved.'
              : 'This page is on its way. In the meantime, we’d be glad to talk it through with you.'}
          </p>
          <div className="hero__actions" data-anim="fade" data-delay="0.5">
            <Button to="/" variant="light">
              Back to home
            </Button>
            <Button to="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
