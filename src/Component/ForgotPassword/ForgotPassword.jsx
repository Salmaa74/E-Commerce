import React, { useState } from 'react'
import style from './ForgotPassword.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ForgotPassword() {
  const [apiErorr, setapiErorr] = useState(null);
  const navigate = useNavigate();



  async function onSubmit(values) {
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values)
      .catch((err) => {
        setapiErorr(err.response.data.message);
      })
    if (data.statusMsg == 'success') {
      navigate('/verifyResetCode')
    }

  }
  const validationSchema = yup.object({
    email: yup.string().required("Email is Required").email('Invalid Email'),
  })

  let formik = useFormik({
    initialValues: {
      email: "",
    }, validationSchema
    , onSubmit


  });

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Forgot Password</title>
    </Helmet>
    <div className='w-75 py-5 m-5'>
      <h2>Find your account</h2>
      <p>Enter the email associated with your account to change your password.</p>
      <form onSubmit={formik.handleSubmit}>
        {apiErorr ? <div className='alert alert-danger'>{apiErorr}</div> : null}
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" placeholder='Email' className='mb-3 form-control' id="emailValid" value={formik.values.email} />
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div> : null}
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="btn bg-main text-white w-25  mt-4 d-block  ">
          Next
        </button>

      </form>

    </div>
  </>
}
