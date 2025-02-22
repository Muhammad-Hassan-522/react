import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header /> {/* it will remain same */}
        <Outlet /> {/* it can be dynamically changed */}
        <Footer /> {/* it will remain same */}
    </>
  )
}

export default Layout