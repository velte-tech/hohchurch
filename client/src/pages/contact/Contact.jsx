import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              <Link className="hover_overlay">
                info@highwayofholinesschurch.com
              </Link>{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="contact_prayer">
        <div className="prayer_section container text_center">
          <h2>WHEN LIFE HURTS, PRAYER HELPS!</h2>
          <p>
            You are not alone in your situation! The Flatirons Prayer Team
            exists to call on God for those in need. Please share your requests
            with us so that we can stand alongside you in prayer. If you need
            some additional support, let us know so that we can help you get
            connected with others at Flatirons that understand your struggle and
            can offer hope.
          </p>
          <Link to="/prayer" className="btn">
            SUBMIT A PRAYR REQUEST
          </Link>
        </div>
      </section>

      {/* ======= CONTACT_FORM SECTION ======= */}
      <section id="contact_form">
        <div className="form_wrapper container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <ul>
              {/* <li>
                <label for="interest">
                  Choose the type of Question or Interest
                  <span className="star_sign"> *</span>
                </label>
                <div>
                  <select name="interest" id="interest">
                    <option value="(Select One)">(Select One)</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Add or Update My Contact Information">
                      Add or Update My Contact Information
                    </option>
                    <option value="	my.flatironschurch.com Account Help">
                      my.flatironschurch.com Account Help
                    </option>
                    <option value="My Story">My Story</option>
                    <option value="In Need of Financial or Material Assistance">
                      In Need of Financial or Material Assistance
                    </option>
                    <option value="Care Ministry / Pastoral Care">
                      Care Ministry / Pastoral Care
                    </option>
                    <option value="Wedding Pastor Request">
                      Wedding Pastor Request
                    </option>
                  </select>
                </div>
              </li> */}

              <li>
                <label>
                  Name <span className="start_sign">*</span>
                </label>
                <div className="name_input">
                  <span>
                    <input
                      name="fiel_3"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label for="field_3">First</label>
                  </span>
                  <span>
                    <input
                      name="fiel_4"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label for="field_4">Last</label>
                  </span>
                </div>
              </li>

              <li>
                <label for="field_5">
                  Email <span className="start_sign">*</span>
                </label>
                <div>
                  <input
                    name="field_5"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </li>

              {/* <li>
                <label for="field_6">
                  Cell Phone Number
                  <span className="start_sign"> *</span>
                </label>

                <div className="phone_input">
                  <span>
                    <input
                      name="field_7"
                      type="tel"
                      size="3"
                      maxlenght="3"
                      required
                    />
                    <label for="field_7">###</label>
                  </span>

                  <span className="dash"></span>
                  <span>
                    <input
                      name="field_8"
                      type="tel"
                      size="3"
                      maxlenght="3"
                      required
                    />
                    <label for="field_8">###</label>
                  </span>
                  <span className="dash"></span>
                  <span>
                    <input
                      name="field_9"
                      type="tel"
                      size="4"
                      maxlenght="4"
                      required
                    />
                    <label for="field_9">###</label>
                  </span>
                </div>
              </li>

              <li>
                <label for="fiel_10">
                  Alternate Phone Number
                  <span className="start_sign"> *</span>
                </label>
                <div className="phone_input">
                  <span>
                    <input name="field_10" type="tel" size="3" maxlenght="3" />
                    <label for="field_10">###</label>
                  </span>
                  <span className="dash"></span>
                  <span>
                    <input name="field_11" type="tel" size="3" maxlenght="3" />
                    <label for="field_11">###</label>
                  </span>
                  <span className="dash"></span>
                  <span>
                    <input name="field_12" type="tel" size="4" maxlenght="4" />
                    <label for="field_12">###</label>
                  </span>
                </div>
              </li> */}

              <li>
                <label for="field13">Comments and Questions</label>
                <div>
                  <textarea
                    name="field13"
                    id="field13"
                    rows="10"
                    required
                    placeholder
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
}

export default Contact;
