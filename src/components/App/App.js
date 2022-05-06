import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Info from '../Info/InfoContainer';
import  Navigation from '../Navigation/Navigation';
import Form from '../Form/FormContainer';
import Steps from '../Steps/Steps';

class App extends React.Component {
state = {
  ratings: {
    loaded: false
  }
}

  render() {
    return (
      <main className = {styles.component}>
        <Navigation />
        {/* <h2 className={styles.title}>
          Kantor
          <i className="fa-solid fa-dollar-sign"></i>
        </h2>
        <h1 className={styles.subtitle}>Najlepsze ceny w miescie</h1> */}
        <Steps />
        <List />
        <Info title="Rodzaj Waluty" buyTitle="KUP" sellTitle="SPRZEDAJ" />
        <Form />
      </main>
    )
  }
}

export default App;
