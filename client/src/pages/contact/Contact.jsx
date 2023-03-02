import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

function Contact() {
  return (
    <div>
      <section id="contact_showcase">
        <div className="showcase_wrapper text_center">
          <h2>CONTACT US</h2>
        </div>
      </section>

      <section id="contact_address">
        <div className="contact_wrapper">
          <div className="card">
            <p>
              Central Office Address | Unit 8, 2-8 Fountayne Rd, London N15 4QL,
              United Kingdom
            </p>
            <p>Office Hours | M-TH, 10:00 AM – 4:00 PM</p>
            <p>Phone | +442088084444</p>

            <p>
              Email |{" "}
              <a href="mailto:Info@hohcenter.com" className="hover_overlay">
                Info@hohcenter.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="contact_prayer">
        <div className="prayer_section container text_center">
          <h2>WHEN LIFE HURTS, PRAYER HELPS!</h2>
          <p>
            You are not alone in your situation! The Highway Of Holiness Church
            Prayer Team exists to call on God for those in need. Please share
            your requests with us so that we can stand alongside you in prayer.
            If you need some additional support, let us know so that we can help
            you get connected with others at Flatirons that understand your
            struggle and can offer hope.
          </p>
          <Link to="/prayer" className="btn">
            SUBMIT A PRAYR REQUEST
          </Link>
        </div>
      </section>

      {/* ======= CONTACT_FORM SECTION ======= */}
      <section id="contact_form">
        <div className="form_wrapper container">
          <form
            action="https://formsubmit.co/info@hohcentre.co.uk"
            method="POST"
            autoComplete="off"
          >
            <ul>
              <li>
                <label for="first_name">
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
                    <label for="first_name">First</label>
                  </span>
                  <span>
                    <input name="last_name" id="fiel_4" type="text" required />
                    <label for="last_name">Last</label>
                  </span>
                </div>
              </li>

              <li>
                <label for="email">
                  Email <span className="start_sign">*</span>
                </label>
                <div>
                  <input name="email" id="email" type="email" required />
                </div>
              </li>

              <li>
                <label for="comments">Comments and Questions</label>
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
