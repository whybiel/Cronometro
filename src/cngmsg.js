import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 4rem;
 font-family: 'Creepster', cursive;
 margin:10vh 0 10vh 0;
 text-align:center;

 @media (max-width:768px) {
     font-size: 2rem;
     text-align:center;
 }
`;

export default class App extends React.Component {
    state = {
        msg: 'Fala aí, tudo beleza?',
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'Quantos segundos ele demorou pra pegar a rosquinha?',
            });
        }, 10000);
    }

    render() {
        return (
            <>
                <Title>{this.state.msg}</Title>
            </>
        );
    }
}