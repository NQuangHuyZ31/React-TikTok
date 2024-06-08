import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import className from 'classnames/bind';
import images from '~/assets/images';
console.log(images);
function Header() {
  const cx = className.bind(styles);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <a href='/'><img src={images.logo} alt="logo" /></a>
        </div>
        <div className={cx('search')}>
          <input placeholder="search account and videos..." spellCheck="false" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
            {/* {Close} */}
          </button>
          {<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('action')}>aa</div>
      </div>
    </header>
  );
}

export default Header;
