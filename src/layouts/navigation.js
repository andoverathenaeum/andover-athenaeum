import React, { Fragment } from 'react'
import { Header } from './header'

export function Navigation({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="bg-gray-50 border-t border-color-gray-200">{children}</div>
    </Fragment>
  )
}