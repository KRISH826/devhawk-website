import Image from 'next/image'
import React from 'react'

const Banner = () => {
    
    return (
        <>
            <section className="offshore_banner 2xl:tw-h-[85vh] lg:tw-h-[600px] sm:tw-h-auto tw-h-auto">
                <div className="fluid-container tw-relative">
                    <div className="tw-relative tw-top-[108px]">
                        <div
                            className="offshore_banner_image tw-overflow-hidden tw-rounded-2xl 2xl:tw-h-[85vh] lg:tw-py-0 sm:tw-py-20 tw-py-14 lg:tw-h-[600px] sm:tw-h-auto tw-h-auto tw-w-full">
                            <div className="tw-absolute tw-inset-0 tw-z-0">
                                <video autoPlay loop muted playsInline preload="none"
                                    className="tw-w-full lg:tw-h-screen tw-min-h-full tw-object-cover tw-transition-all tw-opacity-100"
                                    aria-label="Video background" src="/assets/videos/banner-video.mp4">Your
                                    browser does not support the video tag.</video>
                            </div>
                            <div
                                className="content lg:tw-text-start tw-text-center tw-relative tw-z-10 lg:tw-pt-28 2xl:tw-pt-36 tw-pt-0 md:tw-px-14 xl:tw-px-16 2xl:tw-px-28 tw-px-6 tw-flex tw-flex-col tw-gap-5">
                                <p className="tw-text-base tw-font-normal tw-text-white">Offshore Software Development
                                    Services</p>
                                <h1
                                    className="2xl:tw-text-6xl lg:tw-text-5xl md:tw-text-4xl tw-text-2xl tw-font-semibold tw-text-white">
                                    <span className="tw-text-green-300">Hire</span> Dedicated<br /> Developers Globally
                                </h1>
                                <p className="tw-text-sm tw-font-normal tw-text-white"><span
                                    className="tw-text-green-300 tw-text-sm">10+ Years Experience ·</span> Trusted by
                                    Clients in USA, UK, UAE & India</p>
                                <div>
                                    <button
                                        className="animated-button tw-bg-white tw-inline-grid tw-text-base tw-font-semibold tw-leading-6 tw-rounded-[7px] w-cursor-pointer tw-p-1 tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out tw-relative tw-capitalize tw-text-white tw-text-center"
                                        role="button">
                                        <span
                                            className="bg-slide tw-pr-4 tw-relative tw-overflow-hidden tw-flex tw-flex-row tw-gap-1 tw-justify-center tw-items-center">
                                            <span
                                                className="tw-bg-blue-300 tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-z-10 tw-relative">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                    viewBox="0 0 32 32" className="arrow-container">
                                                    <path className="arrow-path-1 tw-fill-white"
                                                        d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027">
                                                    </path>
                                                    <path className="arrow-path-2 tw-fill-white"
                                                        d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027">
                                                    </path>
                                                </svg>
                                            </span>

                                            <span
                                                className="button-text tw-text-blue-500 tw-ml-2 tw-font-semibold tw-z-10 tw-relative tw-transition-colors tw-duration-300 tw-ease-in-out"
                                                data-name="Get Free Consultation">
                                                <span>Get Free Consultation</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="tw-flex tw-flex-wrap tw-gap-y-4 tw-relative lg:tw-mt-0 tw-mt-6 lg:tw-justify-end tw-justify-center lg:tw-absolute lg:tw-right-6 lg:tw-bottom-8 tw-z-10 tw-items-center">
                                <div
                                    className="tw-text-center tw-px-5 sm:tw-border-r sm:tw-border-dashed tw-border-white/50">
                                    <div className="tw-text-green-200 lg:tw-text-3xl tw-text-xl tw-font-bold tw-mb-1">2,000+
                                    </div>
                                    <div className="tw-text-white tw-text-sm">Projects Delivered</div>
                                </div>
                                <div
                                    className="tw-text-center tw-px-5 sm:tw-border-r sm:tw-border-dashed tw-border-white/50">
                                    <div className="tw-text-green-200 lg:tw-text-3xl tw-text-xl tw-font-bold tw-mb-1">675+
                                    </div>
                                    <div className="tw-text-white tw-text-sm">Transformation Experts</div>
                                </div>
                                <div className="tw-text-center tw-px-5">
                                    <div className="tw-text-green-200 lg:tw-text-3xl tw-text-xl tw-font-bold tw-mb-1">24/7
                                    </div>
                                    <div className="tw-text-white tw-text-sm">Productivity</div>
                                </div>
                                <div
                                    className="tw-cursor-pointer tw-scale-100 tw-transition-all tw-transition-duration-300 tw-pl-5 hover:tw-scale-105">
                                    <Image width={85} height={85} src="/assets/images/Offshore-software/video.svg" alt="video"
                                        className="lg:tw-w-[85px] tw-w-[65px]" />
                                </div>
                            </div>
                            <div
                                className="lg:tw-flex tw-hidden tw-absolute  customers-column tw-bg-gray-200 tw-py-[13px] tw-pr-4 tw-w-[300px] tw-rounded-tr-[22px] tw-border-t tw-left-0 tw-bottom-0 tw-z-10 tw-items-center tw-gap-3">
                                <div className="img">
                                    <Image width={180} height={50} src="/assets/images/Offshore-software/Group 1171275712.png" alt="developers" />
                                </div>
                                <div>
                                    <h2 className="tw-text-[28px] tw-font-semibold tw-text-dark-two">30K+</h2>
                                    <p className="tw-text-sm tw-text-[#424242]">Happy and Satisfied Customers</p>
                                </div>
                                <div className="shape_hide"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner