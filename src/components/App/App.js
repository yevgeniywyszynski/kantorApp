import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import styles from './App.scss';
import Steps from '../Steps/StepsContainer';
import Layout from '../Layout/Layout';

const App = ()  => {

    return (
      <div className="app">
      <BrowserRouter>
        <main className = {styles.component}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Steps />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      </div>
    )
}

export default App;
