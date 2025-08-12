import Navbar from "../Navbar/Navbar";
import Ban from "../Ban/Ban";
import Footer from "../Footer/Footer";
import UserMsg from "../UserMsgContForm/UserMsg";

import { MdLocationPin, MdEmail, MdLocalPhone } from "react-icons/md";

import cBan from "../../images/banner/c-ban.JPG";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Ban img={cBan} text={"Contact Us"} />
      <div className="contact-cont">
        <div className="user-msg-form-cont">
          <h2>Get in touch</h2>
          <UserMsg />
        </div>
        <div className="address-cont">
          <h2>Contact Info</h2>
          <div className="contact-details">
            <h4>
              <MdLocationPin size={30} /> Address
            </h4>
            <p>
             Near Y.M.R Patty, Karunanidhi Nagar, Tamil Nadu.
            </p>
          </div>
          <div className="contact-details">
            <h4>
              <MdEmail size={30} /> Email
            </h4>
            <p>test@gmail.com</p>
            <p>info@tset.com</p>
          </div>
          <div className="contact-details">
            <h4>
              <MdLocalPhone size={30} /> Phone
            </h4>
            <p>+91 0000000000</p>
            <p>+91 0000000000</p> 
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7015000541155!2d77.98001471474535!3d10.36573509260099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00abad5ed88a57%3A0x65217d69e5e6fdee!2sStylish%20Park%20Bridal%20Studio!5e0!3m2!1sen!2sin!4v1677175038017!5m2!1sen!2sin"
        title="Stylish Park Bridal Studio"
        width="100%"
        height="400"
        loading="lazy"
      ></iframe>
      <Footer />
    </>
  );
};

export default Contact;
