import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  children,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disable = false,
  rounded = false,
  className = false,
  leftIcon,
  ...passProps
}) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    [className]:className,
  });

  const props = {
    onClick,
    ...passProps,
  };
  // Remove event listener
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
