import React from 'react'
import style from './Loading.module.css'
import { Circles } from 'react-loader-spinner'

export default function Loading() {
  return <>
  <div className='loading'>
  <Circles
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </div>
 
  </>
}
