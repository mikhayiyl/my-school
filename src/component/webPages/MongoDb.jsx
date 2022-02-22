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
const MongoDb = () => {
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
        <h2 style={{ textAlign: "center" }}>MONGODB</h2>
        <BallBox>
          <p>
            {" "}
            <Span>*</Span>
            <Span>MongoDb</Span> : is a source-available cross-platform document
            database used to build highly available and scalable internet
            applications.Classified as a NoSQL database program
          </p>
        </BallBox>
      </Ball>
    </BodyScene>
  );
};

export default MongoDb;
