import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Offline, Online } from "react-detect-offline";

export default function Layout() {
  return <>
  <Navbar/>

  <div className="container min-vh-100">
  <Offline><div className='loading'>
    <h2>Only shown offline (surprise!)</h2>
    </div></Offline>
    <Outlet></Outlet>
  </div>
  <Footer/>
  </>
}
