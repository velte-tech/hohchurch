import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <section id="footer">
      <div className="footer_wrapper container text_center">
        <div className="foot_content">
          <div className="content_Menu menu">
            <h3 className="footer_menu_head">Menu</h3>
            <Link to="/contact" className="links linkAnima">
              Contact Us <span className="arrow"></span>
            </Link>
            <Link to="/about_hoh" className="links linkAnima">
              ABOUT-HOH <span className="arrow"></span>
            </Link>
            <a
              href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=L5USDDJ9JLKZJ"
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              Give <span className="arrow"></span>
            </a>
            <Link to="/ministries" className="links linkAnima">
              MINISTRIES <span className="arrow"></span>
            </Link>
            <Link to="/groups" className="links linkAnima">
              GROUPS <span className="arrow"></span>
            </Link>
          </div>

          <div className="content_Menu2 menu">
            <h3 className="footer_menu_head">External Links</h3>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              Kindom Lifstyle Mission<span className="arrow"></span>
            </a>
            <a
              href="http://highwayhouse.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              HighWay House{" "}
              <small className="footer__small"> (Shelter/ day center) </small>{" "}
              <span className="arrow"></span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              kingdom alliance mentorship <span className="arrow"></span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              Highway youth club{" "}
              <small className="footer__small"> (bruce grove center) </small>
              <span className="arrow"></span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              Suplimentary education{" "}
              <small className="footer__small"> (Saturday school) </small>{" "}
              <span className="arrow"></span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              keep it real{" "}
              <small className="footer__small"> (youth talk show) </small>{" "}
              <span className="arrow"></span>
            </a>
            <a
              href="https://linktr.ee/Shift.HY"
              target="_blank"
              rel="noreferrer"
              className="links linkAnima"
            >
              Shift{" "}
              <small className="footer__small">
                {" "}
                (youth adult fellowship){" "}
              </small>{" "}
              <span className="arrow"></span>
            </a>
          </div>

          <div className="content_Quick_links menu">
            <h3 className="footer_menu_head">permalinks</h3>
            <Link to="/Terms" className="links linkAnima">
              Terms & Conditions <span className="arrow"></span>
            </Link>
            <Link to="/PrivacyPolicy" className="links linkAnima">
              Privacy & Policy <span className="arrow"></span>
            </Link>
            <Link to="/Im_new" className="links linkAnima">
              FAQ <span className="arrow"></span>
            </Link>
            {/* <Link to="/ministries" className="links linkAnima">
              MINISTRIES <span className="arrow"></span>
            </Link>
            <Link to="/groups" className="links linkAnima">
              GROUPS <span className="arrow"></span>
            </Link> */}
          </div>

          <div className="content_Quick_links2 menu">
            <h3 className="footer_menu_head">Contact Us</h3>
            <p>You can get intouch with </p>
            <p>
              Central Office Address | Unit 8, 2-8 Fountayne Rd, London N15 4QL,
              United Kingdom
            </p>
            <p>Office Hours | M-TH, 10:00 AM ??? 4:00 PM</p>
            <p>Email | info@highwayofholinesschurch.com</p>
            <div className="social">
              <a
                href="https://web.facebook.com/HighwayofHolinessUK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/shift_hy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.instagram.com/shift.hy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.youtube.com/@highwayofholinesschristian7997"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_divider"></div>

        <div className="content_bottom text_center">
          <a
            href="https://www.google.com/maps/place/Highway+of+Holiness+Christian+Love+Centre/@51.5839588,-0.0629812,15z/data=!4m5!3m4!1s0x0:0x4ecefdf5708bc80e!8m2!3d51.584364!4d-0.0632244"
            target="_blank"
            rel="noopener noreferrer"
            className="hover_overlay"
          >
            Unit 8, 2-8 Fountayne Rd, London N15 4QL, United Kingdom
          </a>
          <p>+442088084444</p>
          <p>
            ?? {new Date().getFullYear()} Highway Of Holiness Church | Developed
            by{" "}
            <a target="_blank" rel="noreferrer" href="http://veltetech.com/">
              Velte Technology Solutions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
