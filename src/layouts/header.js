import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="bg-white z-50 top-0 fixed w-screen border-b border-gray-200 ">
            <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-24">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

                        >
                            <span className="sr-only">Open main menu</span>
                            {/* the hamburger */}
                            <svg
                                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* the close icon */}
                            <svg
                                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block lg:ml-6">
                        <div className="roman flex space-x-5">
                            <Link
                                to="/archives"
                                href="/archives"
                            >
                                <a className="transition-all text-gray-500 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">Archives</a>
                            </Link>
                            <Link
                                to="/latest"
                                href="/latest"
                            >
                                <a className="transition-all text-gray-500 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">Latest
                                    Issue</a>
                            </Link>
                            <Link
                                to="/"
                                href="/"
                            >
                                <a>
                                    <img
                                        src="/assets/logo_300dpi.png"
                                        alt="Andover Athenaeum"
                                        className="h-20"
                                    />
                                </a>
                            </Link>
                            <Link
                                to="/about"
                                href="/about"
                            >
                                <a className="transition-all text-gray-500 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">About</a>
                            </Link>
                            <Link
                                to="/write-for-us"
                                href="/write-for-us"
                            >
                                <a className="transition-all text-gray-500 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">
                                    Write for Us
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="block w-64 m-auto lg:hidden">
                        <Link
                            to="/"
                            href="/"
                        >
                            <a>
                                <img
                                    src="/assets/logo_300dpi.png"
                                    alt="Andover Athenaeum"
                                    className="h-20"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${mobileMenuOpen ? "block" : "hidden"} lg:hidden`}>
                <div className="pt-2 pb-4 space-y-1">
                    <Link
                        to="/archives"
                        href="/archives"
                    >
                        <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            Archives
                        </a>
                    </Link>
                    <Link
                        to="/latest"
                        href="/latest"
                    >
                        <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            Latest Issue
                        </a>
                    </Link>
                    <Link
                        to="/about"
                        href="/about"
                    >
                        <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            About
                        </a>
                    </Link>
                    <Link
                        to="/write-for-us"
                        href="/write-for-us"
                    >
                        <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            Write For Us
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}