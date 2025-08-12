import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import BridalGallery from "./components/BridalGallery/BridalGallery";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Scroll from "./components/Scroll";
import Gallery from "./components/Gallery/Gallery";
import SocialMediaSideBar from "./components/SocialMediaSideBar/SocialMediaSideBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader
            color={"#E22B63"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Scroll />
          <SocialMediaSideBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bridal-makeup" element={<BridalGallery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
