import React, { useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {

  const GSAPLoader = () => {
    
    useEffect(() => {
      const tl = gsap.timeline()
  
      tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out",
      });
  
      tl.to("#loader h1", {
        delay: 0.3,
        duration: 0.7,
        color:"white"
      },"-=0.7");
  
      tl.to("#yellow2",{
        top: "-100%",
        duration: 0.8,
        ease: "expo.out",
      }, "-=0.5")
  
      tl.to("#loader",{
        opacity:0,
        duration:0.5,
      },"-=0.3")
  
      tl.to("#loader",{
        display:"none"
      },"-=0.3")
    });

  }

  GSAPLoader();

  return (
    <>
      <div id="loader" >
        <div id="yellow1" ></div>
        <div id="yellow2" ></div>

        <video
          autoPlay
          muted
          src="https://works.studio/uploads/videos/5_version2_200911_024123.mp4"
          
        ></video>

        <h1 >
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
      </div>
    </>
  );
};

export default Loader;
