import React from "react";
import styles from './nbp.scss';

const NBP = ()=> {
    return(
        <div className={styles.nbpLink}>
            <span className={styles.finger}><i className="far fa-hand-point-right"></i></span>
            <a className={styles.link} href="https://www.nbp.pl/home.aspx?f=/kursy/kursyc.html" target="_blank">Kursy walut Narodowy Bank Polski</a>
            <span className={styles.fingerLeft}><i className="far fa-hand-point-left"></i></span>
        </div>
    )
}

export default NBP;