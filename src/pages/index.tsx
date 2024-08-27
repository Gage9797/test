import { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'antd-mobile'
import yayJpg from '../assets/yay.jpg';
import styles from './index.less'
import classNames from 'classnames/bind';
import Popup from './popup'
import { Toast } from 'antd-mobile'
import type { RefInstanceObj } from './popup'
const cx = classNames.bind(styles)


export default function HomePage() {
  const tabRef = useRef<HTMLDivElement>(null)
  const popupUpRef = useRef<RefInstanceObj>({
    showPopup: () => {}
  })


  const handleClaim = () => {
    console.log('111')
    popupUpRef.current.showPopup()
  }
  const [isTop, setIsTop] = useState(true)
  const [isMax, setIsMax] = useState(false)

  const handleScroll = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      setIsTop(false);
    } else {
      setIsTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Toast.show({
    //   content: <div className={styles['content']}>
    //     <div>Got the coupon successfully！
    //     This coupon needs to be used in store</div>
    //     <a className={styles['use-now']} onClick={() => handleClaim()}>use now</a>
    //   </div>,
    //   maskClassName: styles['custom-toast-mask'],
    //   duration: 0
    // })

    // Toast.show({
    //   content: <div className={styles['content']}>
    //     <div>Got the coupon successfully！
    //     This coupon needs to be used in store</div>
    //     <a className={styles['use-now']} onClick={() => handleClaim()}>use now</a>
    //   </div>,
    //   maskClassName: styles['custom-toast-mask'],
    //   duration: 0
    // })
    
    Toast.show({
      content: <div className={styles['position']}>
        <div className={styles['position-text']}>Got the coupon successfully！
        This coupon needs to be used in store</div>
        <div>
          <div className={styles['open']} onClick={() => handleClaim()}>Open</div>
        </div>
      </div>,
      maskClassName: styles['custom-toast-mask'],
      duration: 0
    })
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <div className={styles['test']}>
      <div className={cx({
        'top-tab': !isTop,
        'top-tab-fixed': isTop
      })} ref={tabRef}>
        tab
      </div>
      <div>
        <div className={cx({
          'done-progress-container': true,
          'progress-container': false,
        })}>
          <ProgressBar
            percent={100}
            className={styles['progress']}
          />
          <div className={styles['text']}>90%</div>
          <div className={cx({ 'mask': true})}></div>
        </div>
        <div className={cx({
          'price-container': true
        })}>
          <div className={styles['price-tag']}>
            <img src="" alt="" className={styles['price-tag-icon']} />
            <span>Rp20.000 off</span>
          </div>
          <div className={styles['price-btn']}>
            <span onClick={handleClaim}>claim</span>
          </div>
          <div className={cx({'mask': false})}></div>
        </div>
      </div>
      <Popup title='标题' ref={popupUpRef} />
      {/* <CustomToast /> */}
    </div>
  );
}
