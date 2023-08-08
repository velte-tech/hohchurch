import React, { useEffect, useState } from "react";
import "./Ministries.css";
// import bapp from "../../assets/images/cx5.jpeg";
// import bapp from "../../assets/images/YAB.jpg";
// import bapp6 from "../../assets/images/kmm.jpeg";
import bapp2 from "../../assets/images/ya22.jpeg";
import bapp3 from "../../assets/images/YAB4.jpg";
import bapp4 from "../../assets/images/gpo2.jpeg";
// import bapp5 from "../../assets/images/gpo3.jpeg";
import AOS from "aos";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import "../../styles.css";
import { PopupModal } from "@dannybee/popup-modal";
import { useEmail } from "../../contexts/EmailContext";
import sanityClient from "../../client.js";
import { urlFor } from "../../utils/urlFor";

const Ministries = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
  };
  const [showPopup, setShowPopup] = useState(false);
  const [{ name, email, phone, department, subject }, setState] =
    useState(initialState);
  const [error, setError] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [ministryData, setMinistryData] = useState();

  const {
    serveSubmitEmail,
    serveWithUsRef,
    setFormFields,
    setInitialState,
    statusMessage,
    status,
  } = useEmail();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleRegister = () => {
    setRegistered(!registered);
  };

  useEffect(() => {
    setFormFields({ name, email, phone, department, subject });
    setInitialState(initialState);

    sanityClient
      .fetch(
        `*[_type == "ministries"]{..., headerImage->, ministryList[] {..., image->}}`
      )
      .then((data) => {
        console.log("ministry: ", data[0]);
        setMinistryData(data[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("registered")) {
      console.log("registered", localStorage.getItem("registered"));
      toggleRegister();
    }
  }, [status]);

  useEffect(() => {
    console.log("status: ", status);
    if (status === 200) {
      setState(initialState);
      togglePopup();
    }
  }, [status]);

  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        once: false,
        mirror: true,
      },
      []
    );
  });

  return (
    <div id="super">
      <div id="ministry-page">
        <div
          className="ministry-wrapper"
          style={{
            backgroundImage: `url(${urlFor(ministryData?.headerImage?.image)})`,
          }}
        >
          {/* showcase */}
          <div className="ministry-case">
            <div className="ministry-text">
              <h1 className="focus-in-contract-bck">{ministryData?.title}</h1>
            </div>
          </div>
          {/* showcase end */}
        </div>

        {/* where */}

        {/* <div className="where-wrap">
          <div className="where-show">
            <div className="where-case">
              <div className="where-11" data-aos="fade-right">
                <span className="w-11-1 focus-in-contract-bck">
                  SERVE WITH US!
                </span>
                <br></br>
                Highway of Holiness is a volunteer - driven community and we
                need you to make things work! Sign up to serve with one of our
                teams below.
              </div>

              <div className="where-22">
                <div
                  className="w-shape"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-anchor-placement="center-bottom"
                ></div>
                <div
                  className="w-pic"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-anchor-placement="center-bottom"
                >
                  
                </div>
                <div className="w-tt focus-in-contract-bck">
                  WHERE WOULD YOU <br></br>
                  LIKE TO SERVE ?
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* where end */}

        {/* min-sec */}

        <div className="min-sec-wrapper">
          <div className="min-sec-case">
            {/* flrxxxxxxxx */}

            <div className="min-sec">
              {ministryData?.ministryList?.slice(0, 2).map((ministry) => (
                <div key={ministry._key} className="minsec">
                  <div className="min-1">
                    <img
                      src={urlFor(ministry?.image?.image)}
                      alt={ministry?.image?.image?.alt}
                    />
                  </div>
                  <div className="min-2">{ministry?.name}</div>
                  <div className="min-3">
                    <Link to={ministry.link} className="linkAnima">
                      MORE INFO<span className="arrow"></span>
                    </Link>
                  </div>
                  <div className="min-4"></div>
                </div>
              ))}
            </div>

            {/* flexxxxxxxxxxxx */}

            {/* flrxxxxxxxx */}

            <div className="min-sec">
              {ministryData?.ministryList?.slice(2).map((ministry) => (
                <div key={ministry._key} className="minsec">
                  <div className="min-1">
                    <img
                      src={urlFor(ministry?.image?.image)}
                      alt={ministry?.image?.image?.alt}
                    />
                  </div>
                  <div className="min-2">{ministry?.name}</div>
                  <div className="min-3">
                    <Link to={ministry.link} className="linkAnima">
                      MORE INFO<span className="arrow"></span>
                    </Link>
                  </div>
                  <div className="min-4"></div>
                </div>
              ))}

              {/* <div className="minsec">
              <div className="min-1">
                <img src={bapp6} alt="" />
              </div>
              <div className="min-2">PARENTS</div>
              <div className="min-3">
                
                <Link to="/Parents" className="linkAnima">
                  MORE INFO<span className="arrow"></span>{" "}
                </Link>
              </div>
              <div className="min-4"></div>
            </div> */}
            </div>

            {/* flexxxxxxxxxxxx */}

            {/* flrxxxxxxxx */}

            <div className="min-sec">
              {/* <div className="minsec">
              <div className="min-1">
                <img src={bapp4} alt="" />
              </div>
              <div className="min-2">KIDS MINISTRY</div>
              <div className="min-3">
                
                <Link to="/Kids" className="linkAnima">
                  MORE INFO<span className="arrow"></span>
                </Link>
              </div>
              <div className="min-4"></div>
            </div> */}

              {/* <div className="minsec">
              <div className="min-1">
                <img src={bapp5} alt="" />
              </div>
              <div className="min-2">CARE</div>
              <div className="min-3">
                
                <Link to="/Care" className="linkAnima">
                  MORE INFO<span className="arrow"></span>{" "}
                </Link>
              </div>
              <div className="min-4"></div>
            </div> */}
            </div>

            {/* flexxxxxxxxxxxx */}
          </div>
        </div>

        {/* min-sec end */}

        {/* where */}

        <div className="where-wrap">
          <div className="where-show">
            <div className="where-case">
              <div className="where-11" data-aos="fade-right">
                <span className="w-11-1 focus-in-contract-bck">
                  SERVE WITH US!
                </span>
                <br></br>
                <p>
                  Highway of Holiness is a volunteer - driven community and we
                  need you to make things work! Sign up to serve with one of our
                  teams below.
                </p>
                {!registered && (
                  <a
                    onClick={togglePopup}
                    className="btn ml-0"
                    style={{ textTransform: "uppercase" }}
                  >
                    click here to serve
                  </a>
                )}
              </div>

              <div className="where-22">
                <div
                  className="w-shape"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-anchor-placement="center-bottom"
                ></div>
                <div
                  className="w-pic"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-anchor-placement="center-bottom"
                ></div>
                <div className="w-tt focus-in-contract-bck">
                  WHERE WOULD YOU <br></br>
                  LIKE TO SERVE ?
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* where end */}

        <ScrollToTop />

        {showPopup && (
          <PopupModal handleClose={togglePopup}>
            {/* {status !== 200 ? ( */}
            <div className="p-4">
              <h2 className="pb-2" style={{ textTransform: "uppercase" }}>
                Serve With Us
              </h2>
              {statusMessage && (
                <p
                  className={`alertMsg mb-2 text-center ${
                    error ? "text-danger" : "text-success"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <p className="pb-3" style={{ fontSize: "18px" }}>
                Thank you for considering to volunteer with us please fill in
                your details In the form below
              </p>

              <form ref={serveWithUsRef} onSubmit={serveSubmitEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    autoFocus
                    name="name"
                    required
                    placeholder="Enter Your Name"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Member Sign up"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter Your E-mail"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter Your Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">
                    Please state the department you wish to join
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    name="department"
                    required
                    placeholder="Enter Your Department"
                  />
                </div>

                <button type="submit" className="btn ml-0 mb-4">
                  Submit
                </button>
              </form>
            </div>
          </PopupModal>
        )}
      </div>
    </div>
  );
};

export default Ministries;
