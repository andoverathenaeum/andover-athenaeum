import React, { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export function Navigation({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="bg-gray-50 border-t border-color-gray-200">{children}</div>
      <Footer />
    </Fragment>
  )
}