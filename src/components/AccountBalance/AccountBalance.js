import React from 'react';
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


export default function AccountBalance(props) {
    const handleClick = (event) => {
        event.preventDefault();
        props.handleShowBalance();
    }
    let buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    let balance = props.showBalance ? <span><strong>Balance:</strong> ${ props.amount }</span> : "*****";
    return (
        <Section>
            { balance }
            <Button onClick={handleClick}>{ buttonText }</Button>
        </Section>
    );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}