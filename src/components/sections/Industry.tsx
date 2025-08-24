"use client";

import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Industry = () => {
  return (
    <>
      <section>
        <div className="tw-container">
          <div className="tw-grid tw-grid-cols-12 tw-gap-6 tw-items-center tw-gap-y-4 md:tw-pb-[50px] tw-pb-6">
            <div className="tw-col-span-12 lg:tw-col-span-6">
              <span className="tw-uppercase tw-font-bold tw-text-dark tw-mb-4 dotted tw-flex tw-align-center section_title_with_primary_two">
                Industries Served
              </span>
              <h2 className="2xl:tw-text-4xl md:tw-text-3xl tw-text-2xl tw-font-extrabold tw-text-dark-two section_title_with_primary_two">
                <span className="tw-text-blue-400">Industry</span>-Specific
                Expertise
                <br /> You Can Trust
              </h2>
            </div>
            <div className="tw-col-span-12 lg:tw-col-span-6">
              <div className="tw-text-gray md:tw-text-base tw-text-sm tw-flex tw-flex-col tw-gap-y-3">
                <p className="MsoNormal">
                  Industry-focused solutions designed to meet unique challenges
                  and drive measurable business growth.
                </p>
              </div>
            </div>
          </div>
          <Swiper
            navigation={false}
            pagination={true}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            allowTouchMove={true}
            modules={[Navigation, Autoplay, Pagination]}
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
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              39: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper tw-mt-4"
          >
            <SwiperSlide className="tw-text-center">
              <div className="tw-flex tw-flex-col tw-items-center tw-text-center expertisebox">
                <div className="tw-w-40 tw-h-40 tw-bg-[#F2F1F6] expertisebox-round tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/Offshore-software/industries_1.png"
                    alt="industries-1"
                  />
                </div>
                <h3 className="tw-font-bold tw-text-xl tw-text-dark-two tw-mb-2">
                  FinTech
                </h3>
                <p className="tw-text-gray-400">
                  Agile solutions for banking, payments, and beyond
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tw-flex tw-flex-col tw-items-center tw-text-center expertisebox">
                <div className="tw-w-40 tw-h-40 tw-bg-[#F2F1F6] expertisebox-round tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/Offshore-software/industries_2.png"
                    alt="industries-2"
                  />
                </div>
                <h3 className="tw-font-bold tw-text-xl tw-text-dark-two tw-mb-2">
                  Healthcare
                </h3>
                <p className="tw-text-gray-400">
                  Agile solutions for banking, payments, and beyond
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="tw-text-center">
              <div className="tw-flex tw-flex-col tw-items-center tw-text-center expertisebox">
                <div className="tw-w-40 tw-h-40 tw-bg-[#F2F1F6] expertisebox-round tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/Offshore-software/industries_3.png"
                    alt="industries-3"
                  />
                </div>
                <h3 className="tw-font-bold tw-text-xl tw-text-dark-two tw-mb-2">
                  Retail
                </h3>
                <p className="tw-text-gray-400">
                  Agile solutions for banking, payments, and beyond
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tw-flex tw-flex-col tw-items-center tw-text-center expertisebox">
                <div className="tw-w-40 tw-h-40 tw-bg-[#F2F1F6] expertisebox-round tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/Offshore-software/industries_3.png"
                    alt="industries-3"
                  />
                </div>
                <h3 className="tw-font-bold tw-text-xl tw-text-dark-two tw-mb-2">
                  Retail
                </h3>
                <p className="tw-text-gray-400">
                  Agile solutions for banking, payments, and beyond
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="tw-text-center">
              <div className="tw-flex tw-flex-col tw-items-center tw-text-center expertisebox">
                <div className="tw-w-40 tw-h-40 tw-bg-[#F2F1F6] expertisebox-round tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/Offshore-software/industries_4.png"
                    alt="industries-4"
                  />
                </div>
                <h3 className="tw-font-bold tw-text-xl tw-text-dark-two tw-mb-2">
                  E-Commerce
                </h3>
                <p className="tw-text-gray-400">
                  Agile solutions for banking, payments, and beyond
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tw-flex tw-flex-col tw-items-center tw-text-center expertisebox">
                <div className="tw-w-40 tw-h-40 tw-bg-[#F2F1F6] expertisebox-round tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/Offshore-software/industries_5.png"
                    alt="industries-5"
                  />
                </div>
                <h3 className="tw-font-bold tw-text-xl tw-text-dark-two tw-mb-2">
                  Education
                </h3>
                <p className="tw-text-gray-400">
                  Agile solutions for banking, payments, and beyond
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Industry;
