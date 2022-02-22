import styled from "styled-components";

export const BodyScene = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  perspective: 14em;
  perspective-origin: 50% calc(50% - 2em);
  @media screen and (max-width: 600px) {
    min-height: 900px;
  }
`;
export const SceneBox = styled.div`
  position: relative;
  transform-style: preserve-3d;
  animation: sceneRotate 30s infinite linear;

  @keyframes sceneRotate {
    to {
      transform: rotateY(360deg);
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const FloorContainer = styled.div`
  position: absolute;
  top: 1em;
  width: 13em;
  height: 15em;
  background-image: radial-gradient(#0000, #000 75%),
    repeating-conic-gradient(from 45deg, #e70fb8 0deg 90deg, #fff 90deg 180deg);

  background-size: 100%, 1em 1em;
  transform: translate(-50%, -50%) rotateX(90deg);

  @media screen and (min-width: 1760px) {
    width: 20em;
    height: 18em;
  }
`;
export const Ball = styled.div`
  width: 17em;
  height: 10em;
  padding: 0.5rem;
  right: 25%;
  border-radius: 20px;
  position: absolute;
  top: 1rem;
  color: #fff;
  background-image: radial-gradient(circle at top, #222, #000);
  box-shadow: 0 0 20px 0px #fff;

  @media screen and (max-width: 1800px) {
    right: 19%;
    width: 11em;
    height: 6.5em;
    padding: 2rem;
    top: 2rem;
  }
  @media screen and (max-width: 1760px) {
    right: 9%;
  }
  @media screen and (max-width: 1000px) {
    height: 7em;
    right: 5%;
  }
  @media screen and (max-width: 890px) {
    width: 9em;
  }

  @media screen and (max-width: 760px) {
    right: 11%;
    width: 4em;
    padding: 0.7rem;
    height: 10em;
  }
  @media screen and (max-width: 320px) {
    width: 3em;
    right: 10%;
  }
`;
export const Span = styled.span`
  font-weight: bold;
  color: yellow;
`;
export const BallBox = styled.div`
  font-size: 1rem;

  @media screen and (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;
