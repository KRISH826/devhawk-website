"use client"
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type props = {
    reverse?: boolean;
};
const VerticalSlider = ({ reverse }: props) => {
    return (
        <>
            {reverse ? (
                <>
                    <Swiper
                        direction={"horizontal"}
                        slidesPerView={3.25}
                        spaceBetween={20}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            reverseDirection: true,
                        }}
                        speed={1800}
                        loop={true}
                        modules={[Autoplay]}
                        allowTouchMove={false}
                        breakpoints={{
                            1280: {
                                direction: "vertical",
                                slidesPerView: 2.25,
                            },
                            991: {
                                direction: "horizontal",
                                slidesPerView: 2.25,
                            },
                            768: {
                                direction: "horizontal",
                                slidesPerView: 2,
                            },
                            525: {
                                direction: "horizontal",
                                slidesPerView: 1.5,
                            },
                            10: {
                                direction: "horizontal",
                                slidesPerView: 1,
                            },
                        }}
                        className="offshore_testimonial mt-4 xl:tw-h-[850px] xl:tw-w-full tw-w-full tw-h-auto tw-overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Happy with the result.
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can
                                        be a game of chance. Fortunately, my experience with
                                        Consultant company has been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image
                                        width={70}
                                        height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-active.png"
                                        alt="Andre Quinn"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            Andre Quinn
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            - Co-Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Best team ever
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can
                                        be a game of chance. Fortunately, my experience with
                                        Consultant company has been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image
                                        width={70}
                                        height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-2.png"
                                        alt="David Chen"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            David Chen
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            - CTO, HealthLink Systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Highly Professional
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can
                                        be a game of chance. Fortunately, my experience with
                                        Consultant company has been a revelation.”
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image
                                        width={70}
                                        height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-1.png"
                                        alt="Sophia Reynolds"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            Sophia Reynolds
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            – CEO, FinEdge Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Happy with the result.
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can
                                        be a game of chance. Fortunately, my experience with
                                        Consultant company has been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image
                                        width={70}
                                        height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-active.png"
                                        alt="Andre Quinn"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            Andre Quinn
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            - Co-Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Best team ever
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can
                                        be a game of chance. Fortunately, my experience with
                                        Consultant company has been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image
                                        width={70}
                                        height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-2.png"
                                        alt="David Chen"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            David Chen
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            - CTO, HealthLink Systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Highly Professional
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can
                                        be a game of chance. Fortunately, my experience with
                                        Consultant company has been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image
                                        width={70}
                                        height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-1.png"
                                        alt="Sophia Reynolds"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            Sophia Reynolds
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            – CEO, FinEdge Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            ) : (
                <>
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={3.25}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            reverseDirection: false,
                        }}
                        speed={1800}
                        loop={true}
                        modules={[Autoplay]}
                        allowTouchMove={false}
                        breakpoints={{
                            1280: {
                                direction: "vertical",
                                slidesPerView: 2.25,
                            },
                            991: {
                                direction: "horizontal",
                                slidesPerView: 2.25,
                            },
                            768: {
                                direction: "horizontal",
                                slidesPerView: 2,
                            },
                            525: {
                                direction: "horizontal",
                                slidesPerView: 1.5,
                            },
                            10: {
                                direction: "horizontal",
                                slidesPerView: 1,
                            },
                        }}
                        className="offshore_testimonial mt-4 xl:tw-h-[850px] xl:tw-w-full tw-w-full tw-h-auto tw-overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Highly Professional
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can be a game
                                        of chance. Fortunately, my experience with Consultant company has
                                        been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image width={70} height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-1.png"
                                        alt="Sophia Reynolds"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            Sophia Reynolds
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            – CEO, FinEdge Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Happy with the result.
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can be a game
                                        of chance. Fortunately, my experience with Consultant company has
                                        been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image width={70} height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-active.png"
                                        alt="Andre Quinn"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">Andre Quinn</h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">- Co-Founder</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">Best team ever</h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can be a game
                                        of chance. Fortunately, my experience with Consultant company has
                                        been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image width={70} height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-2.png"
                                        alt="David Chen"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">David Chen</h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            - CTO, HealthLink Systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Highly Professional
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can be a game
                                        of chance. Fortunately, my experience with Consultant company has
                                        been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image width={70} height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-1.png"
                                        alt="Sophia Reynolds"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">
                                            Sophia Reynolds
                                        </h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            – CEO, FinEdge Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">
                                    Happy with the result.
                                </h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can be a game
                                        of chance. Fortunately, my experience with Consultant company has
                                        been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image width={70} height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-active.png"
                                        alt="Andre Quinn"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">Andre Quinn</h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">- Co-Founder</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tw-bg-white testimonial-card  tw-p-8 tw-rounded-lg tw-border tw-border-[#9698A1]">
                                <h3 className="tw-font-bold tw-text-xl tw-mb-4">Best team ever</h3>
                                <div className="content tw-min-h-[160px]">
                                    <p className="tw-text-[#424242] tw-leading-relaxed">
                                        &quot;As a business owner, finding the right consultant can be a game
                                        of chance. Fortunately, my experience with Consultant company has
                                        been a revelation.&quot;
                                    </p>
                                </div>
                                <hr className="tw-my-5 tw-border-[#868484]" />
                                <div className="tw-flex tw-items-center tw-gap-4">
                                    <Image width={70} height={70}
                                        className="tw-w-14 tw-h-14 tw-rounded-full tw-border-[1.5px] tw-border-[#424242] tw-object-cover"
                                        src="/assets/images/Offshore-software/client-2.png"
                                        alt="David Chen"
                                    />
                                    <div>
                                        <h4 className="tw-font-bold tw-text-[#424242]">David Chen</h4>
                                        <p className="tw-text-[#424242] tw-text-sm tw-italic">
                                            - CTO, HealthLink Systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            )}
        </>
    );
};

export default VerticalSlider;
