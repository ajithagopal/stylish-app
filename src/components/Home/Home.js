import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WelcomeHome from "../WelcomeHome/WelcomeHome";
import ApntForm from "../AppointmentForm/AppForm";

import logo from "../../images/logo.png";
import wel1 from "../../images/gallery/1.jpg";
import wel2 from "../../images/gallery/6.jpg";

import stylishVideo from "../../images/STYLISH FINAL.mp4";

import "./Home.css";

const Home = () => {
  const [showRestrict, setShowRestrict] = useState(true);

  let refHome = useRef();

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (refHome && refHome.current && refHome.current.contains(e.target)) {
        setShowRestrict(true);
      } else {
        setShowRestrict(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const restrictPageShow = () => {
    return (
      <>
        {showRestrict && (
          <div className="restrict-cont">
            <div className="restict-content">
              <h2>Welcome to</h2>
              <LazyLoadImage
                loading="lazy"
                src={logo}
                alt="logo"
                className="logo-restrict-img animate__animated animate__tada"
              />
              <p>We provide services only for women's</p>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      {restrictPageShow()}
      <Navbar />
      <Banner />
      <div className="first-des">
        <div className="des-text">
          <h1 className="head">
            Welcome to <br /> <span className="company-name">Stylish PARK</span>
            <span className="sub-comp-name">BRIDAL STUDIO</span>
          </h1>
          <p className="desc">
            The salon promises to offer a contemporary atmosphere for all its
            clients. From bridal makeup, hair styling and cutting to blow dry
            and hair coloring, you can choose from these services offered by
            Stylish Park Bridal Studio.
          </p>
          <p className="about-quotes" style={{ textAlign: "center" }}>
            <q>
              You are entering into a stress free zone.
              <br /> Welcome to our beauty salon we make you beautiful.
            </q>
          </p>
        </div>
        <div className="image">
          <img loading="lazy" src={wel1} alt="home img" />
          <img loading="lazy" src={wel2} alt="home img" />
        </div>
      </div>
      <WelcomeHome />
      <video
        controls
        controlsList="nodownload"
        muted
        loading="lazy"
        className="video-cont"
        poster={logo}
      >
        <source src={stylishVideo} type="video/mp4" />
      </video>
      <div className="services">
        <div className="service-des">
          <h1>Our Services</h1>
          <div className="services-list">
            <div className="services-item">
              <h2>Facial</h2>
              <p>
                {" "}
                Facial involves deep cleansing of the pores, exfoliation and
                removal of dead skin and treating basic skin with the help of
                massage.
              </p>
            </div>
            <div className="services-item">
              <h2>Bridal Makeup</h2>
              <p>Makeup can make a woman look more beautiful at every age.</p>
            </div>
            <div className="services-item">
              <h2>Pedicure & Medicure</h2>
              <p>
                Your Hands and feet never take a day off so make sure you treat
                them at the Stylish Park Bridal Studio.
              </p>
            </div>
            <div className="services-item">
              <h2>Haircut</h2>
              <p>
                Cut your dead ends for growth and we are not talking about hair.
              </p>
            </div>
            <div className="services-item">
              <h2>Spa</h2>
              <p>The greatest gift to yourself is a little bit of attention.</p>
            </div>
            <div className="services-item">
              <h2>Massage</h2>
              <p>
                Taking care of your body starts with taking time to give our
                muscles the attention they deserve.
              </p>
            </div>
          </div>
        </div>
        <div className="service-vist-btn">
          <Link to="/services">
            <button type="button">See More Services...</button>
          </Link>
        </div>
      </div>

      <div className="book-visit-btn">
        <h2>We want you to look fabulous</h2>
        <div>
          <Link to="/contact">
            <button type="button" className="visit-btn">
              Visit Our Salon Now
            </button>
          </Link>
          <ApntForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
