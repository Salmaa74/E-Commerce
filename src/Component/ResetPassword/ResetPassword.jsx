import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function ResetPassword() {
  const [apiErorr, setapiErorr] = useState(null);
  const navigate = useNavigate();

  async function onSubmit(values) {
    const { data } = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", values)
      .catch((err) => {
        setapiErorr(err.response.data.message);
      })
    if (data.token) {
      navigate('/login')
    }

  }

  const validationSchema = yup.object({
    email: yup.string().required("Email is Required").email('Invalid Email'),
    newPassword: yup.string().required("Password is Required").matches(/^[A-Z][\w ]{5,8}$/, "Invalid Password EX:Ahmed123"),
  })

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    }, validationSchema
    , onSubmit


  });
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reset Password</title>
    </Helmet>
    <div className='w-75 py5 m-5'>
      <h2 className="mb-4">Reset Password</h2>
      <form onSubmit={formik.handleSubmit}>
        {apiErorr ? <div className='alert alert-danger'>{apiErorr}</div> : null}
        <label htmlFor="resetemail">Email : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" className='mb-3 form-control' id="resetemail" />
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div> : null}
        <label htmlFor="newPassword">New Password : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="newPassword" className='mb-3 form-control' id="newPassword" />
        {formik.errors.newPassword && formik.touched.newPassword ? <div className='alert alert-danger py-2'>{formik.errors.newPassword}</div> : null}
        <div className=' d-flex justify-content-between py-3 '>
          <button disabled={!(formik.dirty && formik.isValid)} className='btn text-light bg-main ' type='submit'>Reset Password</button>
        </div>


      </form>
    </div>

  </>
}













