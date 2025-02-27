"use client"
import { useState } from 'react';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-[#f8f9fa] sticky top-0">
            <div className="px-5 sm:px-6 lg:px-32">
                <div className="flex h-20 lg:h-24 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block" href="/">
                            <Image src="/logo.png" alt="logo" width={200} height={50} />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-10 text-1xl text-center">
                                <li>
                                    <Link className="text-primary transition hover:text-primary font-semibold" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black transition hover:text-primary font-semibold" href="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black transition hover:text-primary font-semibold" href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black transition hover:text-primary font-semibold" href="/terms-conditions">
                                        Terms and Conditions
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="items-center">
                        <div className="items-center text-center hidden lg:block mt-3">
                            <a
                                className="rounded-full bg-primary px-5 py-4 text-1xl font-bold text-white shadow-sm"
                                href="tel:+1-866-830-0112"
                            >
                                Call +1-866-830-0112
                            </a>
                        </div>
                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <nav aria-label="Global">
                            <ul className="flex flex-col items-left gap-4 text-lg font-semibold text-left py-5">
                                <li>
                                    <Link className="text-primary hover:text-primary" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black hover:text-primary" href="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black hover:text-primary" href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black hover:text-primary" href="/terms-conditions">
                                        Terms and Conditions
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar