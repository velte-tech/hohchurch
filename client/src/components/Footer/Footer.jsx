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
        <div className="social">
          <a
            href="https://web.facebook.com/HighwayofHolinessUK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="http://facebook.com"
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

        <div className="foot_content">
          <div className="content_links">
            <Link to="/contact" className="links linkAnima">
              Contact Us <span className="arrow"></span>
            </Link>
            <Link to="/about_hoh" className="links linkAnima">
              ABOUT-HOH <span className="arrow"></span>
            </Link>
            <Link to="/give" className="links linkAnima">
              Give <span className="arrow"></span>
            </Link>
            <Link to="/ministries" className="links linkAnima">
              MINISTRIES <span className="arrow"></span>
            </Link>
            <Link to="/groups" className="links linkAnima">
              GROUPS <span className="arrow"></span>
            </Link>
          </div>

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
              © {new Date().getFullYear()} Highway Of Holiness Church |
              Developed by
              <a target="_blank" rel="noreferrer" href="http://veltetech.com/">
                Velte Technology Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
