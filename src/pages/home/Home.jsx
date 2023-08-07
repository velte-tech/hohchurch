import { Link } from "react-router-dom";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Slides from "../../components/msgSlider/slider";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
// import kmmm3 from "../../assets/images/alexdocas2.jpg";
import kmmm3 from "../../assets/images/alexdocas22.png";

// Images
import churchImg from "../../assets/images/obligation-pastor2.jpg";
import outreachImg from "../../assets/images/outreach.jpg";
import newHereImg from "../../assets/images/newHere.jpg";
import phonexxx from "../../assets/images/phone-app.png";

//video
// import pastorVideo from "../../assets/video/video.mp4";

import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import "../../styles.css";
import sanityClient from "../../client.js";
import { urlFor } from "../../utils/urlFor";

function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        // offet: 1000,
      },
      []
    );
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{..., aboutImage->, missionCards[] {..., image->} }`
      )
      .then((data) => {
        console.log(data);
        setHomeData(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section id="home">
        <div className="home_showcase">
          {/* <video autoPlay muted loop id="video" type="video/mp4">
            <source src={pastorVideo} />
          </video> */}
          <div className="container">
            <div className="showcase_content">
              <div className="top">
                <p data-aos="zoom-in" data-aos-delay="200">
                  {homeData?.welcomeTitle}
                </p>
                <p data-aos="zoom-in" data-aos-delay="400">
                  {homeData?.welcomeSubtitle}
                </p>
              </div>
              <div className="links" data-aos="zoom-in" data-aos-delay="600">
                <Link className="link">
                  Join Us This Sunday
                  <span className="arrow_still"></span>
                </Link>

                <Link to="/weekly_programmes" className="link linkAnima">
                  Weekly Programme
                  <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ======= WELCOME SECTION ======= */}
        <div className="home_welcome">
          <div className="left">
            <p
              className="title"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
            >
              {homeData?.missionTitle}
            </p>

            {/* <p>Highway Of Holiness Church</p> */}
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              // data-aos-offset="200"
              data-aos-anchor-placement="center-bottom"
              className="home_text"
            >
              {homeData?.missionDescription}
            </p>
          </div>
          <div className="right">
            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(homeData?.missionCards[0]?.image?.image)}
                alt={homeData?.missionCards[0]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {homeData?.missionCards[0]?.title}
                </p>
                <p>{homeData?.missionCards[0]?.description || ""}</p>
                <Link to="/Weekly_programmes" className="linkAnima">
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
                src={urlFor(homeData?.missionCards[1]?.image?.image)}
                alt={homeData?.missionCards[1]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {homeData?.missionCards[1]?.title}
                </p>
                <p>{homeData?.missionCards[1]?.description || ""}</p>
                <Link to="/outreach" className="linkAnima">
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
                src={urlFor(homeData?.missionCards[2]?.image?.image)}
                alt={homeData?.missionCards[2]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {" "}
                  {homeData?.missionCards[2]?.title}
                </p>
                <p>{homeData?.missionCards[2]?.description || ""}</p>
                <Link to="/im_new" className="linkAnima">
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

        {/* PASTOR ALEX */}

        <div id="psalex">
          <div className="ps-alex-wrapper">
            <div className="ps-alex-show">
              <div className="ps-alex-case">
                <div className="ps-left">
                  <div
                    className="psl-pic"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <img
                      src={urlFor(homeData?.aboutImage?.image)}
                      alt={homeData?.aboutImage?.image?.alt}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <div
                  className="ps-right"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="psr1">{homeData?.aboutTitle}</div>

                  <div className="psr2">{homeData?.aboutDescription}</div>

                  <div className="psr3">
                    <Link to="/contact" className="links linkAnima">
                      CONTACT <span className="arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASTOR ALEX end */}

        {/* ======= APP SECTION ======= */}
        <div className="home_app">
          <div className="container app_wrapper">
            <div className="left">
              <img src={phonexxx} alt="" />
            </div>

            <div className="right">
              <h1 className="text_center">
                GET SOCIAL WITH US <br /> (HIGHWAY OF HOLINESS CHURCH)
              </h1>
              <div className="bottom">
                <a
                  href="https://web.facebook.com/HighwayofHolinessUK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/shift.hy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram />
                </a>

                <a
                  href="https://twitter.com/shift_hy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>

                <a
                  href="https://www.youtube.com/@highwayofholinesschristian7997"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ======= MESSAGES SECTION ======= */}
        <div className="home_message">
          <div className="message_wrapper container text_center">
            <div className="top">
              <h2>{homeData?.pastMessagesTitle}</h2>
              <p>{homeData?.pastMessagesText}</p>
            </div>

            <div className="bottom">
              <div className="up">
                {homeData?.pastMessages?.slice(0, 3).map((message, index) => (
                  <div
                    key={index}
                    className="col-md-4 px-0 my-2 mr-2 messageBorder"
                  >
                    <div className="hover_overlay">
                      <iframe
                        id="utube_video"
                        width="360"
                        height="230"
                        src={`https://www.youtube.com/embed/${message.youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className=""
                      ></iframe>
                    </div>
                    <a
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://youtu.be/${message.youtubeId}`}
                    >
                      VIEW
                    </a>
                  </div>
                ))}
              </div>

              <div className="down">
                {homeData?.pastMessages?.slice(3, 6).map((message, index) => (
                  <div
                    key={index}
                    className="col-md-4 px-0 my-2 mr-2 messageBorder"
                  >
                    <div className="hover_overlay">
                      <iframe
                        id="utube_video"
                        width="360"
                        height="230"
                        src={`https://www.youtube.com/embed/${message.youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className=""
                      ></iframe>
                    </div>
                    <a
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://youtu.be/${message.youtubeId}`}
                    >
                      VIEW
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Slides />
      </section>
      <ScrollToTop />
    </>
  );
}

export default Home;
