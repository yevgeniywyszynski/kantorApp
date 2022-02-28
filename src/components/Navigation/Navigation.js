import React from "react";
import styles from './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return(
            <nav>
                <ul className={styles.navigationWrapper}>
                    <div className={styles.titleLogo}>
                    <img src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-icon-png-4.png" width="40px" height="40px" />
                    <img src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-icon-png-4.png" width="40px" height="40px" />
                    <img src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-icon-png-4.png" width="40px" height="40px" />
                    </div>
                    <li>
                        <a className={styles.linkRoad} href="https://www.google.pl/maps/place/Kantor+Conti/@52.2429813,20.9913415,17z/data=!3m1!4b1!4m5!3m4!1s0x471ed3928810b889:0xdd2bb310f05816c0!8m2!3d52.2429631!4d20.9935277" target="_blank">Jak dojechać</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;