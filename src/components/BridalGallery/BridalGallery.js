import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BridalGalleryTab from "../BridalGalleryTab/BridalGalleryTab";
import Ban from "../Ban/Ban";
import BridalGalleryTabItem from "../BridalGalleryTabItem/BridalGalleryTabItem";
import ApntForm from "../AppointmentForm/AppForm";

import gBan from "../../images/banner/g-ban.jpg";
import g1 from "../../images/gallery/1.jpg";
import g3 from "../../images/gallery/3.jpg";
import g2 from "../../images/gallery/2.jpg";
import g5 from "../../images/gallery/5.jpg";
import g6 from "../../images/gallery/6.jpg";
import g8 from "../../images/gallery/8.jpg";

import normal1 from "../../images/gallery/18.jpeg";
import normal2 from "../../images/gallery/22.jpeg";
import normal3 from "../../images/gallery/25.jpg";

import glassy1 from "../../images/gallery/26.jpg";
import glassy2 from "../../images/gallery/27.jpg";
import glassy3 from "../../images/gallery/20.jpg";

import air1 from "../../images/gallery/15.jpeg";
import air2 from "../../images/gallery/28.jpeg";
import air3 from "../../images/gallery/17.jpeg";

import "./BridalGallery.css";

const tabsList = [
  { tabId: "NORMAL", displayText: "Normal" },
  { tabId: "HD", displayText: "HD" },
  { tabId: "WATERPROOF", displayText: "Water Proof" },
  { tabId: "GLASSYMAKEUP", displayText: "Glassy Makeup" },
  { tabId: "AIRBRUSHMAKEUP", displayText: "Air Brush Makeup" },
];

const tabItem = [
  {
    id: v4(),
    category: "NORMAL",
    imageUrl: normal1,
  },
  {
    id: v4(),
    category: "NORMAL",
    imageUrl: normal2,
  },
  {
    id: v4(),
    category: "NORMAL",
    imageUrl: normal3,
  },
  {
    id: v4(),
    category: "HD",
    imageUrl: g3,
  },
  {
    id: v4(),
    category: "HD",
    imageUrl: g2,
  },
  {
    id: v4(),
    category: "HD",
    imageUrl: g1,
  },
  {
    id: v4(),
    category: "WATERPROOF",
    imageUrl: g5,
  },
  {
    id: v4(),
    category: "WATERPROOF",
    imageUrl: g6,
  },
  {
    id: v4(),
    category: "WATERPROOF",
    imageUrl: g8,
  },
  {
    id: v4(),
    category: "GLASSYMAKEUP",
    imageUrl: glassy1,
  },
  {
    id: v4(),
    category: "GLASSYMAKEUP",
    imageUrl: glassy2,
  },
  {
    id: v4(),
    category: "GLASSYMAKEUP",
    imageUrl: glassy3,
  },
  {
    id: v4(),
    category: "AIRBRUSHMAKEUP",
    imageUrl: air1,
  },
  {
    id: v4(),
    category: "AIRBRUSHMAKEUP",
    imageUrl: air2,
  },
  {
    id: v4(),
    category: "AIRBRUSHMAKEUP",
    imageUrl: air3,
  },
];

const BridalGallery = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);

  const clickTabItem = (tabValue) => {
    setActiveTabId(tabValue);
  };

  const changeOptions = (event) => {
    setActiveTabId(event.target.value);
  };

  const filteredProject = tabItem.filter((e) => e.category === activeTabId);

  return (
    <div className="bridal-gallery-cont">
      <Navbar />
      <Ban img={gBan} text={"Bridal Gallery"} />
      <div className="gal-cont">
        <h3 className="animate__animated animate__bounceIn">BRIDAL MAKEUP</h3>
        <p>Category</p>

        <select value={activeTabId} className="select" onChange={changeOptions}>
          {tabsList.map((eachOption) => (
            <option
              key={eachOption.tabId}
              value={eachOption.tabId}
              className="option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>

        <ul className="tab-list-cont">
          {tabsList.map((tabDetails) => (
            <BridalGalleryTab
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>
        <ul className="gal-row">
          {filteredProject.map((projectDetails) => (
            <BridalGalleryTabItem
              key={projectDetails.id}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
      <div className="book-visit-btn">
        <h2>
          <q>Be as radiant as the sun.</q>
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
    </div>
  );
};

export default BridalGallery;
