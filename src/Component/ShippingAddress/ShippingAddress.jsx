import React, { useContext } from 'react'
import style from './ShippingAddress.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import * as yup from 'yup'
import { useParams } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
export default function ShippingAddress() {
  const { cartId } = useParams();
  const { CheckoutSession,CreateCashOrder } = useContext(cartContext);

  async function onSubmit(values) {
    const { data } = await CheckoutSession(cartId, values);
    if (data.status == 'success') {
      window.location.href=data.session.url;

    }
  }
  async function cash(values) {
    const { data } = await CreateCashOrder(cartId, values);
    if (data.status == 'success') {
      window.location.href='allorders'

    }
  }


  let validationSchema = yup.object({
    phone: yup.string().required("Phone Number is Required").matches(/^01[0125][0-9]{8}$/, "Invalid Phone")
  })
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: ""
    }, validationSchema
    , onSubmit


  })
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Shipping-Address</title>
    </Helmet>
    <div className='w-75 mx-auto py-4'>
      <h2 className='h1 text-center '>Your Address</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">Details : </label>
        <input onChange={formik.handleChange} type="details" name="details" className='mb-3 form-control' id="details" />
        <label htmlFor="phone">Phone : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name="phone" className='mb-3 form-control' id="phone" />
        {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger py-2'>{formik.errors.phone}</div> : null}
        <label htmlFor="city">City : </label>
        <input onChange={formik.handleChange} type="city" name="city" className='mb-3 form-control' id="city" />
        <button type='submit' className='btn bg-main text-light w-25 me-5'>Credit Cart</button>
         <button type='button' className='btn btn-outline-main w-25 ms-5' onClick={() => cash(formik.values)}>Cash on delivery</button>

      </form>
    </div>
  </>
}
