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
const Javascript = () => {
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
        <h2 style={{ textAlign: "center" }}>JAVASCRIPT</h2>
        <BallBox>
          <p>
            <Span>*</Span>
            <Span>Javascript</Span> : a is a scripting programming language used
            both on the client-side and server-side that allows you to make web
            pages interactive.
          </p>
          <p>
            <Span>*</Span>
            used in browser to build interactive web pages or Mobile Apps
          </p>
          <p>
            <Span>*</Span>
            Also used in building real-time Networking Apps(like video streaming
            services),command line tools and games
          </p>
          <p>
            <Span>*</Span>
            javascript runs in browser like v8 in chrome ,spiderMonkey in
            fireFox.Also runs outside a browser in node
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default Javascript;
