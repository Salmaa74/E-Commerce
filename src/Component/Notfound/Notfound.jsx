import React from 'react'
import style from './Notfound.module.css'
import { Helmet } from 'react-helmet'
import Error from '../../assets/images/error.svg'

export default function Notfound() {
  return <>
   <Helmet>
      <meta charSet="utf-8" />
      <title>Notfound</title>
    </Helmet>
 <div className='d-flex justify-content-center align-items-center'>
 <img src={Error} alt="Not Found Page" className='my-5 p-5' />
 </div>
  
  </>
}
