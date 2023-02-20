import React from "react";
import { Link } from "react-router-dom";
import "./give.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
import paymentOptions from "../../assets/images/payment_options.png";
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
              <img src={paymentOptions} alt="" />
            </div>
          </div>
        </div>
        <div className="arrow_down">
          <a href="#give_form">
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
