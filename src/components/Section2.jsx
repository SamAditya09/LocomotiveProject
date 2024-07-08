import React, { useEffect } from "react";

const Section2 = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".elem");
    const sec2 = document.querySelector(".sec-2");

    elems.forEach((elem) => {
      elem.addEventListener("mouseenter", function () {
        const img = this.getAttribute("data-img");
        if (img) {
          sec2.style.backgroundImage = `url(${img})`;
        }
      });

      elem.addEventListener("mouseleave", function () {
        this.style.backgroundImage = "none";
      });
    });
  }, []);

  const handleScrollToSection3 = () => {
    const scrollElement = document.querySelector('#main'); // Locomotive Scroll container
    const locomotiveScroll = scrollElement && scrollElement.locomotive;
    
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo('#section3', {
        offset: 0,
        duration: 1000, // duration in ms
        easing: [0.25, 0.00, 0.35, 1.00], // ease-in-out
      });
    }
  };

  return (
    <>
      <div className="sec-2" id="section2">
        <div
          className="elem"
          data-img="https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_66386012852979bf6f60b2d90a344eff.jpg"
        >
          <h2>Mineral</h2>
          <div className="moving">
            <div class="blur-left"></div>
            <div class="blur-center"></div>
            <div class="blur-right"></div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
          </div>
        </div>
        <div
          className="elem"
          data-img="https://works.studio/assets/imager/images/erthos-brand-identity/43075/Home-Featured-Image_66386012852979bf6f60b2d90a344eff.jpg"
        >
          <h2>Erthos</h2>
          <div className="moving">
            <div class="blur-left"></div>
            <div class="blur-center"></div>
            <div class="blur-right"></div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
          </div>
        </div>
        <div
          className="elem"
          data-img="https://works.studio/assets/imager/images/converse-global-fa23/43403/converse-21_240523_143223_66386012852979bf6f60b2d90a344eff.jpg"
        >
          <h2>Converse</h2>
          <div className="moving">
            <div class="blur-left"></div>
            <div class="blur-center"></div>
            <div class="blur-right"></div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
          </div>
        </div>
        <div
          className="elem"
          data-img="https://works.studio/assets/imager/images/skky-partners/37986/skky-25_66386012852979bf6f60b2d90a344eff.jpg"
        >
          <h2>Skky</h2>
          <div className="moving">
            <div class="blur-left"></div>
            <div class="blur-center"></div>
            <div class="blur-right"></div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
          </div>
        </div>
        <div
          className="elem"
          data-img="https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_66386012852979bf6f60b2d90a344eff.jpg"
        >
          <h2>Boldly</h2>
          <div className="moving">
            <div class="blur-left"></div>
            <div class="blur-center"></div>
            <div class="blur-right"></div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
            <div className="moving-in">
              <h5>Creative direction</h5>
              <h5>Strategy</h5>
              <h5>Branding and Identity</h5>
              <h5>Packaging Design</h5>
              <h5>Devlopment</h5>
            </div>
          </div>
        </div>
        <div id="sec-2_footer">
          <a href="#" title="next" onClick={handleScrollToSection3}>
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
        </div>
      </div>
    </>
  );
};

export default Section2;
