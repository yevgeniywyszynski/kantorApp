import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Info from '../Info/InfoContainer';
import NBP from '../NBP/nbp';
import  Navigation from '../Navigation/Navigation';
import Form from '../Form/FormContainer';

class App extends React.Component {
state = {
  ratings: {
    loaded: false
  }
}

 componentDidMount(){
   const ratesPromise  = this.fetchFromNbp();
   ratesPromise.then(res => 
    this.setState({
      ratings:{
      loaded: true,
      ...res
      }
    })
    )
 }

  fetchFromNbp = async _ => {
    const responseDolar = await fetch('https://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json')
    const responseUSD = await responseDolar.json()

    const responseEuro = await fetch('https://api.nbp.pl/api/exchangerates/rates/c/eur/today/')
    const responseEUR = await responseEuro.json()


    const responseFuntBrytyjski = await fetch('https://api.nbp.pl/api/exchangerates/rates/c/GBP/today/')
    const responseGBR = await responseFuntBrytyjski.json()


    const responseFrankSzwajcarski = await fetch('https://api.nbp.pl/api/exchangerates/rates/c/CHF/today/')
    const responseCHF = await responseFrankSzwajcarski.json()

    const ratings = {
      usd: {
        ask: parseFloat(responseUSD.rates[0].ask).toFixed(2),
        bid: parseFloat(responseUSD.rates[0].bid).toFixed(2),
      },
      euro: {
        ask: parseFloat(responseEUR.rates[0].ask).toFixed(2),
        bid: parseFloat(responseEUR.rates[0].bid).toFixed(2),
      },
      funt: {
        ask: parseFloat(responseGBR.rates[0].ask).toFixed(2),
        bid: parseFloat(responseGBR.rates[0].bid).toFixed(2),
      },
      frank: {
        ask: parseFloat(responseCHF.rates[0].ask).toFixed(2),
        bid: parseFloat(responseCHF.rates[0].bid).toFixed(2),
      }
    }
    return ratings
}

  render() {
    return (
      <main className = {styles.component}>
        <Navigation />
        <h2 className={styles.title}>
          Kantor
          <i className="fa-solid fa-dollar-sign"></i>
        </h2>
        <h1 className={styles.subtitle}>Najlepsze ceny w miescie</h1>
        <NBP />
        <List />
        <Info title="Rodzaj Waluty" buyTitle="KUP" sellTitle="SPRZEDAJ" />
        <Form />
      </main>
    )
  }
}

export default App;
