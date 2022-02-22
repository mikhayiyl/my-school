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
const Git = () => {
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
        <h2 style={{ textAlign: "center" }}>GIT</h2>
        <BallBox>
          <p>
            <Span>*</Span>
            <Span>Git</Span> : a free and open source distributed version
            control system
          </p>
          <p>
            <Span>*</Span>
            version control system aid in tracking projects history and
            collaboration (working together)
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default Git;
