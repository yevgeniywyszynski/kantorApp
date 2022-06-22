import React from 'react'
import styles from '../TransactionHistory/TransactionHistory.module.scss';
import {FaLongArrowAltRight } from "react-icons/fa";

const TransactionHistory = ({history}) => {
    return(
        <div className={styles.transactionPageWrapper}>
            <div className={styles.titleWrapper}>
                <p className={styles.titleData}>Data</p>
                <p className={styles.titleData}>Przed konwersją</p>
                <div></div>
                <p className={styles.titleData}>Po Konwersji</p>
            </div>
            {history.map(e => (
                <div className={styles.historyWrapper} key={(Math.floor(Math.random() * 1000))}>
                    <p className={styles.dataStyl}>{e.data}</p>
                    <p className={styles.dataStyl}>{e.amount} {e.from}</p>
                    <FaLongArrowAltRight className={styles.iconFinal}/>
                    <p className={styles.dataStylBold}>{e.result} {e.to}</p>    
                </div>
            ))}
        </div>
    )
}

export default TransactionHistory;