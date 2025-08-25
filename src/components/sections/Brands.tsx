"use client";

import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {
  return (
    <>
      <section className="tw-bg-gray-200 tw-my-[-75px] tw-pt-44 md:tw-pb-20 tw-pb-[50px]">
        <div className="tw-container">
          <div className="heading tw-text-center">
            <p className="lg:tw-text-xl tw-text-lg tw-text-dark-two tw-mb-[50px]">
              Trusted by leading brands and businesses worldwide
            </p>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            allowTouchMove={true}
            modules={[Autoplay]}
            breakpoints={{
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              360: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              30: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper tw-mt-4"
          >
            <SwiperSlide className="tw-text-center !tw-flex tw-justify-center">
                <Image width={140} height={100} src="/assets/images/Offshore-software/brands_1.png" alt="brands-1" />
            </SwiperSlide>
            <SwiperSlide className="tw-text-center !tw-flex tw-justify-center">
                <Image width={140} height={100} src="/assets/images/Offshore-software/brands_2.png" alt="brands-2" />
            </SwiperSlide>
            <SwiperSlide className="tw-text-center !tw-flex tw-justify-center">
                <Image width={140} height={100} src="/assets/images/Offshore-software/brands_3.png" alt="brands-1" />
            </SwiperSlide>
            <SwiperSlide className="tw-text-center !tw-flex tw-justify-center">
                <Image width={140} height={100} src="/assets/images/Offshore-software/brands_4.png" alt="brands-2" />
            </SwiperSlide>
            <SwiperSlide className="tw-text-center !tw-flex tw-justify-center">
                <Image width={140} height={100} src="/assets/images/Offshore-software/brands_5.png" alt="brands-1" />
            </SwiperSlide>
            <SwiperSlide className="tw-text-center !tw-flex tw-justify-center">
                <Image width={140} height={100} src="/assets/images/Offshore-software/brands_6.png" alt="brands-2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Brands;
