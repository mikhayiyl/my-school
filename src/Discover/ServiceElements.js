import styled from "styled-components";
import { Link } from "react-router-dom";
export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#0000, #000 75%),
    repeating-conic-gradient(from 45deg, #e70fb8 0deg 90deg, #fff 90deg 180deg);

  background-size: 100%, 7em 7em;

  @media screen and (max-width: 1000px) {
    height: 900px;
  }
  @media screen and (max-width: 700px) {
    height: 1300px;
  }
  @media screen and (max-width: 350px) {
    height: 1500px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: auto;
  padding: 30px;
  box-shadow: 0 0 20px #22ffbb;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 0 20px blue;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 2px 2px 10px red;
  margin-bottom: 14px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH6 = styled.div`
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 10px #000;
  width: 600px;

  @media screen and (max-width: 700px) {
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    width: 280px;
    padding: 0.2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  padding: 0 0.5rem;
  border-bottom: 2px solid red;
`;
export const ServicesP = styled.div`
  font-size: 1rem;
  text-align: center;
  display: flex;
  color: blue;
  font-weight: 500;
  flex-direction: column;
`;
export const ServicesLink = styled(Link)`
  font-weight: bold;

  &:hover {
    color: orangered;
    text-decoration: none;
  }
`;
