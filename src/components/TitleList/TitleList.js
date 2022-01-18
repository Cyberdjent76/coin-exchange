import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const Image = styled.img`
    height: 10rem;
    pointer-events: none;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

export default class TitleList extends Component {
    render() {
        return (
            <Header>
                <Image src={logo} alt="React logo" />
                    <H1>
                        Coin-Exchange
                    </H1>
            </Header>
        )
    }
}
