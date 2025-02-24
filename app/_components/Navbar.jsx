import { Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-1 sm:px-6 lg:px-1">
                <div className="flex h-32 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <Image src={"/logo.png"} alt='logo' width={200} height={50} />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-16 text-1xl text-center">
                                <li>
                                    <Image src={'/internet.webp'} alt='' width={30} height={30} className='mx-auto' />
                                    <a className="text-black transition hover:text-gray-500/75" href="#"> Internet </a>
                                </li>

                                <li>
                                    <Image src={'/Wireless.webp'} alt='' width={30} height={30} className='mx-auto' />
                                    <a className="text-black transition hover:text-gray-500/75" href="#"> Wireless </a>
                                </li>

                                <li>
                                    <Image src={'/TV.webp'} alt='' width={30} height={30} className='mx-auto' />
                                    <a className="text-black transition hover:text-gray-500/75" href="#"> TV </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="items-center">
                        <div className="items-center text-center">
                            <a
                                className="rounded-full bg-primary px-5 py-4 text-1xl font-bold text-white shadow-sm"
                                href="#"
                            >
                                Call 1-888-553-3023
                            </a>

                            <div className="hidden sm:flex mt-4">
                                <a
                                    className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-white"
                                    href="#"
                                >
                                    Hours of Operations <br />
                                    Monday to Friday: 10am to 8pm (Eastern Time)
                                </a>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
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
            </div>
        </header>
    )
}

export default Navbar