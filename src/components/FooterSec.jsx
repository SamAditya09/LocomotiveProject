import React from "react";

const FooterSec = () => {
  const handleScrollToTop = () => {
    const scrollElement = document.querySelector('#main'); // Locomotive Scroll container
    const locomotiveScroll = scrollElement && scrollElement.locomotive;

    if (locomotiveScroll) {
      locomotiveScroll.scrollTo('#section1', {
        offset: 0,
        duration: 1000, // duration in ms
        easing: [0.25, 0.00, 0.35, 1.00], // ease-in-out
      });
    }
  };

  return (
    <>
      <div className="footer">
      <div onClick={handleScrollToTop} id="Back2Top" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="12"
            viewBox="0 0 30 12"
          >
            <polyline
              fill="none"
              stroke="#000"
              points="172 752 187 762 202 752"
              transform="rotate(-180 101 381.5)"
            />
          </svg>
          <h2>Back To Top</h2>
        </div>
        <div className="foot">
        <a href="https://samaditya09.github.io/MY-Portfolio/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" 
              alt="GitHub Logo" 
            />
          </a>
        {/* <a href="">GITHUB.IO</a> */}
          <div id="footer_data">
            <a href="#">Newsletter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSec;
