import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinTd = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        //prevent the default action of submitting the form
        event.preventDefault();
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        });
    }

    render() {
        return (
            <tr>
              <CoinTd>{this.props.name}</CoinTd>
              <CoinTd>{this.props.ticker}</CoinTd>
              <CoinTd>${this.state.price}</CoinTd>
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
    price: PropTypes.number.isRequired
}