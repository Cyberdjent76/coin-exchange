import React from 'react';
import logo from './logo.svg';
import Coin from './components/coin/Coin';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo" />
        <h1 className="App-title">
          Coin-Exchange
        </h1>
      </header>
      <table className="coin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name='Bitcoin' ticker='BTC' price={42050.77} />
        <Coin name='Ethereum' ticker='ETH' price={3129.90} />
        <Coin name='Tether' ticker='USDT' price={1.0} />
        <Coin name='Solana' ticker='SOL' price={121.50} />
      </tbody>
    </table>
    </div>
  );
}

export default App;
