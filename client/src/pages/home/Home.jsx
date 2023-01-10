import { Link } from "react-router-dom";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slides from "../../components/msgSlider/slider";

// Images
import churchImg from "../../assets/images/church.jpg";
import outreachImg from "../../assets/images/outreach.jpg";
import newHereImg from "../../assets/images/newHere.jpg";
import phoneImg from "../../assets/images/phone 1.png";
import androidImg from "../../assets/images/android 1.png";
import iosImg from "../../assets/images/ios 1.png";
import messageImg1 from "../../assets/images/church6.jpg";
import messageImg2 from "../../assets/images/church1.jpg";
import messageImg3 from "../../assets/images/church2.jpg";
import messageImg4 from "../../assets/images/church3.jpg";
import messageImg5 from "../../assets/images/church4.jpg";
import messageImg6 from "../../assets/images/church5.jpg";

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

                <Link className="link linkAnima">
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
                <Link className="linkAnima">
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
                <p>Finf our service time and direction to our locations</p>
                <Link className="linkAnima">
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
                <p>Finf our service time and direction to our locations</p>
                <Link to="/about" className="linkAnima">
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
              <img src={phoneImg} alt="" />
            </div>

            <div className="right">
              <h1 className="text_center">
                DOWNLOAD THE NEW HOH-CHURCH COMMUNITY CHURCH APP
              </h1>
              <div className="bottom">
                <Link className="hover_overlay">
                  <img src={androidImg} alt="" />
                </Link>
                <Link className="hover_overlay">
                  <img src={iosImg} alt="" />
                </Link>
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
                  <Link className="hover_overlay">
                    <img src={messageImg1} alt="" />
                  </Link>
                  <Link className="btn">VIEW</Link>
                </div>

                <div className="box">
                  <Link className="hover_overlay">
                    <img src={messageImg2} alt="" />
                  </Link>
                  <Link className="btn">VIEW</Link>
                </div>
                <div className="box">
                  <Link className="hover_overlay">
                    <img src={messageImg3} alt="" />
                  </Link>
                  <Link className="btn">VIEW</Link>
                </div>
              </div>

              <div className="down">
                <div className="box">
                  <Link className="hover_overlay">
                    <img src={messageImg4} alt="" />
                  </Link>
                  <Link className="btn">VIEW</Link>
                </div>
                <div className="box">
                  <Link className="hover_overlay">
                    <img src={messageImg5} alt="" />
                  </Link>
                  <Link className="btn">VIEW</Link>
                </div>
                <div className="box">
                  <Link className="hover_overlay">
                    <img src={messageImg6} alt="" />
                  </Link>
                  <Link className="btn">VIEW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Slides />
      </section>
    </>
  );
}

export default Home;
