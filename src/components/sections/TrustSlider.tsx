import Image from "next/image";
import React from "react";
import VerticalSlider from "../ui/VerticalSlider";

const TrustSlider = () => {
  return (
    <>
      <section className="trust_sec md:tw-py-20 tw-py-[50px]">
        <div className="fluid-container">
          <div className="trust_main tw-px-6 2xl:tw-px-[130px] xl:tw-py-0 md:tw-py-[80px] tw-py-[50px] lg:tw-px-10 xl:tw-px-[64px] tw-bg-white tw-rounded-lg">
            <div className="tw-grid tw-grid-cols-12 2xl:tw-gap-16 xl:tw-gap-10 lg:tw-gap-6 tw-gap-6 tw-items-center">
              <div className="tw-col-span-12 tw-py-5 xl:tw-col-span-5">
                <span className="tw-uppercase tw-font-bold tw-text-dark tw-mb-4 dotted tw-flex tw-align-center section_title_with_primary_two">
                  Testimonials
                </span>
                <h2 className="2xl:tw-text-4xl md:tw-text-3xl tw-text-2xl tw-font-extrabold tw-text-dark-two section_title_with_primary_two">
                  <span>Building</span> trust through client success
                </h2>
                <div className="tw-text-gray tw-mt-7 md:tw-text-base tw-text-sm tw-flex tw-flex-col tw-gap-y-3">
                  <p className="MsoNormal">
                    Trusted by businesses worldwide, our clients’ feedback
                    reflects the value we deliver through collaboration,
                    transparency, and high-quality solutions.
                  </p>
                </div>
                <div className="tw-flex tw-items-center tw-gap-3 tw-mt-7">
                  <Image
                    width={115}
                    height={40}
                    src="/assets/images/Offshore-software/Group 1171275712.png"
                    alt="clients"
                    className="tw-w-28"
                  />
                  <div className="text-sm tw-text-gray tw-font-normal tw-leading-[1.2]">
                    <p>
                      Trusted by{" "}
                      <span className="tw-text-blue-400">
                        over 4,000 <br />
                      </span>
                      clients worldwide
                    </p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-gap-3 tw-mt-7 tw-w-fit tw-bg-[#F2F1F6] tw-px-4 tw-py-3 tw-rounded-lg">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/Offshore-software/review.png"
                    alt="review"
                    className="tw-w-[40px]"
                  />
                  <div className="tw-text-sm tw-text-dark-two ">
                    <div className="tw-flex tw-items-center tw-gap-2.5 tw-font-normal">
                      <p className="tw-text-base tw-text-blue-400 tw-font-medium">
                        4.9/5
                      </p>
                      <span className="tw-text-rating-color">
                        <i
                          className="fa fa-star tw-text-[12px]"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star tw-text-[12px]"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star tw-text-[12px]"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star tw-text-[12px]"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star tw-text-[12px]"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <p className="">Based on 1,847 reviews</p>
                  </div>
                </div>
              </div>
              <div className="tw-col-span-12 xl:tw-col-span-7">
                <div className="slider_animation xl:tw-h-[850px] tw-h-auto">
                  <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-2 xl:tw-pb-0 tw-pb-6 tw-gap-5">
                    <VerticalSlider reverse />
                    <VerticalSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSlider;
