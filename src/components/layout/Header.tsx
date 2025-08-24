import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="tw-absolute offshore_header tw-py-3 tw-z-20 tw-top-0 tw-left-0 tw-w-full">
      <div className="fluid-container">
        <div className="tw-flex tw-w-full tw-justify-between tw-items-center tw-gap-3">
          <div className="logo">
            <a href="#">
              <Image
                width={200}
                height={60}
                src="/assets/images/Offshore-software/proquanticLogo.png"
                className="lg:tw-w-[230px] md:[tw-w-[180px] tw-w-[150px]"
                alt="logo"
              />
            </a>
          </div>
          <div className="socials tw-flex tw-gap-6 tw-items-center">
            <Link
              href=""
              className="md:tw-flex tw-hidden tw-gap-2 tw-items-center"
            >
              <Image
                width={20}
                height={20}
                src="/assets/images/Offshore-software/Calling.png"
                alt="phone"
              />
              <span>(+1) 929 9303029</span>
            </Link>
            <Link
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
                  data-name="get in touch"
                >
                  <span>get in touch</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
