import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Services() {
  return (
    <>
      <section className="tw-bg-gray-200 tw-mt-[-50px] md:tw-mt-[-75px] tw-py-[50px] md:tw-py-20">
        <div className="tw-container">
          <div className="tw-grid tw-grid-cols-12 tw-gap-6 tw-items-center tw-gap-y-4 md:tw-pb-[50px] tw-pb-6">
            <div className="tw-col-span-12 lg:tw-col-span-6">
              <span className="tw-uppercase tw-font-bold tw-text-dark tw-mb-4 dotted tw-flex tw-align-center section_title_with_primary_two">
                Our Service
              </span>
              <h2 className="2xl:tw-text-4xl md:tw-text-3xl tw-text-2xl tw-font-extrabold tw-text-dark-two section_title_with_primary_two">
                <span className="tw-text-blue-400">Our Offshore</span> Software
                Development Services
              </h2>
            </div>
            <div className="tw-col-span-12 lg:tw-col-span-6">
              <div className="tw-text-gray md:tw-text-base tw-text-sm tw-flex tw-flex-col tw-gap-y-3">
                <p className="MsoNormal">
                  We use SwiftUI, UIKit, Combine, Core Data, and tools like
                  Alamofire and XCTest to build secure, scalable, and App
                  Store-ready iOS applications.
                </p>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] tw-hover:shadow-lg tw-transition-shadow offshore_services_box">
              <div className="tw-mb-6">
                <div className="tw-w-20 tw-h-20 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/Offshore-software/service_1.png"
                    alt="ios"
                    className="tw-w-[48px] tw-h-auto"
                  />
                </div>
                <h3 className="tw-text-blue tw-text-xl tw-font-semibold tw-mb-2">
                  Custom Software Development
                </h3>
                <hr className="tw-border tw-my-4 tw-border-dashed tw-border-gray-300" />
                <p className="tw-text-dark-two tw-text-sm tw-mb-6">
                  Transform your business ideas into reliable and future-proof
                  software solutions.
                </p>
              </div>
              <ul className="tw-space-y-3">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Ensure scalability and robustness for long-term success.
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Tailored solutions to address specific business challenges.
                  </span>
                </li>
              </ul>
            </div>

            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] tw-hover:shadow-lg tw-transition-shadow offshore_services_box">
              <div className="tw-mb-6">
                <div className="tw-w-20 tw-h-20 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/Offshore-software/service_2.png"
                    alt="ios"
                    className="tw-w-[48px] tw-h-auto"
                  />
                </div>
                <h3 className="tw-text-blue tw-text-xl tw-font-semibold tw-mb-2">
                  Digital Transformation Services
                </h3>
                <hr className="tw-border tw-my-4 tw-border-dashed tw-border-gray-300" />
                <p className="tw-text-dark-two tw-text-sm tw-mb-6">
                  Modernize your business operations with innovative digital
                  solutions that improve efficiency.
                </p>
              </div>
              <ul className="tw-space-y-3">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Streamline processes and drive operational efficiency.
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Use technology to adapt to evolving market needs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] tw-hover:shadow-lg tw-transition-shadow offshore_services_box">
              <div className="tw-mb-6">
                <div className="tw-w-20 tw-h-20 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/Offshore-software/service_3.png"
                    alt="ios"
                    className="tw-w-[48px] tw-h-auto"
                  />
                </div>
                <h3 className="tw-text-blue tw-text-xl tw-font-semibold tw-mb-2">
                  Web Development
                </h3>
                <hr className="tw-border tw-my-4 tw-border-dashed tw-border-gray-300" />
                <p className="tw-text-dark-two tw-text-sm tw-mb-6">
                  Empower your online presence with secure, high-performing web
                  solutions.
                </p>
              </div>
              <ul className="tw-space-y-3">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Build engaging and responsive web platforms.
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Enhance user experience with seamless functionality.
                  </span>
                </li>
              </ul>
            </div>

            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] tw-hover:shadow-lg tw-transition-shadow offshore_services_box">
              <div className="tw-mb-6">
                <div className="tw-w-20 tw-h-20 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/Offshore-software/service_4.png"
                    alt="ios"
                    className="tw-w-[48px] tw-h-auto"
                  />
                </div>
                <h3 className="tw-text-blue tw-text-xl tw-font-semibold tw-mb-2">
                  Mobile App Development
                </h3>
                <hr className="tw-border tw-my-4 tw-border-dashed tw-border-gray-300" />
                <p className="tw-text-dark-two tw-text-sm tw-mb-6">
                  Develop feature-rich and scalable mobile applications that
                  deliver smooth user experiences.
                </p>
              </div>
              <ul className="tw-space-y-3">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Create interactive apps for iOS and Android.
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Ensure optimal performance and usability.
                  </span>
                </li>
              </ul>
            </div>

            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] tw-hover:shadow-lg tw-transition-shadow offshore_services_box">
              <div className="tw-mb-6">
                <div className="tw-w-20 tw-h-20 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/Offshore-software/service_5.png"
                    alt="ios"
                    className="tw-w-[48px] tw-h-auto"
                  />
                </div>
                <h3 className="tw-text-blue tw-text-xl tw-font-semibold tw-mb-2">
                  Software Engineering
                </h3>
                <hr className="tw-border tw-my-4 tw-border-dashed tw-border-gray-300" />
                <p className="tw-text-dark-two tw-text-sm tw-mb-6">
                  Get cutting-edge software engineering services to build
                  adaptable and efficient software systems.
                </p>
              </div>
              <ul className="tw-space-y-3">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    High-quality, scalable software systems.
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Reliable engineering to support business operations.
                  </span>
                </li>
              </ul>
            </div>
            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] tw-hover:shadow-lg tw-transition-shadow offshore_services_box">
              <div className="tw-mb-6">
                <div className="tw-w-20 tw-h-20 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/Offshore-software/service_6.png"
                    alt="ios"
                    className="tw-w-[48px] tw-h-auto"
                  />
                </div>
                <h3 className="tw-text-blue tw-text-xl tw-font-semibold tw-mb-2">
                  Dedicated Development Teams
                </h3>
                <hr className="tw-border tw-my-4 tw-border-dashed tw-border-gray-300" />
                <p className="tw-text-dark-two tw-text-sm tw-mb-6">
                  Access skilled and dedicated offshore development teams to
                  build secure solutions tailored to your requirements.
                </p>
              </div>
              <ul className="tw-space-y-3">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Flexible and cost-effective development support.
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <MoveRight strokeWidth={1.8} className="tw-text-green-400 tw-text-[10px] tw-w-5 tw-h-5" />
                  <span className="tw-text-dark-two tw-font-normal tw-text-sm">
                    Expertise across a range of technologies.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="tw-flex tw-mt-10 tw-items-center tw-justify-center">
            <a
              href="#"
              className="animated-button tw-border tw-border-solid tw-border-blue-400 tw-bg-transparent tw-inline-grid tw-text-base tw-font-semibold tw-leading-6 
                        tw-rounded-[7px] tw-cursor-pointer tw-p-1 tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out tw-relative tw-capitalize tw-text-white tw-text-center"
              role="button"
            >
              <span className="bg-slide tw-pr-6 tw-relative tw-overflow-hidden tw-flex tw-flex-row tw-gap-1 tw-justify-center tw-items-center">
                <span className="tw-bg-blue-300 tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-z-10 tw-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    className="arrow-container"
                  >
                    <path
                      className="arrow-path-1 tw-fill-white"
                      d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027"
                    ></path>
                    <path
                      className="arrow-path-2 tw-fill-white"
                      d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027"
                    ></path>
                  </svg>
                </span>
                <span
                  className="button-text tw-text-black tw-ml-2 tw-font-semibold tw-z-10 tw-relative tw-transition-colors tw-duration-300 tw-ease-in-out"
                  data-name="load more"
                >
                  <span>Load More</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
