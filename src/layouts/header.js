import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next'

export function Header() {
  return (
    <nav className="bg-white">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* the hamburger */}
              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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
          <div className="hidden md:block md:ml-6">
            <div className="roman flex space-x-5">
              <Link
                to="/"
                href="/"
              >
                <a className="text-gray-700 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">Archives</a>
              </Link>
              <Link
                to="/"
                href="/"
              >
                <a className="text-gray-700 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">Latest
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
                to="/"
                href="/"
              >
                <a className="text-gray-700 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">About</a>
              </Link>
              <Link
                to="/"
                href="/"
              >
                <a className="text-gray-700 hover:bg-gray-100 px-3 py-2 my-auto rounded-md text-md text-center font-medium">Write
                                                                                                                            for
                                                                                                                            Us</a>
              </Link>
            </div>
          </div>
          <div className="block w-64 m-auto md:hidden">
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
    </nav>
  )
}