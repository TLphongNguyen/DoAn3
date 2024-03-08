import styles from "./home.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sliner from '~/components/Sliner';

import offersArray from "~/data/offers";
const cx = classNames.bind(styles)
function Home() {
    return ( 
        <div className={cx('wrap-content')}>
          <div className={cx('container')}>
            <Sliner/>
            <ul className={cx('list-offers')}>
              {offersArray.map((offer,index) => (
                <li key = {index} className={cx('item-offers')}>
                  <img src={offer.img} alt="anhvoucher"/>
                  <span>{offer.name}</span>
                </li>

              ))}
            </ul>

          </div>
          <div className={cx('body')}>
            
          </div>
        </div>

    
        );
}

export default Home;