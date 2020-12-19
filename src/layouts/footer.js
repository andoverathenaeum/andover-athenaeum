import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next'

export function Footer() {
  return (
    <nav className="bg-gray-800 z-50 w-screen">
      <ul className="bottom-banner-li space-x-5 roman text-md text-white pl-6 pt-2 flex text-center h-10">
        <li><a href="https://andoverathenaeum.com/about">About</a></li>
        <li><a href="mailto:andoverathenaeum@gmail.com">Contact us</a></li>
        <li><a href="https://andoverathenaeum.com/privacy-policy">Privacy
                                                                  Policy</a>
        </li>
        <li><a href="https://www.instagram.com/andoverathenaeum/"><img
          src="/assets/instagram.png"
          className="inline mr-2"
          style={{ width: 20 }}
          alt=""
        />andoverathenaeum</a></li>
        <li><a href="https://twitter.com/andoverathenae1"><img
          src="/assets/twitter.png"
          className="inline mr-2"
          style={{ width: 20 }}
          alt=""
        />andoverathenae1</a></li>
      </ul>
    </nav>
  )
}