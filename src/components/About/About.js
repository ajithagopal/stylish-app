import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Ban from "../Ban/Ban";
import ApntForm from "../AppointmentForm/AppForm";
import WelcomeContent from "../WelcomeContent/WelcomeContent";

import aBan from "../../images/banner/a-ban.JPG";
import about1 from "../../images/gallery/23.jpg";
import about2 from "../../images/gallery/24.jpg";
import about3 from "../../images/gallery/3.jpg";
import about4 from "../../images/gallery/14.jpeg";

import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <Ban img={aBan} text={"About"} />
      <div className="about-text">
        <h3 className="about animate__animated animate__backInLeft">
          ABOUT US
        </h3>
        <p className="about-desc">
          Stylish Park Bridal Studio's focused on giving a natural and elegant
          transformation by enhancing the features and not going overboard with
          the makeup of her clients, giving them an experience worthy of a
          lifetime.With an expertise and more than 8 years of experience in this
          field.We provide good service and customer satisfaction is our topmost
          priority.
        </p>
        <p className="about-quotes">
          <q>Inner Beauty is your job. We do the rest.</q>
        </p>
      </div>

      <div className="grid">
        <WelcomeContent />
      </div>

      <div className="apnt-des">
        <div className="apnt-text">
          <div className="about-book-qoutes">
            <h2>
              Be <span>bold.</span> Be <span>beautiful.</span>
            </h2>
          </div>
          <h1 className="apnt-heading">BOOK AN APPOINTMENT?</h1>
          <p className="desc">
            Call us : +91 0000000000 or fill out our online booking
          </p>
          <div className="book-cont-container">
            <ApntForm className={"pages"} />
            <Link to="/contact">
              <button type="button" className="visit-btn">
                Visit Our Salon Now
              </button>
            </Link>
          </div>
        </div>
        <div className="apnt-image">
          <LazyLoadImage src={about1} alt="img" loading="lazy" />
          <LazyLoadImage src={about2} alt="img" loading="lazy" />
          <LazyLoadImage src={about3} alt="img" loading="lazy" />
          <LazyLoadImage src={about4} alt="img" loading="lazy" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
