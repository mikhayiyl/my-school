import React from "react";
import Icon1 from "../images/sun.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesH6,
} from "./ServiceElements";
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1 id="services">Guidelines</ServicesH1>
      <ServicesH6>
        <p>
          Becoming a web developer is extremely easy all you need is dedication
          and hardword ,however you need strategic plan to achieve this.This
          plan is what we will be using in this Course
        </p>
      </ServicesH6>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Note</ServicesH2>
          <ServicesP>
            <p>The course is free & discipline is highly regarded</p>
            <p>Incase you become bored feel free to quit anytime</p>
            <p>Incases of question/queries tag the video</p>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Tips</ServicesH2>
          <ServicesP>
            <p>Learn as much as you can</p>
            <p>
              Curiosity and passion for learning /Focus are the main key to
              achieve your goals
            </p>
            <p>Decide what you want learning and pursue that</p>
            <p>
              Specialization/Decide your main focus when it comes to technology
              (ie. frontEnd/Backend/FullStack)
            </p>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
