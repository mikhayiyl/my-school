import React, { useState } from "react";
import Footer from "../component/Footer/Index";
import { homeObjone, homeObjThree } from "../component/InfoSection/Data";
import InfoSection from "../component/InfoSection/Index";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar/Index";
import HeroSection from "./../component/HeroSection/Index";
import Discover from "../Discover/index";
import Services from "../Discover/Services";
import { getCurrentUser as user } from "../services/authService";

const Home = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { seconds } = props;

  return (
    <>
      <Sidebar {...props} isOpen={isOpen} toggle={toggle} />
      <Navbar {...props} toggle={toggle} isOpen={isOpen} />
      {!user() && (
        <div>
          <HeroSection {...props} />
          <InfoSection {...homeObjone} />
          <InfoSection seconds={seconds} {...homeObjThree} />
          <Footer />
        </div>
      )}
      {user() && (
        <div>
          <HeroSection {...props} />
          <Discover />
          <Services />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
