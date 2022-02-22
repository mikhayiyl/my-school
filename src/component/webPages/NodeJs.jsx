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
const NodeJs = () => {
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
        <h2 style={{ textAlign: "center" }}>NODE JS</h2>
        <BallBox>
          <p>
            <Span>NODE JS</Span> : an open source & cross platform runtime
            environment for executing Javascript code outside of a browser
          </p>
          <p>
            <Span>*</Span>
            Used in back-end to develop Application Programming Interface (APis)
          </p>
          <p>
            <Span>*</Span>
            Is ideal for building highly-scalable data-intensive back-end
            services that power client Applications{" "}
          </p>
          <p>
            <Span>*</Span> Great for prototyping and agile development
          </p>
          <p>
            <Span>*</Span> Can be used for building superfast and highly
            scalable services
          </p>
          <p>
            <Span>*</Span>
            Used in production by large companies such as
            <Span> Paypal,Uber,Netflix</Span>
            ...etc
          </p>
          <p>
            <Span>*</Span>Has Large ecosystem of open-source libraries and
            community support
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default NodeJs;
