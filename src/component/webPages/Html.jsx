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

const Html = () => {
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
        <h2 style={{ textAlign: "center" }}>HTML & CSS</h2>
        <BallBox>
          <p>
            <Span>*</Span>
            <Span>Hyper Text Markup Language (HTML)</Span> : a language which
            defines building blocks(text,images,videos..etc) of webpages{" "}
          </p>
          <p>
            HTML is used to structure a web page and its content.for example
            inside paragraphs tags denoted by "p" you can structure paragraphs
          </p>
          <p>
            <Span>*</Span>
            <Span>Cascading Style Sheet (CSS) </Span>:language responsible for
            visual effects(color,font-size,animations,positions) of a webpages{" "}
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default Html;
