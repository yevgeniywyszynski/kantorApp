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
                <div className={styles.wrapperMoney}>
                    <div className={styles.iconTypeWrapper}>
                        <h4 className={styles.title}>Euro</h4>
                        <img className={styles.moneyIcon} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Europe_flag_circle.png" />
                    </div>
                    <div className={styles.priceDescription}>
                        <p className={styles.typeOperation}>Skup</p>
                        <p className={styles.typeOperation}>Sprzedaz</p>
                        <p className={styles.price}>{parseFloat(this.props.euro?.rates[0].bid).toFixed(2)}</p>
                        <p className={styles.price}>{parseFloat(this.props.euro?.rates[0].ask).toFixed(2)}</p>
                    </div>
                </div>
                <div className={styles.wrapperMoney}>
                    <div className={styles.iconTypeWrapper}>
                        <h4 className={styles.title}>Dollars</h4>
                        <img className={styles.moneyIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png" />
                    </div>
                    <div className={styles.priceDescription}>
                        <p className={styles.typeOperation}>Skup</p>
                        <p className={styles.typeOperation}>Sprzedaz</p>
                        <p className={styles.price}>{parseFloat(this.props.usd?.rates[0].bid).toFixed(2)}</p>
                        <p className={styles.price}>{parseFloat(this.props.usd?.rates[0].ask).toFixed(2)}</p>
                    </div>
                </div>
                <div className={styles.wrapperMoney}>
                    <div className={styles.iconTypeWrapper}>
                        <h4 className={styles.title}>Funt Brytyjski</h4>
                        <img className={styles.moneyIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png" />
                    </div>
                    <div className={styles.priceDescription}>
                        <p className={styles.typeOperation}>Skup</p>
                        <p className={styles.typeOperation}>Sprzedaz</p>
                        <p className={styles.price}>{parseFloat(this.props.funt?.rates[0].bid).toFixed(2)}</p>
                        <p className={styles.price}>{parseFloat(this.props.funt?.rates[0].ask).toFixed(2)}</p>
                    </div>
                </div>
                <div className={styles.wrapperMoney}>
                    <div className={styles.iconTypeWrapper}>
                        <h4 className={styles.title}>Funt Szwajcarski</h4>
                        <img className={styles.moneyIcon} src="https://pnggrid.com/wp-content/uploads/2021/06/Switzerland-Flag-Round-Image-1024x1024.png" />
                    </div>
                    <div className={styles.priceDescription}>
                        <p className={styles.typeOperation}>Skup</p>
                        <p className={styles.typeOperation}>Sprzedaz</p>
                        <p className={styles.price}>{parseFloat(this.props.frank?.rates[0].bid).toFixed(2)}</p>
                        <p className={styles.price}>{parseFloat(this.props.frank?.rates[0].ask).toFixed(2)}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Info;