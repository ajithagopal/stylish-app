import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay, Pagination } from "swiper";

import h1 from "../../images/salon/1.jpg";
import h2 from "../../images/salon/2.jpg";
import h3 from "../../images/salon/3.jpg";
import h4 from "../../images/salon/4.jpg";
import h5 from "../../images/salon/5.jpg";
import h6 from "../../images/salon/6.jpg";
import h7 from "../../images/salon/7.jpg";

import "./WelcomeHome.css";

export default function WelcomeHome() {
  return (
    <>
      <div className="home2">
        <div className="des-text">
          <h3 className="about-qotes mb-3">
            <q>Beauty awakens the soul to act.</q>
          </h3>
          <p className="desc">
            We are going to enter our fifth anniversary to our salon. It's ours
            salon wow .. Proud to say 250+ customers in 6 months got bridal
            makeover. It's too hard but happy to see our salon. On this occasion
            I welcome you all to come and get offer prices for facial, pedicure
            and menicure, Hair spa , threadning.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <LazyLoadImage
              src={h1}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src={h2}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src={h3}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src={h4}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src={h5}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src={h6}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h6}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              src={h7}
              alt="salon img"
              loading="lazy"
              effect="blur"
              height="100%"
              placeholderSrc={h7}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
