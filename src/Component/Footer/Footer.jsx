import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
    <footer className='bg-main-light py-4 mt-5'>
      <div className=' container '>
        <h2>Get the FreshCart</h2>
        <p>We will send you a link, open it on your phone to download the app.</p>
        <div className=' d-flex'>
          <div className="col-sm-10">
          <input type="email" name="email" id="email" placeholder='Email' className=' form-control py-2' />
          </div>
          <div className="col-sm-2 ps-3">
          <button className='btn bg-main text-light w-100'>Share App Link</button>
          </div>
        </div>
        <div className="line border-bottom border-2 my-4">
                </div>
        <div className=' d-flex justify-content-between'>
          <div>
            <h6 className='p-3 m-2 d-inline-block '>PAYMENT METHODS </h6>
            <i className="fa-brands fa-2x mx-1 fa-cc-paypal"></i>
            <i className="fa-brands fa-2x mx-1 fa-cc-mastercard"></i>
            <i className="fa-brands fa-2x mx-1 fa-cc-amazon-pay"></i>
            <i className="fa-solid fa-2x mx-1 fa-hand-holding-dollar"></i>
          </div>
          <div>
            <a href="https://www.instagram.com/" target='_blank'><i className="me-2 fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/" target='_blank'><i className="me-2 fa-brands fa-facebook"></i></a>
            <a href="https://www.tiktok.com/" target='_blank'><i className="me-2 fa-brands fa-tiktok"></i></a>
            <a href="https://twitter.com/" target='_blank'><i className="me-2 fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/" target='_blank'><i className="me-2 fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/" target='_blank'><i className="me-2 fa-brands fa-youtube"></i></a>
          </div>



        </div>

        <h6 className=' text-center'>© 2024 FreshCart. All Rights Reserved</h6>
      </div>

    </footer>
  </>
}
