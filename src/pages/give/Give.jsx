import React from "react";
import "./give.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
// import paymentOptions from "../../assets/images/paypal_icon.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

function Give() {
  return (
    <>
      <section id="give_showcase">
        <div className="give_showcase_wrapper container">
          <div className="left">
            <div className="text">
              <p>
                Highway Of Holiness Church
                <br />
                (Online Giving)
              </p>
              <p>
                God Bless you and welcome to our HoH online giving platform.You
                can make your online donation here...Thank You.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <p>Make Your Donation</p>
            </div>
            <div className="payment_img">
              {/* <img src={paymentOptions} alt="" /> */}
            </div>
            <a
              href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=L5USDDJ9JLKZJ"
              target="_blank"
              rel="noopener noreferrer"
              className="donate_link btn"
            >
              Donate
            </a>
          </div>
        </div>
        <div className="arrow_down">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=L5USDDJ9JLKZJ"
          >
            <MdOutlineDoubleArrow />
          </a>
        </div>
      </section>

      {/* <section id="give_form">
        <div className="give_form_wrapper container">
          <form>
            <div className="give_input">
              <label for="username">USERNAME</label>
              <input id="username" type="text" required />
            </div>
            <div className="give_input">
              <label for="password">PASSWORD</label>
              <input id="password" type="password" required />
            </div>
            <div className="bottom_links">
              <input type="submit" name="LOGIN" className="btn" />
              <Link className="btn_l">REGISTER</Link>
              <Link className="btn_l">FORGOT ACCOUNT</Link>
            </div>
          </form>
        </div>
      </section> */}
      <ScrollToTop />
    </>
  );
}

export default Give;
