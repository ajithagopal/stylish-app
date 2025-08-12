import { Link } from "react-router-dom";

import ServicesList from "../ServicesList/ServicesList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Ban from "../Ban/Ban";

import sBan from "../../images/banner/s-ban.JPG";
import ApntForm from "../AppointmentForm/AppForm";

const Services = () => {
  return (
    <>
      <Navbar />
      <Ban img={sBan} text={"Services"} />
      <ServicesList />

      <div className="book-visit-btn">
        <h2>
          <q>Leave a little sparkle everywhere you go</q>
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

export default Services;
