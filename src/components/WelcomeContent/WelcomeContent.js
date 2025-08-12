import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import g1 from "../../images/gallery/17.jpeg";
import g2 from "../../images/gallery/2.jpg";
import g3 from "../../images/gallery/3.jpg";
import g4 from "../../images/gallery/21.jpeg";
import g5 from "../../images/gallery/23.jpg";
import g6 from "../../images/gallery/26.jpg";
import g7 from "../../images/gallery/12.jpg";
import g8 from "../../images/gallery/14.jpeg";
import g9 from "../../images/gallery/15.jpeg";
import g10 from "../../images/gallery/20.jpg";

import "./WelcomeContent.css";

const WelcomeContent = () => {
  return (
    <div className="wrapper">
      <li>
        <LazyLoadImage
          src={g1}
          effect="blur"
          placeholderSrc={g1}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g2}
          effect="blur"
          placeholderSrc={g2}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g3}
          effect="blur"
          placeholderSrc={g3}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g4}
          effect="blur"
          placeholderSrc={g4}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g5}
          effect="blur"
          placeholderSrc={g5}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g6}
          effect="blur"
          placeholderSrc={g6}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g7}
          effect="blur"
          placeholderSrc={g7}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g8}
          effect="blur"
          placeholderSrc={g8}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g9}
          effect="blur"
          placeholderSrc={g9}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
      <li>
        <LazyLoadImage
          src={g10}
          effect="blur"
          placeholderSrc={g10}
          alt="grid"
          className="grid-img"
          loading="lazy"
        />
      </li>
    </div>
  );
};

export default WelcomeContent;
