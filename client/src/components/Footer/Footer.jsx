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
            <Link to="/contact" className="links">
              Contact Us <span className="arrow"></span>
            </Link>
            <Link to="/contact" className="links">
              jobs <span className="arrow"></span>
            </Link>
            <Link to="/contact" className="links">
              Give <span className="arrow"></span>
            </Link>
            <Link to="/contact" className="links">
              FLATIRONS COLLEGE <span className="arrow"></span>
            </Link>
            <Link to="/contact" className="links">
              FLATIRONS ACADEMY <span className="arrow"></span>
            </Link>
          </div>

          <div className="content_bottom text_center">
            <a
              href="http://googlemap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover_overlay"
            >
              400 W South Boulder Road, Suite 1700 Lafayette, CO 80026
            </a>
            <p>+212 0254 520 21</p>
            <p>© 2023 Flatirons Community Church. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
