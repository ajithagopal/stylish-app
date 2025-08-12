import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Ban from "../Ban/Ban";
import ApntForm from "../AppointmentForm/AppForm";

import galBan from "../../images/banner/gal-ban.JPG";

import g1 from "../../images/gallery/1.jpg";
import g2 from "../../images/gallery/2.jpg";
import g3 from "../../images/gallery/3.jpg";
import g4 from "../../images/gallery/4.jpg";
import g5 from "../../images/gallery/5.jpg";
import g6 from "../../images/gallery/6.jpg";
import g7 from "../../images/gallery/7.jpg";
import g8 from "../../images/gallery/8.jpg";
import g9 from "../../images/gallery/9.jpg";
import g10 from "../../images/gallery/10.jpg";
import g11 from "../../images/gallery/11.jpg";
import g12 from "../../images/gallery/12.jpg";
import g13 from "../../images/gallery/13.jpeg";
import g14 from "../../images/gallery/14.jpeg";
import g15 from "../../images/gallery/15.jpeg";
import g16 from "../../images/gallery/16.jpeg";
import g17 from "../../images/gallery/17.jpeg";
import g18 from "../../images/gallery/18.jpeg";
import g19 from "../../images/gallery/19.jpeg";
import g20 from "../../images/gallery/20.jpg";
import g22 from "../../images/gallery/22.jpeg";

import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Ban img={galBan} text={"Gallery"} />
      <div className="gallery-cont">
        <div className="gal-heading">
          <h3 className="animate__animated animate__lightSpeedInRight about">
            GALLERY
          </h3>
        </div>
        <div className="box">
          <div className="dream">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g1}
              placeholderSrc={g1}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g2}
              placeholderSrc={g2}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g3}
              placeholderSrc={g3}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g4}
              placeholderSrc={g4}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g5}
              placeholderSrc={g5}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g6}
              placeholderSrc={g6}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g7}
              placeholderSrc={g7}
            />
          </div>
          <div className="dream">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g8}
              placeholderSrc={g8}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g9}
              placeholderSrc={g9}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g10}
              placeholderSrc={g10}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g11}
              placeholderSrc={g11}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g12}
              placeholderSrc={g12}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g13}
              placeholderSrc={g13}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g14}
              placeholderSrc={g14}
            />
          </div>
          <div className="dream">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g15}
              placeholderSrc={g15}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g16}
              placeholderSrc={g16}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g17}
              placeholderSrc={g17}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g18}
              placeholderSrc={g18}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g19}
              placeholderSrc={g19}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g20}
              placeholderSrc={g20}
            />
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              alt="gallery image"
              src={g22}
              placeholderSrc={g22}
            />
          </div>
        </div>
      </div>
      <div className="book-visit-btn">
        <h2>
          <q>Beauty is an attitude.</q>
        </h2>
        <div>
          <Link to="/contact">
            <button type="button" className="visit-btn">
              Visit Our Salon Now
            </button>
          </Link>
          <ApntForm className={"pages"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
