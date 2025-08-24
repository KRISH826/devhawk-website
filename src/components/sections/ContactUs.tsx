import Image from 'next/image'
import React from 'react'

function ContactUs() {
  return (
    <>
    <section className="tw-bg-gray-200 offshore_contactUs md:tw-py-20 tw-py-[50px]">
            <div className="tw-container">
                <div className="tw-grid tw-grid-cols-1 tw-relative tw-z-10 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
                    <div>
                        <div>
                            <span
                                className="tw-uppercase tw-font-bold tw-text-dark tw-mb-4 dotted tw-flex tw-align-center section_title_with_primary_two">Testimonials</span>
                            <h2
                                className="2xl:tw-text-4xl md:tw-text-3xl tw-text-2xl tw-font-medium tw-text-dark-two section_bold_span">
                                Ready to scale your<br /> <span>development team? </span>
                            </h2>
                            <h2
                                className="2xl:tw-text-4xl tw-mt-2 md:tw-text-3xl tw-text-2xl tw-font-extrabold tw-text-dark-two section_title_with_primary_two">
                                <span>Let’s get started.</span>
                            </h2>
                            <div className="tw-text-gray tw-mt-5 md:tw-text-base tw-text-sm tw-flex tw-flex-col tw-gap-y-3">
                                <p className="MsoNormal">
                                    Your search for that exceptional team addition ends here.&nbsp;We&#39;ve&nbsp;always lived up to
                                    that commitment. Whether you are seeking on-demand specialists or freelance experts,
                                    verify, onboard, and get started with confidence and trust. Hire developers for your
                                    next breakthrough. 
                                </p>
                            </div>
                        </div>
                        <div className="tw-grid tw-mt-3 tw-grid-cols-2">
                            <div
                                className="tw-flex tw-justify-center tw-items-center tw-p-8 tw-border-b sm:tw-border-r tw-border-dotted tw-border-blue-300">
                                <Image width={150} height={80} src="/assets/images/Offshore-software/clutch.png" className="tw-max-h-12" alt="Clutch Logo" />
                            </div>
                            <div
                                className="tw-flex tw-justify-center tw-items-center tw-p-8 tw-border-b tw-border-dotted tw-border-blue-300">
                                <Image width={150} height={80} src="/assets/images/Offshore-software/upcity.png" alt="UpCity Logo" className="tw-max-h-12" />
                            </div>
                            <div
                                className="tw-flex tw-justify-center tw-items-center tw-p-8 sm:tw-border-r tw-border-dotted tw-border-blue-300">
                                <Image width={150} height={80} src="/assets/images/Offshore-software/goodfirms-logo-vector 1.png" alt="GoodFirms Logo"
                                    className="tw-max-h-8" />
                            </div>
                            <div className="tw-flex tw-justify-center tw-items-center tw-p-8">
                                <Image width={150} height={80} src="/assets/images/Offshore-software/trustpilot.png" alt="Trustpilot Logo"
                                    className="tw-max-h-12"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="tw-bg-white tw-rounded-lg tw-py-12 tw-px-6">
                            <form action="#" method="POST" className="tw-space-y-8">
                                <div>
                                    <label htmlFor="work-email" className="tw-block tw-text-sm tw-font-medium tw-text-dark-two">
                                        Work Email <span className="tw-text-red-500">*</span>
                                    </label>
                                    <div className="tw-mt-2">
                                        <input type="email" name="work-email" id="work-email"
                                            className="tw-block tw-w-full tw-border tw-border-[#AFCBED] tw-rounded-lg tw-border-solid tw-py-2 tw-px-4 placeholder:tw-text-gray-400 focus:tw-ring-0 focus:tw-border-blue-700 focus:tw-outline-none sm:tw-text-sm"
                                            placeholder="johndoe@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='phone-number'
                                        className="tw-block tw-text-sm tw-font-medium tw-text-dark-two">
                                        Phone Number <span className="tw-text-red-500">*</span>
                                    </label>
                                    <div className="tw-mt-2">
                                        <input type="tel" name="phone-number" id="phone-number"
                                            className="tw-block tw-w-full tw-border tw-border-[#AFCBED] tw-rounded-lg tw-border-solid tw-py-2 tw-px-4 placeholder:tw-text-gray-400 focus:tw-ring-0 focus:tw-border-blue-700 focus:tw-outline-none sm:tw-text-sm"
                                            placeholder="(555) - 55528" />
                                    </div>
                                </div>
                                <div>
                                    <div className="tw-mt-2">
                                        <textarea rows={5} name="goal" id="goal"
                                            className="tw-block tw-w-full tw-border tw-border-[#AFCBED] tw-rounded-lg tw-border-solid tw-py-2 tw-px-4 placeholder:tw-text-gray-400 focus:tw-ring-0 focus:tw-border-blue-700 focus:tw-outline-none sm:tw-text-sm"
                                            placeholder="Do you have a specific goal for the Proquantic demo? If there's an area you'd like us to cover, please include those details here so we can be prepared."></textarea>
                                    </div>
                                </div>
                                <div className="tw-relative tw-flex tw-items-start">
                                    <div className="tw-flex tw-h-6 tw-items-center">
                                        <input id="consent" name="consent" type="checkbox"
                                            className="tw-h-4 tw-w-4 tw-rounded tw-border-gray-300 tw-text-blue-700 focus:tw-ring-blue-700" />
                                    </div>
                                    <div className="tw-ml-3 tw-text-sm tw-leading-6">
                                        <label htmlFor="consent" className="tw-text-dark-two">
                                            I understand that Proquantic will process my information in accordance with
                                            their
                                            <a href="#"
                                                className="tw-font-medium tw-text-green-300 tw-underline hover:tw-text-green-400">Terms
                                                of Use</a>.
                                            I may withdraw my consent through unsubscribe links at any time.
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        className="animated-button tw-border tw-border-solid tw-border-blue-400 tw-bg-transparent tw-inline-grid tw-text-base tw-font-semibold tw-leading-6 tw-rounded-[7px] tw-cursor-pointer tw-p-1 tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out tw-relative tw-capitalize tw-text-white tw-text-center"
                                        role="button">
                                        <span
                                            className="bg-slide tw-pr-6 tw-relative tw-overflow-hidden tw-flex tw-flex-row tw-gap-1 tw-justify-center tw-items-center">
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
                                                className="button-text tw-text-black tw-ml-2 tw-font-semibold tw-z-10 tw-relative tw-transition-colors tw-duration-300 tw-ease-in-out"
                                                data-name="Request Developer Profiles">
                                                <span>Request Developer Profiles</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs