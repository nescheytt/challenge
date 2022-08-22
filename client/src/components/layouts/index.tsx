import React, { ReactElement } from 'react'
import Header from '../header'
import '../../assets/scss/globals.scss'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      {children}
    </>
  )
}

export default Layout
