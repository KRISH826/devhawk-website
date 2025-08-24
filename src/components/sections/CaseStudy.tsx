import Image from 'next/image'
import React from 'react'

function CaseStudy() {
  return (
    <>
        <section>
            <div className="tw-container">
                <div className="tw-grid tw-grid-cols-12 tw-gap-6 tw-items-center tw-gap-y-4 md:tw-pb-[50px] tw-pb-6">
                    <div className="tw-col-span-12 lg:tw-col-span-6">
                        <span
                            className="tw-uppercase tw-font-bold tw-text-dark-two tw-mb-4 dotted tw-flex tw-align-center section_title_with_primary_two">Case
                            Highlights</span>
                        <h2
                            className="2xl:tw-text-4xl md:tw-text-3xl tw-text-2xl tw-font-extrabold tw-text-dark-two section_title_with_primary_two">
                            <span className="tw-text-blue-500">Driving</span> Growth Through Scalable Offshore Solutions
                        </h2>
                    </div>
                    <div className="tw-col-span-12 lg:tw-col-span-6">
                        <div className="tw-text-gray md:tw-text-base tw-text-sm tw-flex tw-flex-col tw-gap-y-3">
                            <p className="MsoNormal">
                                Explore how our offshore development expertise has helped businesses overcome
                                challenges, reduce costs, and accelerate digital transformation.
                            </p>
                        </div>
                    </div>

                </div>
                <div
                    className="tw-grid 2xl:tw-pt-20 tw-pt-14 driving_sec tw-rounded-lg tw-grid-cols-1 tw-items-start lg:tw-grid-cols-12 tw-overflow-hidden">
                    <div
                        className="tw-col-span-12 tw-pb-7 lg:tw-col-span-5 2xl:tw-px-12 tw-px-8 tw-flex tw-flex-col tw-justify-center">
                        <h2
                            className="tw-text-white tw-font-extrabold tw-text-3xl xl:tw-text-[32px] tw-leading-tight tw-mb-6">
                            Offshore Software Development
                        </h2>
                        <p className="tw-text-blue-150 tw-text-base tw-font-normal tw-mb-10">
                            Discover how we help businesses scale faster, reduce costs, and innovate through offshore
                            development.
                        </p>
                        <div className="tw-space-y-4 xl:tw-space-y-7">
                            <div className="tw-flex tw-items-start tw-gap-x-4">
                                <div className="tw-w-3 tw-h-3 tw-bg-green-300 tw-mt-2 tw-flex-shrink-0"></div>
                                <p className="tw-text-white tw-text-base tw-font-normal">
                                    <strong className="tw-font-bold">Challenge</strong> – Outline the client&#39;s pain points
                                    or business problem.
                                </p>
                            </div>
                            <div className="tw-flex tw-items-start tw-gap-x-4">
                                <div className="tw-w-3 tw-h-3 tw-bg-green-300 tw-mt-2 tw-flex-shrink-0"></div>
                                <p className="tw-text-white tw-text-base tw-font-normal">
                                    <strong className="tw-font-bold">Solution</strong> – Explain how your offshore
                                    development team addressed it.
                                </p>
                            </div>
                            <div className="tw-flex tw-items-start tw-gap-x-4">
                                <div className="tw-w-3 tw-h-3 tw-bg-green-300 tw-mt-2 tw-flex-shrink-0"></div>
                                <p className="tw-text-white tw-text-base tw-font-normal">
                                    <strong className="tw-font-bold">Results</strong> – Showcase measurable outcomes like
                                    cost savings, faster delivery, or improved scalability.
                                </p>
                            </div>
                            <div className="tw-flex tw-items-start tw-gap-x-4">
                                <div className="tw-w-3 tw-h-3 tw-bg-green-300 tw-mt-2 tw-flex-shrink-0"></div>
                                <p className="tw-text-white tw-text-base tw-font-normal">
                                    <strong className="tw-font-bold">Implementation</strong> – Highlight the process, tools,
                                    and collaboration model used.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tw-col-span-12 lg:tw-col-span-7 lg:tw-p-0 tw-p-6 tw-flex tw-items-center tw-justify-center">
                        <Image width={1000} height={600} src="/assets/images/Offshore-software/dashboard.png" alt="Dashboard showing business analytics"
                            className="tw-w-full lg:tw-h-[550px] sm:tw-h-[480px] xl:tw-object-fill tw-object-cover tw-h-[300px] tw-relative tw-top-[6px] lg:tw-right-[-4px] tw-rounded-lg tw-shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CaseStudy