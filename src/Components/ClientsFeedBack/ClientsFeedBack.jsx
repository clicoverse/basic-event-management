import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {
  Zoom,
  Navigation,
  Pagination,
  FreeMode,
  Autoplay,
} from "swiper/modules";

export default function ClientsFeedBack() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Zoom, Navigation, Pagination, FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                src="https://i.ibb.co/zn2zcww/pexels-tu-n-ki-t-jr-1468379.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Alice Johnson
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                CEO / Co-Founder
              </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
              <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                src="https://i.ibb.co/BVBMgpy/pexels-ralph-rabago-3214807.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Bob Smith
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                Lead Speaker
              </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
              <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                src="https://i.ibb.co/n059N9Q/pexels-wali-saleem-2103942.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Eva Martinez
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                Lead Speaker
              </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
              <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                src="https://i.ibb.co/VDmxN22/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                David Lee
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                Lead Speaker
              </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
              <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img src="https://i.ibb.co/wwMRD43/pexels-samarth-singhai-904117.jpg" />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Grace Turner
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                Lead Speaker
              </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
              <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
