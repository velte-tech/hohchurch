import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
// import { CgToday } from "react-icons/cg";

function Footer() {
  return (
    <section id="footer">
      <div className="footer_wrapper container text_center">
        <div className="social">
          <a
            href="http://facebook.com"
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
            href="http://facebook.com"
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
            <Link to="/give" target="_blank" className="links linkAnima">
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
              href="https://www.google.com/maps/@7.9044654,-1.0304069,7z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover_overlay"
            >
              400 W South Boulder Road, Suite 1700 Lafayette, CO 80026
            </a>
            <p>+212 0254 520 21</p>
            <p>
              © 2023 Highway Of Holiness Church | Developed by
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
