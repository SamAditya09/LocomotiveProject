import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Section1 = () => {
  const handleScrollToSection2 = () => {
    const scrollElement = document.querySelector('#main'); // Locomotive Scroll container
    const locomotiveScroll = scrollElement && scrollElement.locomotive;
    
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo('#section2', {
        offset: 0,
        duration: 1000, // duration in ms
        easing: [0.25, 0.00, 0.35, 1.00], // ease-in-out
      });
    }
  };

  return (
    <>
      <div className="sec-1" id="section1">
        <h1>
          <em>We</em>
          <em> are a </em>
          CREATIVE
          <em> studio</em>
          <br />
          DEDICATED
          <em> to </em>
          CULTURAL
          <br />
          ADVANCEMENT
          <em> through</em>
          <br />
          STRATEGY
          <em> and </em>
          DESIGN.
        </h1>
        <div
          id="sec-1_footer"
        >
          <a href="#" title="contact" >
            Contact
          </a>
          <a href="#" title="next" onClick={handleScrollToSection2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="17"
              viewBox="0 0 49 17"
            >
              <script xmlns="" />
              <polyline
                fill="none"
                stroke="#231F20"
                stroke-width="2"
                points="937 991 960.336 1005.098 983.673 991"
                transform="translate(-936 -990)"
              />
            </svg>
          </a>

          <a href="#" title="instagram" >
            instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default Section1;


