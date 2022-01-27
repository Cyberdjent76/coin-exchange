import React, { useEffect, useState } from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import TitleList from './components/TitleList/TitleList';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes['USD'].price)
      };
    });
    //retrieve the prices
    setCoinData(coinPriceData);
  }

  useEffect(function() {
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const handleRefresh = async (valueChangeKey) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeKey}`;
    const newValue =  await axios.get( tickerUrl );
    const responses = coinData.map(function(values) {
      let newValues = { ...values };
      if (valueChangeKey === values.key) {
        newValues.price = formatPrice(newValue.data.quotes['USD'].price);
      }
      return newValues;
    });
    setCoinData(responses);
  }

  const handleShowBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }
  return (
    <Div>
      <TitleList />
      <AccountBalance amount={balance} 
                      showBalance={showBalance} 
                      handleShowBalance={handleShowBalance} />
      <CoinList coinData={coinData} 
                handleRefresh={handleRefresh}
                showBalance={showBalance} />
    </Div>
  );
}

  

export default App;
