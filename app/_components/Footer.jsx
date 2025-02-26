import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-[#0c0c0c]" >
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-leftsm:justify-start">
                            <Image src={"/logo-footer.webp"} alt='logo' width={300} height={100} />
                        </div>
                        <p className="mt-6 max-w-md text-left leading-relaxed text-white sm:max-w-xs sm:text-left">
                            Lisam Solutions LLC is an authorized reseller of Altice, known as Optimum.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
                        <div className="text-left sm:text-left">
                            <p className="text-lg font-bold text-white">Company</p>

                            <ul className="mt-5 lg:mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="text-white" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="#">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a className="text-white" href="#"> Terms & Conditions </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-left sm:text-left">
                            <p className="text-lg font-bold text-white">Support</p>
                            <ul className="mt-5 lg:mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="tel:+1-866-830-0112"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-white">+1-866-830-0112</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="mailto:info@optimuminternetretailers.com"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-white">info@optimuminternetretailers.com</span>
                                    </a>
                                </li>
                                <li
                                    className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 shrink-0 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <address className="-mt-0.5 flex-1 not-italic text-white">
                                        14402 W Bellfort St apt 132 Sugarland TX 77498
                                    </address>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href=""
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-white">Hours of Operation: Mon- Fri, 10am to 8pm (Eastern Time)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-white">
                            <span className="block sm:inline">The name Altice or Optimum and the pathways logo are trademarks of Optimum.</span>
                        </p>

                        <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">&copy; COPYRIGHT © 2025 Lisam Solutions LLC – 14402 W Bellfort St apt 132 Sugarland TX 77498</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer