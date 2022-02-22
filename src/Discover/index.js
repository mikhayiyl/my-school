import React from "react";
import Icon1 from "../images/beach.jpg";
import Icon2 from "../images/data.jpg";
import Icon3 from "../images/apps.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesH6,
  ServicesLink,
} from "./DiscoverElements";
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1 id="discover">Road Map</ServicesH1>
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
          <ServicesH2>Front End</ServicesH2>
          <ServicesP>
            <ServicesLink to="/html">HTML & CSS</ServicesLink>
            <ServicesLink to="/javascript">JAVASCRIPT</ServicesLink>
            <ServicesLink to="/react">REACT</ServicesLink>
            <ServicesLink to="/git">GIT</ServicesLink>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>BACKEND</ServicesH2>
          <ServicesP>
            <ServicesLink to="/nodejs">NODE JS</ServicesLink>
            <ServicesLink to="/express">EXPRESS</ServicesLink>
            <ServicesLink to="/mongodb">MONGO DB</ServicesLink>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>MOBILE APPLICATIONS</ServicesH2>
          <ServicesP>
            <ServicesLink to="/native">REACT NATIVE</ServicesLink>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
