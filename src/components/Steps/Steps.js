import React from 'react';
import styles from './Steps.module.scss';

const Steps = () => {
    return(
        <section className={styles.steps}>
            <div className={styles.step}>
                <img className={styles.imgStep} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTxJlVWX3DYt-g8IvifcbCGcXwkmdusBnCwSbBGs7NTOwI91pikpN37PrlGWfQ-NfeHs&usqp=CAU"></img>
                <p className={styles.stepNumber}>Krok 1</p>
                <p className={styles.stepDescription}>Sprawdzasz kurs i składasz zlecenie wymiany walut</p>
            </div>
            <div className={styles.step}>
                <img className={styles.imgStep} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPat67vqfx0Ztm1F9DJpbHiCCIU2kVMfFrDKTw2f7bz1Zk_baEtNhTmEtcvYjSGsBOQKU&usqp=CAU"></img>
                <p className={styles.stepNumber}>Krok 2</p>
                <p className={styles.stepDescription}>Wysyłasz do nas środki przeznaczone na wymianę</p>
            </div>
            <div className={styles.step}>
                <img className={styles.imgStep} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5j7HkjFmaG14x4YlpPZeOXMZkiAubEVvaOhNG6Ng6sukgwMuoF5gPyu0jRkHz2UktxBI&usqp=CAU"></img>
                <p className={styles.stepNumber}>Krok 3</p>
                <p className={styles.stepDescription}>Odsyłamy walutę na wskazany przez Ciebie rachunek bankowy</p>
            </div>
        </section>
    )
}

export default Steps;