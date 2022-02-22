import React, { useState } from "react";
import { Button } from "../ButtonElements";
import video from "../../video/video.mp4";
import { getCurrentUser as user } from "../../services/authService";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = ({ days, hours, minutes, seconds }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Web Development Made Easy</HeroH1>
        <HeroP>Learn from Zero to Hero</HeroP>
        {seconds > 0 ? (
          <h2 className="head6">
            Dealine: {days} Days {hours} Hours {minutes} Minutes {seconds}{" "}
            Seconds
          </h2>
        ) : (
          <h2 className="head6">Registration Time is Over</h2>
        )}
        <HeroBtnWrapper>
          {!user() && (
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {" "}
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                Get Started {hover ? <ArrowForward /> : <ArrowRight />}
              </span>
            </Button>
          )}

          {user() && (
            <Button
              to="discover"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                Start
                {hover ? <ArrowForward /> : <ArrowRight />}
              </span>
            </Button>
          )}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
