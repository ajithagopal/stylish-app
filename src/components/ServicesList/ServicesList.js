import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaAngleDoubleDown } from "react-icons/fa";

import SerModalH from "../ServicesModal/SerModalH";

import facial from "../../images/Services/facial.jpg";
import threading from "../../images/Services/threading.jpg";
import wax from "../../images/Services/wax.jpg";
import meganthi from "../../images/Services/meganthi.jpg";
import pedmed from "../../images/Services/ped&med.jpg";
import headmas from "../../images/Services/headmas.jpg";
import haircut from "../../images/Services/haircut.jpg";
import hairspa from "../../images/Services/hairspa.jpg";
import hairsmo from "../../images/Services/hairsmo.jpg";
import hairstr from "../../images/Services/hairstr.jpg";
import aromafac from "../../images/Services/aromafac.jpg";
import bodymas from "../../images/Services/bodymas.jpg";
import bridal from "../../images/Services/bridal.jpg";
import medispa from "../../images/Services/medispa.jpg";
import pedispa from "../../images/Services/pedispa.jpg";
import treatfc from "../../images/Services/treatfac.jpg";
import pigment from "../../images/Services/pigment.jpg";

import "./ServicesList.css";

const ServicesList = () => {
  return (
    <div className="service-list">
      <h3 className="animate__animated animate__backInRight about">
        OUR SERVICES
      </h3>
      <div className="service-item">
        <div className="card">
          <LazyLoadImage
            src={facial}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Facial</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={threading}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Threading</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={wax}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Waxing</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={meganthi}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Megandhi</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={pedmed}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Pedicure & Medicure</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={headmas}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Head Massage</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={haircut}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Haircut</h5>
            <SerModalH />
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={hairspa}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Hair Spa</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={hairsmo}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Hair Smoothening</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={hairstr}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Hair Straightening</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={aromafac}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Aroma Facial</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={treatfc}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Treatment Facial</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={pigment}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Pigmentation</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={pedispa}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Pedi Spa</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={medispa}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Medicure</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={bodymas}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Body Massage</h5>
          </div>
        </div>

        <div className="card">
          <LazyLoadImage
            src={bridal}
            loading="lazy"
            className="card-img-top"
            alt="ser img"
          />
          <div className="card-body">
            <h5 className="card-title">Bridal Makeup</h5>
            <Link to="/bridal-makeup" className="n-links">
              <button className="brid-more-btn">
                <FaAngleDoubleDown size={25} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
