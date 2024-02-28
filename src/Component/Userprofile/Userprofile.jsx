import React from 'react'
import style from './Userprofile.module.css'
import userimg from '../../assets/images/user.png'
import { Link } from 'react-router-dom';

export default function Userprofile() {
  
  const info = JSON.parse(localStorage.getItem('data'));



  return <>
  <div className='w-50 mx-auto py-4'>
    <form className=' text-center'>
    <img src={userimg} alt="userimg" className=' mx-auto rounded-3' />
    <input className='mb-3 form-control text-main' type="text" name="name" id="name" value={info?.name} />
    <input className='mb-3 form-control text-main' type="email" value={info?.email} /> 
    {/* <button className='btn bg-main text-light '> Change Password </button> */}
    </form>
  <Link to={'/allorders'} className='btn btn-outline-main '>My Orders</Link>
  </div>
  
  </>
}
