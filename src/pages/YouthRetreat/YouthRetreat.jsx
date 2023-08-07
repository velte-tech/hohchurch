import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./YouthRetreat.css";
// import Search from "../../components/searchLocate/Search";
import AboutSlideIn from "../../components/aboutSlideIn/AboutSlideIn";
import youthImg from "../../assets/images/retreat-01.jpg";
import personImg from "../../assets/images/retreat-03.jpg";
// import breakfast from "../../assets/images/breakfast.jpg";
// import comingSoon from "../../assets/images/comingSoon.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client.js";

const Denver = () => {
  const [youthData, setYouthData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "youthRetreat"]{..., headerImage->, youthCards[] {..., image->}, youthSectionImage-> }`
      )
      .then((data) => {
        console.log("youth: ", data);
        setYouthData(data[0]);
      })
      .catch(console.error);
  }, []);

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
        id="denver_showcase"
        style={{
          backgroundImage: `url(${urlFor(youthData?.headerImage?.image)})`,
        }}
      >
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">{youthData?.title}</h1>
          {/* <p className="date focus-in-contract-bck">SUNDAY: 9,11 AM & 6:30PM</p> */}
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
            <p>{youthData?.youthCaptionTitle}</p>
            <p>{youthData?.youthCaptionText}</p>
          </div>

          <div className="right">
            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(youthData?.youthCards[0]?.image?.image)}
                alt={youthData?.youthCards[0]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {youthData?.youthCards[0]?.title}
                </p>
                <p>{youthData?.youthCards[0]?.description}</p>
                <Link to={youthData?.youthCards[0]?.link} className="linkAnima">
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
                src={urlFor(youthData?.youthCards[1]?.image?.image)}
                alt={youthData?.youthCards[1]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {youthData?.youthCards[1]?.title}
                </p>
                <p>{youthData?.youthCards[1]?.description}</p>
                <Link to={youthData?.youthCards[1]?.link} className="linkAnima">
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
                src={urlFor(youthData?.youthCards[2]?.image?.image)}
                alt={youthData?.youthCards[2]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {youthData?.youthCards[2]?.title}
                </p>
                <p>{youthData?.youthCards[2]?.description}</p>
                <Link to={youthData?.youthCards[2]?.link} className="linkAnima">
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

      <section id="denver_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={urlFor(youthData?.youthSectionImage?.image)}
              alt={youthData?.youthSectionImage?.image?.alt}
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="600"
            />
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-anchor-placement="top center"
          >
            <h2>{youthData?.youthSectionTitle}</h2>
            <p>{youthData?.youthSectionText}</p>
            <Link className="linkAnima">
              Contact <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= SECTION: DENVER_EVENTS ======= */}
      <section id="denver_events">
        <div className="denver_events_wrapper">
          <h2> Changed Lives - Youth and Young Adults Retreat</h2>
          <div className="card_wrapper">
            {/* <div className="card">
              <img src={breakfast} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  PANCAKE BREAKFAST <br />
                  JANUARY 15, 2023
                </p>
                <p>
                  Pancake Day! Join us for a Pancake Breakfast on the 3rd Sunday
                  of...
                </p>
                <Link to="/" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div> */}
            {/* <div className="card">
              <img src={comingSoon} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  COMING <br />
                  SOON!
                </p>
                <p>
                  Coming Soon! Connect - Every Thursday. A place to connect,
                  make new...
                </p>
                <Link className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Denver;
