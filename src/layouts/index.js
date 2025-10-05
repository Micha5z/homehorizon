import React from 'react'
import Header from '../components/header'

import Footer from '../components/footer'
import Mdx from '../components/mdx'

import { StyledThemeProvider } from '../styles/themeManager'

import '../styles/layout.css'

import '../styles/fonts.css'

const Layout = ({ path, children, nofooter }) => {
  return (
    <StyledThemeProvider>
      <Header
        path={path}
        siteTitle="Home Horizon"
      />
      <Mdx>
        {children}
      </Mdx>
      {nofooter ? null : <Footer />}
    </StyledThemeProvider>
  )
}

export default Layout
