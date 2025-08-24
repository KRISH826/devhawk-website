import React from 'react'

const Footer = () => {
  return (
    <footer className="tw-border-t-4 tw-relative tw-z-10 tw-border-blue-650 tw-my-[-75px]">
            <div className="tw-container">
                <div className="tw-mx-auto tw-px-6 tw-py-12 tw-text-center">
                    <a href="mailto:sales@proquantic.com"
                        className="tw-text-white tw-text-2xl sm:tw-text-3xl md:tw-text-3xl tw-font-bold hover:tw-underline">
                        sales@proquantic.com
                    </a>
                    <p className="tw-mt-3 tw-text-base sm:tw-text-lg tw-text-blue-150">
                        Your Success Is Assured
                    </p>
                    <hr className="tw-w-20 tw-mx-auto tw-my-6 sm:tw-my-8 tw-border-white/20" />
                    <div className="tw-max-w-4xl tw-mx-auto tw-space-y-4 tw-text-base tw-text-blue-150">
                        <p>
                            Get fast-track delivery of high-quality solutions and services on time.
                        </p>
                        <p>
                            We leverage GitHub, Jira, Slack and Microsoft Teams for flawless project execution and
                            transparent communication.
                        </p>
                    </div>
                    <p className="tw-mt-10 sm:tw-mt-12 tw-text-sm tw-text-blue-150">
                        © 2025 Proquantic. All Right Reserved.
                    </p>
                </div>

            </div>
        </footer>
  )
}

export default Footer