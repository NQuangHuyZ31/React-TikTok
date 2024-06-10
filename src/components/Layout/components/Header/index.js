import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEnvelope,
  faMagnifyingGlass,
  faPaperPlane,
  faPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import images from '~/assets/images';
import { Wapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const cx = className.bind(styles);

  useEffect(()=>{
    setTimeout(()=>{
      setSearchResult([])
    },0)
  })

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <a href="/">
            <img src={images.logo} alt="logo" />
          </a>
        </div>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx('action')}>
          <Button text  leftIcon = {<FontAwesomeIcon icon={faPlus}/>}>Tải lên</Button>
          <Button  primary className={cx('custom-login')}>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
