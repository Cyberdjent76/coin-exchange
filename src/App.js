import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import TitleList from './components/TitleList/TitleList';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 42050.77
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 3129.90
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 121.50
        },
        {
          name: 'Crypto.com',
          ticker: 'CRO',
          price: 0.34
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map(function( {ticker, name, price} ) {
      let newPrice = price;
      if (valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
    this.setState({ coinData: newCoinData });
  }
  render() {
    return (
      <Div>
        <TitleList />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}
  

export default App;
