import Image from "next/image";
import React from "react";

function Solution() {
  return (
    <>
      <section>
        <div className="tw-container">
          <div className="tw-grid tw-grid-cols-12 tw-gap-6 tw-items-center tw-gap-y-4 md:tw-pb-[50px] tw-pb-6">
            <div className="tw-col-span-12 lg:tw-col-span-6">
              <span className="tw-uppercase tw-font-bold tw-text-dark tw-mb-4 dotted tw-flex tw-align-center section_title_with_primary_two">
                Our Process
              </span>
              <h2 className="2xl:tw-text-4xl md:tw-text-3xl tw-text-2xl tw-font-extrabold tw-text-dark-two section_title_with_primary_two">
                <span>Turning</span> Concepts into Scalable Solutions
              </h2>
            </div>
            <div className="tw-col-span-12 lg:tw-col-span-6">
              <div className="tw-text-gray md:tw-text-base tw-text-sm tw-flex tw-flex-col tw-gap-y-3">
                <p className="MsoNormal">
                  We follow a clear, collaborative, and agile-driven process to
                  ensure your project is delivered on time, within budget, and
                  with exceptional quality.
                </p>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-2 xl:tw-gap-16 tw-gap-10 tw-items-start">
            <div className="tw-grid tw-relative tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-5">
              <div className="tw-col-span-2 tw-overflow-hidden tw-rounded-lg">
                <Image
                  width={600}
                  height={300}
                  src="/assets/images/Offshore-software/concept_1.png"
                  alt="Concept 1"
                  className="tw-w-full tw-h-[290px] tw-object-cover"
                />
              </div>
              <div className="sm:tw-col-span-1 tw-col-span-2 tw-overflow-hidden tw-rounded-lg">
                <Image
                  width={600}
                  height={300}
                  src="/assets/images/Offshore-software/concept_2.png"
                  alt="Concept 1"
                  className="tw-w-full tw-h-[300px] tw-object-cover"
                />
              </div>
              <div className="sm:tw-col-span-1 tw-col-span-2 tw-flex tw-items-center tw-p-6 tw-overflow-hidden curve-concept tw-rounded-lg">
                <div className="tw-relative tw-flex tw-flex-col tw-z-10">
                  <div className="tw-text-lg tw-font-bold tw-text-white">
                    A transparent, agile{" "}
                  </div>
                  <p className="tw-text-base tw-font-normal tw-text-white">
                    approach from planning to delivery
                  </p>
                  <span className="tw-block tw-bg-white tw-h-1 tw-mt-2 tw-w-16"></span>
                </div>
                <div className="shape-container sm:tw-block tw-hidden tw-right-0 tw-bottom-0 tw-z-10">
                  <div className="bottom-left-shape"></div>
                  <div className="bottom-right-shape"></div>
                </div>
              </div>
              <div className="tw-absolute tw-hidden tw-top-1/2 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-w-[170px] tw-h-[170px] tw-bg-white tw-rounded-full lg:tw-flex tw-items-center tw-justify-center tw-shadow-xl">
                <svg
                  className="tw-absolute tw-w-full tw-h-full tw-overflow-visible spin-smooth"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="none"
                  />
                  <text>
                    <textPath
                      xlinkHref="#circlePath"
                      className="tw-fill-blue-400 tw-font-medium tw-uppercase"
                      style={{ fontSize: "7.9px", letterSpacing: "3px" }}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      Offshore Software Development
                    </textPath>
                  </text>
                </svg>
                <div className="tw-relative tw-z-10 tw-w-[90px] tw-h-[90px] tw-bg-blue-400 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/Offshore-software/process_4.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="tw-w-full">
              <h3 className="md:tw-text-3xl sm:tw-text-2xl tw-text-xl tw-font-bold tw-text-dark-two">
                Type of Engagement :
              </h3>
              <hr className="md:tw-my-6 tw-my-3 tw-border-blue-250" />
              <div className="md:tw-pt-7 tw-pt-4">
                <div className="tw-flex tw-flex-col concepts-process tw-relative md:tw-gap-y-24 tw-gap-y-10">
                  <div className="tw-flex tw-items-center tw-gap-6">
                    <div className="tw-flex tw-flex-col tw-items-center">
                      <div className="tw-flex-shrink-0 tw-w-[70px] tw-h-[70px] tw-bg-[#E4EBFF] tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                        <Image width={48} height={48}
                          src="/assets/images/Offshore-software/process_1.png"
                          className="tw-w-12"
                          alt="process-1"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="tw-font-bold tw-text-[#415AA5] md:tw-text-xl tw-text-lg">
                        Full-Time Dedicated Developers
                      </h4>
                      <p className="tw-text-dark-two tw-mt-1 md:tw-text-base tw-text-sm">
                        Skilled professionals committed exclusively to your
                        projects.
                      </p>
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-6">
                    <div className="tw-flex tw-flex-col tw-items-center">
                      <div className="tw-flex-shrink-0 tw-w-[70px] tw-h-[70px] tw-bg-[#E4EBFF] tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                        <Image width={48} height={48}
                          src="/assets/images/Offshore-software/process_2.png"
                          className="tw-w-12"
                          alt="process-2"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="tw-font-bold tw-text-[#415AA5] md:tw-text-xl tw-text-lg">
                        Part-Time Or Shared Resources
                      </h4>
                      <p className="tw-text-dark-two tw-mt-1 md:tw-text-base tw-text-sm">
                        Cost-effective resources, shared across projects.
                      </p>
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-6">
                    <div className="tw-flex-shrink-0 tw-w-[70px] tw-h-[70px] tw-bg-[#E4EBFF] tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                      <Image width={48} height={48}
                        src="/assets/images/Offshore-software/process_3.png"
                        className="tw-w-12"
                        alt="process-3"
                      />
                    </div>
                    <div>
                      <h4 className="tw-font-bold tw-text-[#415AA5] md:tw-text-xl tw-text-lg">
                        Project-Based Teams
                      </h4>
                      <p className="tw-text-dark-two tw-mt-1 md:tw-text-base tw-text-sm">
                        Specialized teams built for your project goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Solution;
