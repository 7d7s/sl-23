import React from "react";
import { useState, useEffect } from "react";
import aboutImg from "../assets/img/about1.jpg";
import aboutlogo from "../assets/img/about-iconpng.png";
import aboutstar from "../assets/img/about-star.png";
import aboutImg2 from "../assets/img/about2.jpg";
import aboutbrain from "../assets/img/about-brain.png";
import aboutPhysiological from "../assets/img/physiological-2.png"
import aboutpsycological from "../assets/img/psycological-2.png"
import aboutlifestyle from "../assets/img/Lifestyle-2.png"
import { Link } from "react-router-dom";

function AboutUsSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress change
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 80) {
          clearInterval(interval);
          return 80;
        }
        return prevProgress + 2; // Adjust increment as needed
      });
    }, 50); // Adjust interval timing for smoothness

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <>
      <section>
        <div className="container my-5 py-5">
          <div className="row justify-content-around">
            <div className="col-lg-6 col-md-12">
              <div className="card-101">
                <h2>
                  <i className="bi bi-flower2"></i> About Us
                </h2>
                <h3 className="py-3 section-title__title text-maroon">
                  Transforming Memory Through the Science of Sleep
                </h3>
                <p className="text-dark">
                  At Sleme, we’re not just another sleep clinic. We blend neuroscience, data-driven insights, and advanced sleep diagnostics to create personalized sleep pathways for optimal brain performance. Our philosophy is simple: Better sleep equals better memory, and better memory equals a better you.
                </p>
                <div className="row mt-4 bg-light-101 rounded">
                  
                  <div className="col-md-6">
                    <div className="p-md-4 p-3 card-sub-101">
                      <div className="d-flex  align-items-center">
                        <div className="about-icon me-xl-4 me-lg-3 me-md-4 me-m-4">
                          <i className="bi bi-bar-chart-steps"></i>
                        </div>
                        <h5 className="text-maroon">
                          Customized  Sleep Architecture
                        </h5>
                      </div>
                      <p className="pt-3 text-dark">Your sleep is as unique as your fingerprint.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 border-left">
                    <div className="p-md-4 p-3 card-sub-101">
                      <div className="d-flex  align-items-center">
                        <div className="about-icon me-xl-4 me-lg-3 me-md-4 me-m-4">
                          <i className="bi bi-funnel bi bi-fullscreen-exit"></i>
                        </div>
                        <h5 className="text-maroon">
                          Science-Backed Solutions
                        </h5>
                      </div>
                      <p className="pt-3 text-dark"> We transform how your brain processes and stores memories.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <ul className="about-details list-unstyled">
                    <li>
                      <Link to="">
                        <div className="icon">
                          <img className="icon-form" src={aboutPhysiological} alt="" />
                        </div>
                        <h5 className="mt-3 fs-m-6">Physiological</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="icon">
                          <img className="icon-form" src={aboutpsycological} alt="" />
                        </div>
                        <h5 className="mt-3 fs-m-6">Psychological</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="icon">
                          <img className="icon-form" src={aboutlifestyle} alt="" />
                        </div>
                        <h5 className="mt-3 fs-m-6">Lifestyle</h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pb-xl-2 pb-md-5">
              <div className="card-about-101">
                <img src={aboutImg} alt="img-fluid" className="rounded" />
                <img src={aboutlogo} alt="img-fluid" className="aboutlogo" />
                <img src={aboutstar} alt="img-fluid" className="aboutstar" />
                <img src={aboutbrain} alt="img-fluid" className="aboutbrain" />
                <img src={aboutImg2} alt="img-fluid" className="aboutImg2" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="prograce-chart"></div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
