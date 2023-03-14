import { Link } from "react-router-dom";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slides from "../../components/msgSlider/slider";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import kmmm3 from "../../assets/images/alexdocas2.jpg";

// Images
import churchImg from "../../assets/images/church.jpg";
import outreachImg from "../../assets/images/outreach.jpg";
import newHereImg from "../../assets/images/newHere.jpg";
import phonexxx from "../../assets/images/phone-app.png";

//video
import pastorVideo from "../../assets/video/video.mp4";

import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

function Home() {
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
    <>
      <section id="home">
        <div className="home_showcase">
          <video autoPlay muted loop id="video" type="video/mp4">
            <source src={pastorVideo} />
          </video>
          <div className="container">
            <div className="showcase_content">
              <div className="top">
                <p data-aos="zoom-in" data-aos-delay="200">
                  WELCOME TO
                </p>
                <p data-aos="zoom-in" data-aos-delay="400">
                  HIGHWAY OF HOLINESS CHURCH
                </p>
              </div>
              <div className="links" data-aos="zoom-in" data-aos-delay="600">
                <Link to="/sermon/1" className="link linkAnima">
                  Watch Now
                  <span className="arrow"></span>
                </Link>

                <Link to="/messages" className="link linkAnima">
                  More In This series
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
              Welcome to Highway Of Holiness Church
            </p>

            {/* <p>Highway Of Holiness Church</p> */}
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              // data-aos-offset="200"
              data-aos-anchor-placement="center-bottom"
              className="home_text"
            >
              We meet on Wednesdays from 12- 1pm, 3-4pm on our telephone prayer
              line and at 7.30pm on our church premises We meet on facebook live
              every Friday at 7.30pm for our Bible Academy
            </p>
          </div>
          <div className="right">
            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={churchImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">Church Services & Time</p>
                <p>Find our service time and direction to our locations</p>
                <Link to="/groups" className="linkAnima">
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
              <img src={outreachImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">Outreach & Trips</p>
                <p>Find our service time and direction to our locations</p>
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
              <img src={newHereImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">New Here?</p>
                <p>Find our service time and direction to our locations</p>
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
                    <img src={kmmm3} alt="" />
                  </div>
                </div>

                <div
                  className="ps-right"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="psr1">
                    Welcome address from Pastor Alex and Pastor Dorcas
                  </div>

                  <div className="psr2">
                    We warmly welcome you to Highway of Holiness Church, a place
                    of faith, fellowship and freedom in Christ. Here at HOH
                    everything we do is centred on the living word of God, the
                    Holy Bible.We believe that the answers to life’ s questions
                    are found within the pages of God’ s holy word. This is the
                    source we stand on to teach, equip and edify God’ s
                    children. Our desire is to demonstrate how you can live a
                    purposeful life in Christ, being fruitful in your gifts and
                    bringing others to His Kingdom. As believers in Christ we
                    are here on earth to be ambassadors of God’ s Kingdom and we
                    do this by demonstrating Gods love to the world.
                  </div>

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
              <h2>PAST Messages</h2>
              <p>Checkout out past sermons and services held by HOH-CHURCH.</p>
            </div>

            <div className="bottom">
              <div className="up">
                <div className="box">
                  <div className="hover_overlay">
                    <iframe
                      id="utube_video"
                      width="560"
                      height="270"
                      src="https://www.youtube.com/embed/NAg3fUq66-o"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/NAg3fUq66-o"
                  >
                    VIEW
                  </a>
                </div>

                <div className="box">
                  <div className="hover_overlay">
                    <iframe
                      id="utube_video"
                      width="560"
                      height="270"
                      src="https://www.youtube.com/embed/aDfTtKRBnBc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/live/aDfTtKRBnBc?feature=share"
                  >
                    VIEW
                  </a>
                </div>
                <div className="box">
                  <div className="hover_overlay">
                    <iframe
                      id="utube_video"
                      width="560"
                      height="270"
                      src="https://www.youtube.com/embed/ZQyO7YDV0Us"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/live/ZQyO7YDV0Us?feature=share"
                  >
                    VIEW
                  </a>
                </div>
              </div>

              <div className="down">
                <div className="box">
                  <div className="hover_overlay">
                    <iframe
                      id="utube_video"
                      width="560"
                      height="270"
                      src="https://www.youtube.com/embed/L2gIEE64KbU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/live/L2gIEE64KbU?feature=share"
                  >
                    VIEW
                  </a>
                </div>
                <div className="box">
                  <div className="hover_overlay">
                    <iframe
                      id="utube_video"
                      width="560"
                      height="270"
                      src="https://www.youtube.com/embed/S-vIVk55kbg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href=" https://www.youtube.com/live/S-vIVk55kbg?feature=share"
                  >
                    VIEW
                  </a>
                </div>

                <div className="box">
                  <div className="hover_overlay">
                    <iframe
                      id="utube_video"
                      width="560"
                      height="270"
                      src="https://www.youtube.com/embed/5lqmtiGC0WM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/live/5lqmtiGC0WM?feature=share"
                  >
                    VIEW
                  </a>
                </div>
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
