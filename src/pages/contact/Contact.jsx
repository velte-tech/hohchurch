import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client";

function Contact() {
  const [contactData, setContactData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "contact"]{..., headerImage->, bannerImage->}`)
      .then((data) => {
        console.log("contactData: ", data[0]);
        setContactData(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <section
        id="contact_showcase"
        style={{
          backgroundImage: `url(${urlFor(contactData?.headerImage?.image)})`,
        }}
      >
        <div className="showcase_wrapper text_center">
          <h2>{contactData?.title}</h2>
        </div>
      </section>

      <section id="contact_address">
        <div className="contact_wrapper">
          <div className="card">
            <p>{contactData?.address}</p>
            {/* <p>Office Hours | M-TH, 10:00 AM – 4:00 PM</p> */}
            <p>Phone | {contactData?.phone}</p>

            <p>
              Email |{" "}
              <a
                href={`mailto:${contactData?.email}`}
                className="hover_overlay"
              >
                {contactData?.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact_prayer"
        style={{
          backgroundImage: `url(${urlFor(contactData?.bannerImage?.image)})`,
        }}
      >
        <div className="prayer_section container text_center">
          <h2>{contactData?.bannerTitle}</h2>
          <p>{contactData?.bannerText}</p>
          <Link to="/prayer" className="btn">
            {contactData?.bannerButtonText}
          </Link>
        </div>
      </section>

      {/* ======= CONTACT_FORM SECTION ======= */}
      <section id="contact_form">
        <div className="form_wrapper container">
          <form
            action="https://88fcc1b06d43556476d88696654f2534"
            method="POST"
            autoComplete="off"
          >
            <ul>
              <li>
                <label htmlFor="first_name">
                  Name <span className="start_sign">*</span>
                </label>
                <div className="name_input">
                  <span>
                    <input
                      name="first_name"
                      id="first_name"
                      type="text"
                      required
                    />
                    <label htmlFor="first_name">First</label>
                  </span>
                  <span>
                    <input name="last_name" id="fiel_4" type="text" required />
                    <label htmlFor="last_name">Last</label>
                  </span>
                </div>
              </li>

              <li>
                <div className="email_input">
                  <span>
                    <label htmlFor="email">
                      Email <span className="start_sign">*</span>
                    </label>
                    <div>
                      <input name="email" id="email" type="email" required />
                    </div>
                  </span>
                  <span>
                    <label htmlFor="tel">Mobile number</label>
                    <div>
                      <input name="tel" id="tel" type="number" />
                    </div>
                  </span>
                </div>
              </li>

              <li>
                <label htmlFor="comments">Comments and Questions</label>
                <div>
                  <textarea
                    name="comments"
                    id="comments"
                    rows="10"
                    required
                    placeholder
                  ></textarea>
                </div>
              </li>

              <li>
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Contact;
