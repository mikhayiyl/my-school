import React from "react";
import { Link } from "react-router-dom";
import {
  Ball,
  BallBox,
  BodyScene,
  FloorContainer,
  SceneBox,
  Span,
} from "./PagesStyles";
const Express = () => {
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
        <h2 style={{ textAlign: "center" }}>EXPRESS</h2>
        <BallBox>
          <p>
            {" "}
            <Span>*</Span>
            <Span>Express</Span> : a free and open-source software Node Js
            framework for building restful APis
          </p>
          <p>
            {" "}
            <Span>*</Span>
            It provides mechanisms to: Write handlers for requests with
            different HTTP verbs at different URL paths (routes).
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default Express;
