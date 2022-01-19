import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinTd = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    
    handleClick = (event) => {
        //prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        const changeBalance = this.props.showBalance ? <CoinTd>{this.props.balance}</CoinTd> : "*****";
        return (
            <tr>
              <CoinTd>{this.props.name}</CoinTd>
              <CoinTd>{this.props.ticker}</CoinTd>
              <CoinTd>${this.props.price}</CoinTd>
              {changeBalance}
              <CoinTd>
                  <form action='#' method='POST'>
                    <button onClick={this.handleClick}>Refresh</button>
                  </form>
              </CoinTd>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}