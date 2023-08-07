import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EasterService.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Search from "../../components/searchLocate/Search";
import donateImg from "../../assets/images/donate.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client";
import churchImg from "../../assets/images/leaders-hoh.jpg";
import updateImg from "../../assets/images/aboutUpdate.jpg";

const Aurora = () => {
  const [easterData, setEasterData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "easterPage"]{..., headerImage->, easterCards[] {..., image->}}`
      )
      .then((data) => {
        console.log("easter: ", data);
        setEasterData(data[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log("easterData: ", easterData);
  }, [easterData]);

  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        // offet: 1000,
      },
      []
    );
  });

  return (
    <div id="super">
      <section
        id="about_showcase"
        style={{
          backgroundImage: `url(${urlFor(easterData?.headerImage?.image)})`,
        }}
      >
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">{easterData?.title}</h1>
          <p className="date focus-in-contract-bck">{easterData?.subtitle}</p>
          {/* <Search /> */}
        </div>
      </section>

      <section>
        <div className="about_welcome">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <p>{easterData?.easterCaptionTitle}</p>
            <p>{easterData?.easterCaptionText}</p>
            <Link to="/contact" className="btn">
              VISIT OUR LOCATION
            </Link>
          </div>

          <div className="right">
            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(easterData?.easterCards[0]?.image?.image)}
                alt={easterData?.easterCards[0]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {easterData?.easterCards[0]?.title}
                </p>
                <p>{easterData?.easterCards[0]?.description}</p>
                <Link
                  to={easterData?.easterCards[0]?.link}
                  className="linkAnima"
                >
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(easterData?.easterCards[1]?.image?.image)}
                alt={easterData?.easterCards[1]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {easterData?.easterCards[1]?.title}
                </p>
                <p>{easterData?.easterCards[1]?.description}</p>
                <Link
                  to={easterData?.easterCards[1]?.link}
                  className="linkAnima"
                >
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div
              className="card"
              data-aos-delay="900"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(easterData?.easterCards[2]?.image?.image)}
                alt={easterData?.easterCards[2]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {easterData?.easterCards[2]?.title}
                </p>
                <p>{easterData?.easterCards[2]?.description}</p>
                <Link
                  to={easterData?.easterCards[2]?.link}
                  className="linkAnima"
                >
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div
              className="shape"
              data-aos="slide-left"
              data-aos-anchor-placement="center-bottom"
            ></div>
          </div>
        </div>
      </section>

      {/* <section id="aurora_events">
        <h1 className="focus-in-contract-bck">Easter Events</h1>
      </section> */}
      <ScrollToTop />
    </div>
  );
};

export default Aurora;
