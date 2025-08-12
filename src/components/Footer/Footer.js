import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdEmail, MdLocalPhone } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="footer-row">
          <div className="footer-item">
            <h2>About Us</h2>
            <p className="about-footer-desc">
              Stylish Park Bridal Studio's focused on giving a natural and
              elegant transformation by enhancing the features and not going
              overboard with the makeup of her clients, giving them an
              experience worthy of a lifetime.
            </p>
            <div className="social-media">
              <a
                href="https://www.facebook.com/stylishparkbridalstudio/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FaFacebookF size={25} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/stylish_park_bridal_studio/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FaInstagram size={25} />
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=7904733762&amp;text=Welcome to Stylish PARK BRIDAL STUDIO"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FaWhatsapp size={25} />
                </span>
              </a>
            </div>
          </div>
          <div className="footer-item">
            <h2>Quick Links</h2>
            <ul>
              <Link to="/" className="n-links">
                <li className="quick-links">HOME</li>
              </Link>
              <Link to="/about-us" className="n-links">
                <li className="quick-links">ABOUT</li>
              </Link>
              <Link to="/services" className="n-links">
                <li className="quick-links">SERVICES</li>
              </Link>
              <Link to="/bridal-makeup" className="n-links">
                <li className="quick-links">BRIDAL MAKEUP</li>
              </Link>
              <Link to="/gallery" className="n-links">
                <li className="quick-links">GALLERY</li>
              </Link>
              <Link to="/contact" className="n-links">
                <li className="quick-links">CONTACT</li>
              </Link>
              <Link to="/courses" className="n-links">
                <li className="quick-links">COURSE</li>
              </Link>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Contact Info</h2>
            <ul className="footer-contact-desc">
              <li>
                <span>
                  <MdLocationPin size={30} />
                </span>
                <p>
                  Near Y.M.R Patty, Karunanidhi Nagar, Tamil Nadu.
                </p>
              </li>
              <li>
                <span>
                  <MdLocalPhone size={30} />
                </span>
                <ul>
                  <p>+91 0000000000</p>
                  <p>+91 0000000000</p> 
                </ul>
              </li>
              <li>
                <span>
                  <MdEmail size={30} />
                </span>
                <ul>
                  <p>test@gmail.com</p>
                  <p>info@test.com</p>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Business Hour</h2>
            <div className="timing-cont">
              <div className="timing">
                <p>Mon - Sun:</p>
                <span>9am - 9pm.</span>
              </div>
            </div>
          </div>
        </div>
      <div className="copyr-cont">
        <div className="left-copr-cont">
          {/* <span>
            <AiOutlineCopyright />
          </span> */}
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="comp-name">StylishParkBridalStudio</span>
          </p>
        </div>
        <div className="right-copr-cont">
            <p>
              Designed & developed by{" "}
              <span style={{ color: "#25D366" }}>AJITHA</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
