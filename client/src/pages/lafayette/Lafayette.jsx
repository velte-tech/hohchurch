import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Lafayette.css";
import Search from "../../components/searchLocate/Search";
import SingleCard from "../../components/aboutSlideIn/SingleCard";
import gatheringImg from "../../assets/images/gathering.jpg";
import infantImg from "../../assets/images/infant.jpg";
import womenImg from "../../assets/images/women_group.jpg";
import familyImg from "../../assets/images/family.jpg";
import elderlyImg from "../../assets/images/elderly.jpg";
import parentsImg from "../../assets/images/parents.jpg";
import seminerImg from "../../assets/images/seminer.jpg";
import menImg from "../../assets/images/men.jpg";
import lafPastorImg from "../../assets/images/lafayette_pastor.jpg";
import KidsAcc from "../../components/mAccComponents/KidsAcc";

const Lafayette = () => {
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
      <section id="lafayette_showcase">
        <h1 className="focus-in-contract-bck">
          ADULTS RETREAT
        </h1>
        <p className="date focus-in-contract-bck">SUNDAY: 9* & 11 AM</p>
        <p className="laf_asl focus-in-contract-bck">
          ASL INTERPRETATION service
        </p>
        <Search />
      </section>

      <section>
        <div className="about_welcome">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <p>ABOUT US</p>
            <p>
              We're a church that meets at five locations around Denver, and
              online. Join us for an in-person service or online
            </p>
            <p className="asl_welcome">ASL Interpreted Service at 9AM</p>
          </div>

          <div className="right">
            <SingleCard />

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={gatheringImg} alt="" />
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
              <img src={infantImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">INFANT & CHILD DEDICATION</p>
                <p>Find our service time and direction to our locations</p>
                <Link to="/kids" className="linkAnima">
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

      {/* ======= MINISTRIES SECTION ======= */}

      <section id="ministries">
        <div className="ministries_wrapper">
          <h1 className="text_center">MINISTRIES</h1>

          <KidsAcc label="NextGen">
            <p>
              From cradle to college, we want to come alongside you to help you
              grow in a relationship with Christ. Check out our programs!
            </p>
            <div className="bottom">
              <Link to="/kids" className="btn">
                KIDS
              </Link>
              <Link to="/students" className="btn">
                STUDENTS
              </Link>
              <Link to="/care" className="btn">
                CARE
              </Link>
              <Link to="/parents" className="btn">
                PARENTS
              </Link>
            </div>
          </KidsAcc>

          <KidsAcc label="Groups">
            <p>
              Join us and meet other adults in the 55+ community at Flatirons!
              We will be hosting monthly luncheons and organizing events for
              many interests. Our monthly luncheons include a delicious lunch,
              information about how you can get plugged in at Flatirons and
              encouraging speakers.
            </p>
            <Link to="/groups" className="linkAnima edit">
              Learn More <span className="arrow"></span>
            </Link>
          </KidsAcc>

          <KidsAcc label="55+">
            <p>
              oin us and meet other adults in the 55+ community at Flatirons! We
              will be hosting monthly luncheons and organizing events for many
              interests. Our monthly luncheons include a delicious lunch,
              information about how you can get plugged in at Flatirons and
              encouraging speakers.
            </p>
            <Link className="linkAnima edit">
              Learn More <span className="arrow"></span>
            </Link>
          </KidsAcc>

          <KidsAcc label="Pastoral Care & Shift">
            <p>
              We understand that life gets hard and sometimes you need an
              intentional strategy for change to work through your struggles.
              <br /> <br /> Pastoral Care appointments are available for
              individuals or couples who need prayer, resources, or direction.
              Shift is a 12 Step program offered every Friday night at our
              Lafayette campus. Journey with others confronting issues such as
              marriage and relationship, conflicts, loneliness, depression,
              emotional struggles, drug and alcohol dependence, sexual issues,
              and physical and emotional abuse.
            </p>
            <Link to="/care" className="linkAnima edit">
              Learn More <span className="arrow"></span>
            </Link>
          </KidsAcc>
          <KidsAcc label="parents">
            <p>
              Jesus talked a lot about His love for those who are poor, hurting,
              broken and forgotten. Each campus strives to partner with local
              organizations serving their local community.
            </p>
            <Link to="/parents" className="linkAnima edit">
              Learn More <span className="arrow"></span>
            </Link>
          </KidsAcc>
        </div>
      </section>

      {/* ======= SERVE DIVIDER SETION ======= */}
      <section id="serve_divider">
        <h2 className="text_center">Serve With Us</h2>
        <div className="bottom text_center">
          <Link className="hover_overlay">SUNDAYS</Link>
          <Link className="hover_overlay">WEEKENDS</Link>
        </div>
      </section>

      {/* ======= LAFAYETTE SECTION ======= */}
      <section id="lafayette_events">
        <div className="about_welcome">
          <h2>Events @ Lafayette Campus</h2>
          <div className="right">
            <div className="card">
              <img src={menImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  MEN'S CONNECT
                  <br /> JANUARY 18, 2023
                </p>
                <p>
                  Join us for a weekly study and discussion about the truths in
                  the...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={womenImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  LAFAYETTE WOMEN'S CONNECT
                  <br />
                  JANUARY 18, 2023
                </p>
                <p>
                  Join us for a weekly study and discussion about the truths in
                  the...
                </p>
                <Link to="/" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={familyImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  FAITH AND FAMILY NIGHT
                  <br />
                  JANUARY 20, 2023
                </p>
                <Link to="/" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={elderlyImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  55+ MONTHLY LUNCHEON - JANUARY
                  <br /> JANUARY 23, 2023
                </p>
                <p>
                  Come join us for a luncheon and meet other adults in the 55+
                  community...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={parentsImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  PARENT SEMINAR - THE SEX TALK FOR ALL AGES <br />
                  JANUARY 28, 2023
                </p>
                <p>
                  Sex is a nerve wrecking topic for many parents to consider
                  talking...
                </p>
                <Link to="/" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={seminerImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  55+ MONTHLY LUNCHEON - FEBRUARY
                  <br />
                  FEBRUARY 13, 2023
                </p>
                <p>
                  Come join us for a luncheon and meet other adults in the 55+
                  community...
                </p>
                <Link to="/" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lafayette_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={lafPastorImg}
              alt=""
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
            <h2>HEATHER JACKSON</h2>
            <p>Lafayette Campus Pastor</p>
            <p>
              My family first visited Flatirons one Saturday night after being
              invited. We didn’t know it at the time of course, but we’d dropped
              right into the middle of a values series. Halfway through his
              message on the Fruit of the Spirit, Jim pivoted and challenged
              everyone to jump in and serve in Kids Ministry. It was powerful,
              convicting, beautiful, and compelling—my husband Chris and I
              attended the training and started serving the next weekend! We had
              found our church. Flatirons is unlike any church we’ve
              experienced: vulnerable, authentic teaching, real people, doing
              life and chasing after Jesus together. Married since 1993, Chris
              and I have two daughters, Grace and Lily.
            </p>
            <Link className="linkAnima" to="/contact">
              Contact <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lafayette;
