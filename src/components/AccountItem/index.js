import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem() {
  return ( 
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=a5d48078&nonce=44959&refresh_token=545d4fc14b8684bdaa40b9a2d7c96397&x-expires=1718168400&x-signature=iAajd1Y1vn4LUnxIfrpwuzryPas%3D&shp=a5d48078&shcp=81f88b70" alt="abc"></img>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span >Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
        </p>
      <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
   );
}

export default AccountItem;