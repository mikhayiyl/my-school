import React from "react";
import { Link } from "react-router-dom";
import {
  Ball,
  BallBox,
  BodyScene,
  Span,
  FloorContainer,
  SceneBox,
} from "./PagesStyles";
const Reacti = () => {
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
        <h2 style={{ textAlign: "center" }}>REACT</h2>
        <BallBox>
          <p>
            <Span>*</Span>
            <Span>React</Span> : A javascript library for building fast and
            interactive user interfaces (Ui)
          </p>
          <p>
            {" "}
            <Span>*</Span>
            Developed by Facebook(2011) and still managed by it
          </p>
          <p>
            <Span>*</Span>Most popular Javascript for building User Interfaces{" "}
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default Reacti;
