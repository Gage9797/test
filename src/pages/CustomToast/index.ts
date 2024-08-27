import {Toast} from "antd-mobile";
import './index.less';

/**
 * custom_toast_error: error
 * custom_toast_warn: warn
 * custom_toast_normal: normal
 * */

export const customToast = ({className, text, duration = 2000}) => {
    return Toast.show({
        content: text,
        duration: 0
    })

}