import React from "react";
import "./newsletter.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newsletter_showcase">
        <h1 className="focus-in-contract-bck">GET UPDATED</h1>
      </div>
      <div className="newsletter_form">
        <form
          action="https://88fcc1b06d43556476d88696654f2534"
          method="POST"
          title="Newsletter"
        >
          <div className="name">
            <div className="firstname">
              <label for="firstname" className="star">
                FIRST NAME
              </label>
              <input required type="text" name="firstname" id="firstname" />
            </div>
            <div className="lastname">
              <label for="lastname" className="star">
                LAST NAME
              </label>
              <input required type="text" name="lastname" id="lastname" />
            </div>
          </div>
          <div className="contact">
            <div className="email">
              <label for="email" className="star">
                EMAIL
              </label>
              <div className="i_input">
                <input required type="text" name="email" id="email" />
              </div>
            </div>
            <div className="mobile">
              <label for="mobile_number" className="star">
                MOBILE PHONE
              </label>
              <div className="i_input">
                <input required type="text" name="mobile_number" id="mobile" />
              </div>
            </div>
          </div>
          {/* <div className="campus">
            <label for="campus" className="star">
              CAMPUS
            </label>
            <select name="campus" id="campus" required>
              <option value="">West Campus</option>
              <option value="">Lafayette Campus</option>
              <option value="">Denver Campus</option>
              <option value="">Longmont Campus</option>
              <option value="">Aurora Campus</option>
              <option value="">Online Campus</option>
            </select>
          </div> */}

          <input type="submit" value="SUBCRIBE" />
        </form>
      </div>
      <ScrollToTop />
    </section>
  );
}

export default Newsletter;
