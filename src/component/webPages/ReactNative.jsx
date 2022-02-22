import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaUber,
  FaSkype,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Ball,
  BallBox,
  BodyScene,
  Span,
  FloorContainer,
  SceneBox,
} from "./PagesStyles";
const ReactNative = () => {
  return (
    <BodyScene>
      <Link
        style={{ position: "fixed", top: "0", left: "0", zIndex: "10" }}
        to="/"
        className="btn btn-info m-2"
      >
        Home
      </Link>
      <SceneBox>
        <FloorContainer></FloorContainer>
      </SceneBox>
      <Ball>
        <h2 style={{ textAlign: "center" }}>REACT NATIVE</h2>
        <BallBox>
          <p>
            <Span>*</Span>
            <Span>React Native</Span> : A Framework for building native apps for
            IOS and Android using javascript
          </p>
          <p>
            <Span>*</Span>
            Apps build with react native include Facebook{" "}
            <FaFacebook style={{ fontSize: "1.5rem", color: "blue" }} />{" "}
            Instagram{" "}
            <FaInstagram style={{ fontSize: "1.5rem", color: "brown" }} />{" "}
            Pinterest{" "}
            <FaPinterest style={{ fontSize: "1.5rem", color: "red" }} /> Skype{" "}
            <FaSkype style={{ fontSize: "1.5rem", color: "lightgreen" }} /> Uber
            Eats <FaUber style={{ fontSize: "1.5rem", color: "green" }} /> etc..
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default ReactNative;
