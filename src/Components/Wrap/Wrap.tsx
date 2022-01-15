import * as styles from './style'
import { WrapProps } from "./type";
import { useHistory } from 'react-router-dom'
import moreGrey from "../../assets/data/Images/more-button.svg";

const Wrap = (props: WrapProps) => {
    const history = useHistory();
    // console.log(props.upElement)
    return(
        <div className={styles["container"]}>
            <div className={styles["contentHeader"]}>
               {props.upElement()}
            </div>
            <div className={styles["boxBorderShadow"]}></div>
            <div className={styles["contentWrapper"]}>
               {props.downElement()}
            </div>
            <div className={styles["boxBottomShadow"]}></div>
        </div>
    )
} 

export default Wrap