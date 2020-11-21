import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width:100%;
  height:80vh;
  background-color:black;
  display:flex;
  justify-content:center;
`;

const Insider = styled.div`
  width:50%;
  height:300px;
  border:2px solid pink;
  margin-top:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;
const Intro = styled.h1`
  color:white;
  font-weight:bold;
  font-family:monospace;
`;
const Para = styled.p`
  color:yellow;
  font-size:1.5rem;
`;

export default function About(){
  return(
    <>
      <Container>
        <Insider>
        <Intro>ABOUT THE PROJECT</Intro>
        <Para>This project was made by Edmon Garcia</Para>
        <Para>An aspiring Full-Stack Engineer and Technopreneur.</Para>
        </Insider>
      </Container>
    </>
  )
}