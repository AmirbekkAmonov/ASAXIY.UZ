import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'


function Layout({ setSearch }) {
  return (
    <>
        <Header setSearch={setSearch} />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout