import React from "react";
import styles from '../InputResult/InputResult.module.scss';
import TextField from '@mui/material/TextField';

const InputResult = ({changeValid, changeResult, changeAmount, resultRedux, amountRedux, validRedux, fromRedux, toRedux}) => {
    return(
    <div className={styles.selectWrapper}>
        <div className={styles.optionMoneyWrapper}>
            <p className={styles.titleSelect}>Kwota</p>
            <TextField
            id="filled-error-helper-text"
            className={styles.resultSum}
            error={validRedux ? false : true}
            value={amountRedux}
            placeholder={"Wpisz kwotę " + fromRedux}
            helperText={validRedux? '' : "Nieprawidłowa wartość"}
            variant="standard"
            onChange={(e => {
                changeAmount(e.target.value)
                changeValid(true)
                changeResult('')
                }
                )}
            />
        </div>
         <div className={styles.optionMoneyWrapper}>
            <p className={styles.titleSelect}>Wynik</p>
            <input className={styles.resultSum} 
                type="text" 
                placeholder={'Wynik' + ` ${toRedux}`}
                readOnly 
                value={resultRedux? resultRedux + ` ${toRedux}`: resultRedux}
                >    
            </input>
        </div>
    </div>
    )
}

export default InputResult;