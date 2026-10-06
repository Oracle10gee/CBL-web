import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Button({ to, href, variant = 'navy', arrow = false, className = '', children, ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn__arrow">
          <Icon name="arrow" size={16} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} type="button" {...rest}>
      {content}
    </button>
  );
}
