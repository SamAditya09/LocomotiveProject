import React, { useEffect } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FooterSec from "./components/FooterSec";

import useLocomotiveScroll from "./hooks/useLocomotiveScroll";

const App = () => {
  const scrollRef = useLocomotiveScroll();

  return (
    <>
      <div id="main" ref={scrollRef}  data-scroll-container>
        <Loader />
        <Navbar />
        <Section1 data-scroll data-scroll-speed="-2.5" id="section1"/>
        <Section2 data-scroll data-scroll-speed="1" id="section2" />
        <Section3 data-scroll id="section3"/>
        <FooterSec />
      </div>
    </>
  );
};

export default App;
