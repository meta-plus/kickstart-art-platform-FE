import React from 'react'
import styles from './NewsCard.module.css'


const CardShadow = () => {
    return(
        <div className={styles["outer"]}>
            <div className={styles["shadow-top"]}></div>
            <div className={styles["inner"]}>
                <div className={styles["inner-element"]}></div>
            </div>
            <div className={styles["shadow-bottom"]}></div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, tortor id tincidunt blandit, leo nisl gravida arcu, a interdum massa quam ut metus. Sed egestas scelerisque lorem, non eleifend erat suscipit eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a risus diam, at venenatis tortor. Proin a mauris vitae nisl rhoncus volutpat eu nec sapien. Donec rutrum sapien vitae nulla vehicula mollis. Phasellus ut tristique nibh. Quisque vitae mi porta metus lobortis tincidunt. Sed non elit at risus ullamcorper rutrum quis eu metus. Vestibulum libero enim, gravida sit amet faucibus vel, varius eu dolor. Duis venenatis imperdiet pulvinar. Curabitur quam massa, ultrices ut rhoncus id, euismod ut velit. Maecenas posuere nibh et risus egestas scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> */}
        </div>
    )
}

export default CardShadow