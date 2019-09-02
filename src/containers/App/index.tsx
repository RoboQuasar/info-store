import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../Header';
import ProductsList from '../ProductsList';

import styles from './index.module.css';

class App extends Component {
  render() {
    return (
      <main className={styles.mainContainer}>
        <Header />

        <ProductsList />
      </main>
    );
  }
}

export default App;
