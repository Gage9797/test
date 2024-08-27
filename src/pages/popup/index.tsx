import { useImperativeHandle, useState, forwardRef } from "react";
import { Popup } from "antd-mobile";
import styles from "./index.less";
import closeIcon from '@/assets/home/close-icon.svg'
import successImg from '@/assets/home/successImg.svg'

export type RefInstanceObj = {
  showPopup: () => void
}

export type PopupProps = {
  title: string,
}

const Index = forwardRef((props: PopupProps, ref) => {
  const { title } = props
  const [visible, setVisible] = useState(false)
  useImperativeHandle(ref, (): RefInstanceObj => ({
    showPopup: () => setVisible(true)
  }))
  return (
    <>
      <Popup
        visible={visible}
        bodyClassName={styles['popup-body']}
        onClose={() => setVisible(false)}
      >
        <div className={styles["popup-container"]}>
          <div className={styles["top"]}>
            <img onClick={() => setVisible(false)} src={closeIcon} alt="" className={styles["close-icon"]} />
            <div className={styles["title"]}>{title}</div>
          </div>
          <div className={styles["popup-main"]}>

            <img src={successImg} alt="" className={styles['success-img']} />
            <div className={styles['bold-text']}>
              Got the coupon successfully！
            </div>
            <div className={styles['normal-text']}>You can view all the coupons you have received in the My Coupon Portal</div>
          </div>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['bottom-btn']}>got it</div>
        </div>
      </Popup>
    </>
  );
});

export default Index;
