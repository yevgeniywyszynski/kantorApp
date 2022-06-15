import React from "react";
import styles from './List.scss';

class List extends React.Component{

    componentDidMount(){
        const {loadRatingsRequest} = this.props;
        loadRatingsRequest()
    }

    handleChange = event => (
        this.props.changeValue(event.target.value),
        this.props.changeResult("")
    )

    buyMoney = _ => {

        let sum = 0
        if(this.props.value >= 0 && this.props.value != '') {
            const startSum = this.props.value

            if(this.props.currency == "Euro") {
                sum = (startSum * parseFloat(this.props.euro?.rates[0].bid))
            } else if(this.props.currency == "Dollars"){
                sum = (startSum * parseFloat(this.props.usd?.rates[0].bid))
            } else if(this.props.currency == "Funt Brytyjski") {
                sum = (startSum * parseFloat(this.props.funt?.rates[0].bid))
            } else if(this.props.currency == "Frank Szwajcarski") {
                sum = (startSum * parseFloat(this.props.frank?.rates[0].bid))
            }

        }else {
            alert('wpisz prawidlowa liczbe')
        }

        let transactionObj = {
            typeMoney: this.props.currency,
            priceSent: this.props.value,
            priceGet: this.props.result,
            typeOperation: 'buy'
        }

        console.log('transaction', transactionObj)
        this.props.addTransaction(transactionObj);
        this.props.changeResult(this.createResult(sum))
        this.props.changeTypeOperation("Kup")
    }

    createResult = value => {
        return value + " zł"
    }

    sellMoney = _ => {

        let sum = 0;
        
        if(this.props.value >= 0 && this.props.value != '') {
            const startSum = this.props.value

            if(this.props.currency == "Euro") {
                sum = (startSum * parseFloat(this.props.euro?.rates[0].ask)).toFixed(2)
            } else if (this.props.currency == "Dollars") {
                sum = (startSum * parseFloat(this.props.usd?.rates[0].ask)).toFixed(2)
            } else if (this.props.currency == "Funt Brytyjski") {
                sum = (startSum * parseFloat(this.props.funt?.rates[0].ask)).toFixed(2)
            } else if (this.props.currency == "Frank Szwajcarski") {
                sum = (startSum * parseFloat(this.props.frank?.rates[0].ask)).toFixed(2)
            }
        } else {
            alert('wpisz prawidlowa liczbe')
        }
        this.props.changeResult(this.createResult(sum))
        
        this.props.changeTypeOperation("Sprzedaj")

        const transactionObj = {
            typeMoney: this.props.currency,
            priceSent: this.props.value,
            priceGet: this.props.result,
            typeOperation: 'sell'
        }

        this.props.addTransaction(transactionObj)
        console.log('info', transactionObj)
    }

    changeTypeMoney = event =>  {
        this.props.changeValue(0)
        this.props.changeResult("")
        this.props.changeCurrency(event.target.value)
    }

    render(){
        return(
            <div className={styles.inputWrapper}>
                <div className={styles.gridWrapper}>

                    <input className={styles.input}
                        type='number'
                        min='0.00'
                        max='10000.00'
                        step='0.01'
                        placeholder='Wpisz kwote'
                        value={this.props.value}
                        onChange={this.handleChange}
                    />

                    <select className={styles.choise}id="walutas" onChange={this.changeTypeMoney}>
                        <option value="Euro">Euro €</option>
                        <option value="Dollars">Dollars $</option>
                        <option value="Funt Brytyjski">Funt Brytyjski £</option>
                        <option value="Frank Szwajcarski">Frank Szwajcarski CHF</option>
                    </select>

                    <input value={this.props.result} className={styles.input} type="text" placeholder='0zł' readOnly></input>
                </div>
                <div>
                <button className={styles.button} type="button" onClick={this.buyMoney}>KUP</button>
                <button className={styles.button} type="button" onClick={this.sellMoney}>SPRZEDAJ</button>
                </div>
            </div>
        )
    }
}

export default List;