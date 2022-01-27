import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinTd = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default function Coin(props) {
    
    const handleClick = (event) => {
        //prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.id);
    }
    let changeBalance = props.showBalance ? <CoinTd>{props.balance}</CoinTd> : "*****";
    return (
        <tr>
            <CoinTd>{props.name}</CoinTd>
            <CoinTd>{props.ticker}</CoinTd>
            <CoinTd>${props.price}</CoinTd>
            {changeBalance}
            <CoinTd>
                <form action='#' method='POST'>
                  <button onClick={handleClick}>Refresh</button>
                </form>
            </CoinTd>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}