import React from "react";
import styles from './Info.scss';
import PropTypes from 'prop-types';

class Info extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        sellTitle: PropTypes.node.isRequired,
        buyTitle: PropTypes.node.isRequired,
    }

    render(){
        const {title, sellTitle, buyTitle } = this.props;
        
        return(
            <section className={styles.wrapper}>
                <div className={styles.moneyType}>
                    <h3>{title}</h3>
                    <h3>{buyTitle}</h3>
                    <h3>{sellTitle}</h3>
                </div>
                <div className={styles.wrapperMoney}>
                    <h4 className={styles.title}>Euro</h4>
                    <p className={styles.price}>{parseFloat(this.props.euro?.rates[0].bid).toFixed(2)}</p>
                    <p className={styles.price}>{parseFloat(this.props.euro?.rates[0].ask).toFixed(2)}</p>
                </div>
                <div className={styles.wrapperMoney}>
                    <h4 className={styles.title}>Dollars</h4>
                    <p className={styles.price}>{parseFloat(this.props.usd?.rates[0].bid).toFixed(2)}</p>
                    <p className={styles.price}>{parseFloat(this.props.usd?.rates[0].ask).toFixed(2)}</p>
                </div>
                <div className={styles.wrapperMoney}>
                    <h4 className={styles.title}>Funt Brytyjski</h4>
                    <p className={styles.price}>{parseFloat(this.props.funt?.rates[0].bid).toFixed(2)}</p>
                    <p className={styles.price}>{parseFloat(this.props.funt?.rates[0].ask).toFixed(2)}</p>
                </div>
                <div className={styles.wrapperMoney}>
                    <h4 className={styles.title}>Frank Szwajcarski</h4>
                    <p className={styles.price}>{parseFloat(this.props.frank?.rates[0].bid).toFixed(2)}</p>
                    <p className={styles.price}>{parseFloat(this.props.frank?.rates[0].ask).toFixed(2)}</p>
                </div>
            </section>
        )
    }
}

export default Info;