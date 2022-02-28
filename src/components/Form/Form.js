import React from "react";
import styles from './Form.scss';

class Form extends React.Component{
    state = {
        name: this.props.state,
        phone: this.props.state,
    }

    handleSubmit = (event) => {
        const reservationObj = {
            value: this.props.value,
            currency: this.props.currency,
            typeOperation: this.props.typeOperation,
            result: this.props.result,
            name: this.state.name,
            phone: this.state.phone
        }

        event.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reservationObj)
        }
        fetch('http://localhost:3000/reservations', requestOptions).then(r => alert("Wysłano. Status" + r.status))

    }

    changeName = event => {
        this.setState({
            name: event.target.value,
           
        })
    }

    changeNumber = event => {
        this.setState({
            phone: event.target.value
        })
    }

    render(){
        return(
            <form className={styles.formWrapper} onSubmit={this.handleSubmit}>
                <p className={styles.content}>Zarezerwuj cene</p>
                <input onChange={this.changeName} className={styles.formInfo} type="text" placeholder="Imię" />
                <input onChange={this.changeNumber} className={styles.formInfo} type="number" placeholder="+48" />
                <button className={styles.buttonForm} type="submit">SEND</button>
                <p className={styles.content}>Zadzwonimy do Ciebie w ciągłu 10 minut</p>
            </form>
        )
    }
}

export default Form;