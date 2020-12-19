import React, { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export function Navigation({ children }) {
  return (
    <Fragment>
      <Header />
      <div
        className="bg-gray-50 border-t border-gray-200 mt-24 pb-6"
        style={{ minHeight: 'calc(100vh - 135px)'}}
      >{children}</div>
      <Footer />
    </Fragment>
  )
}