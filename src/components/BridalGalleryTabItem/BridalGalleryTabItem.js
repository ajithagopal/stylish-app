import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./BridalGalleryTabItem.css";

const BridalGalleryTabItem = (props) => {
  const [prevImage, setPrevImage] = useState(false);
  const refBridalImg = useRef();
  const handleClickOutside = (event) => {
    if (
      refBridalImg &&
      refBridalImg.current &&
      refBridalImg.current.contains(event.target)
    ) {
      setPrevImage(true);
    } else {
      setPrevImage(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const { projectDetails } = props;
  const { id, imageUrl } = projectDetails;
  return (
    <>
      <li className="brid-g-image" onClick={() => setPrevImage(!prevImage)}>
        <LazyLoadImage
          loading="lazy"
          src={imageUrl}
          alt={`imgItem${id}`}
          className="gal-img"
        />
      </li>
      {prevImage && (
        <div className="gal-img-prev">
          <button type="button" onClick={() => setPrevImage(!prevImage)}>
            <AiOutlineClose size={25} color="white" />
          </button>
          <div ref={refBridalImg}>
            <LazyLoadImage loading="lazy" src={imageUrl} alt={`imgprev${id}`} />
          </div>
        </div>
      )}
    </>
  );
};

export default BridalGalleryTabItem;
