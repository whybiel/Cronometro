import React from 'react';
import Change from './cngmsg.js';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Donutimg from "./donut.png"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:#F5F5F5;
  }
  body{
    width:100%;
    background-color:#FF8C00;
  }
`;
const Container = styled.div`
  width: 100%;
  height:100vh;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
`
const Number = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  margin:5vh 0 5vh 0;
`;
const Btndiv = styled.div`
  display: flex;
  flex-direction:column;
  position:absolute;
  top:29.5vh;
  left:35vw;

  @media (max-width:768px) {
    display: flex;
    flex-direction:row;
    position:absolute;
    top:50vh;
    left:32vw;
    margin:0 auto;
  }
`

const Adicbtn = styled.button`
  width: 40px;
  height: 40px;
  background-color:#00CD00;
  border:none;
  border-radius:50%;
  display: flex;
  justify-content:center;
  align-items:center;
`;
const Resetbtn = styled.button`
  width: 40px;
  height: 40px;
  background-color:#fff;
  border:none;
  border-radius:50%;
  margin:3vh 0 3vh 0;
  display: flex;
  justify-content:center;
  align-items:center;
  @media (max-width:768px) {
    margin:0vh 3vw 0vh 3vw;
  }
`;
const Stopbtn = styled.button`
  width: 40px;
  height: 40px;
  background-color:#FF4040;
  border:none;
  border-radius:50%;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Homer = styled.img`
  width: 29vw;
  position: absolute;
  left:2vw;
  bottom:2vh;
  animation: animatehomer 5s ease infinite;
  @keyframes animatehomer {
    0%{
      margin-left:5vw;
    }
    10%{
      margin-left:10vw;
    }
    20%{
      margin-left:15vw;
    }
    30%{
      margin-left:20vw;
    }
    40%{
      margin-left:25vw;
    }
    50%{
      margin-left:30vw;
    }
    60%{
      margin-left:35vw;
    }
    70%{
      margin-left:40vw;
    }
    80%{
      margin-left:45vw;
    }
    90%{
      margin-left:50vw;
    }
    100%{
      margin-left:60vw;
    }
  }

  @media (max-width:768px) {
    @keyframes animatehomer {
    0%{
      margin-left:5vw;
    }
    10%{
      margin-left:10vw;
    }
    20%{
      margin-left:15vw;
    }
    30%{
      margin-left:20vw;
    }
    40%{
      margin-left:25vw;
    }
    50%{
      margin-left:30vw;
    }
    60%{
      margin-left:35vw;
    }
    70%{
      margin-left:40vw;
    }
    80%{
      margin-left:45vw;
      margin-bottom:3vh;
    }
    90%{
      margin-left:50vw;
      margin-bottom:6vh;
    }
    100%{
      margin-left:60vw;
      margin-bottom:3vh;
    }
  }
  }
`

const Donut = styled.img`
  width:20em;
  position: absolute;
  bottom:25vh;
  right:5vw;
  @media (max-width:768px) {
    width:7em;
    bottom:20vh;
    right:10vw;
  }
`

export default class App extends React.Component {
  state = {
    num: 0,
    min: 0
  };

  add = () => {
    const Seconds = setInterval(() => {
      this.setState((prevState) => ({
        num: prevState.num < 59 ? prevState.num + 1 : 0,
      }));
    }, 1000);

    const Minutes = setInterval(() => {
      this.setState((prevState) => ({
        min: prevState.min + 1
      }));
    }, 60000);

    this.stop = () => {
      clearInterval(Seconds, Minutes);
    };

  };
  reset = () => {
    this.setState({
      num: 0,
      min:0
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Change />
        <Number>{this.state.min}:{this.state.num}</Number>
        <Btndiv>
          <Adicbtn onClick={this.add}><img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/6423/6423896.png"/></Adicbtn>
          <Resetbtn onClick={this.reset}><img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/512/82/82004.png"/></Resetbtn>
          <Stopbtn onClick={this.stop}><img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/512/151/151859.png"/></Stopbtn>
        </Btndiv>
        <Homer src="https://gifs.eco.br/wp-content/uploads/2021/07/mais-de-100-gifs-animados-e-imagens-animadas-para-facebook-e-whatsapp-54.gif" /> 
        <Donut src={Donutimg} />
      </Container>
    );
  }
}