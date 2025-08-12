import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "react-bootstrap/Carousel";

import ban1 from "../../images/gallery/ban1.jpeg";
import ban2 from "../../images/gallery/ban2.jpg";
import ban3 from "../../images/gallery/ban3.jpeg";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade className="ban-img-item">
        <Carousel.Item>
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            className="ban-image"
            src={ban1}
            alt="First slide"
            placeholderSrc={ban1}
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            className="ban-image"
            src={ban2}
            alt="Second slide"
            placeholderSrc={ban2}
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            className="ban-image"
            src={ban3}
            alt="Third slide"
            placeholderSrc={ban3}
            width="100%"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
