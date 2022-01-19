import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
    color: aliceblue;
`;

const Button = styled.button`
    font-size: 1.3rem;
    margin: 1.5rem 0 1.5rem 5rem;
    background-color: light-gray;
    border: 1px solid black;
    border-radius: 5px; 
`;


export default class AccountBalance extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.handleShowBalance();
    }

    render() {
        const buttonText = this.props.showBalance ? "Hide Balance" : "Show Balance";
        const balance = this.props.showBalance ? <span><strong>Balance:</strong> ${ this.props.amount }</span> : "*****";
        return (
            <Section>
               { balance }
               <Button onClick={this.handleClick}>{ buttonText }</Button>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}