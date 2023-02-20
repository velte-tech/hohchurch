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

// Images
import churchImg from "../../assets/images/church.jpg";
import outreachImg from "../../assets/images/outreach.jpg";
import newHereImg from "../../assets/images/newHere.jpg";
import phonexxx from "../../assets/images/phone-app.png";
import ScrollToTop from "../../components/ScrollToTop/index";

function Home() {
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
      },
      []
    );
  });

  return (
    <>
      <section id="home">
        <div className="home_showcase">
          <div className="container">
            <div className="showcase_content">
              <div className="top">
                <p>LATEST MESSAGE</p>
                <p>THE HABIT OF GATHERING - WEEK 1</p>
              </div>
              <div className="links">
                <Link className="link linkAnima">
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
            <p data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              Welcome to HoH-church
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              // data-aos-offset="200"
              data-aos-anchor-placement="center-bottom"
            >
              We're a church that meets at five locations around Denver, and
              online. Join us for an in-person service or online
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

                <a href="" target="_blank" rel="noopener noreferrer">
                  <FiInstagram />
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterCircle />
                </a>

                <a
                  href="https://www.youtube.com/@highwayofholinesschristian7997"
                  target="_blank"
                  // rel="noopener noreferrer"mk
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
