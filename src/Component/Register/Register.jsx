import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'




export default function Register() {
  let navigate = useNavigate()
  let [loading, setLoading] = useState(false);
  let [apiErorr, setapiErorr] = useState(null);


  async function onSubmit(values) {
    setLoading(true);
    let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .catch((err) => {
        setapiErorr(err.response.data.message);
        setLoading(false);
      })
    if (data.message == 'success') {
      setLoading(false)
      navigate('/login')
    }

  }

  let validationSchema = yup.object({
    name: yup.string().required("Name is Required").min(3, "Name must be at least 3 characters").max(10, "Name can not exceed 10 characters"),
    email: yup.string().required("Email is Required").email('Invalid Email'),
    password: yup.string().required("Password is Required").matches(/^[A-Z][\w ]{5,8}$/, "Invalid Password EX:Ahmed123"),
    rePassword: yup.string().required("Re-Password is Required").oneOf([yup.ref('password')], "Passwords do not match!"),
    phone: yup.string().required("Phone Number is Required").matches(/^01[0125][0-9]{8}$/, "Invalid Phone")
  })
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    }, validationSchema
    , onSubmit


  })
  return <>
   <Helmet>
      <meta charSet="utf-8" />
      <title>Register</title>
    </Helmet>
    <div className='w-75 mx-auto py-4'>
      <h2>Register Now!</h2>
      <form onSubmit={formik.handleSubmit}>
        {apiErorr ? <div className='alert alert-danger'>{apiErorr}</div> : null}
        <label htmlFor="name">Name : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="name" className='mb-3 form-control' id="name" />
        {formik.errors.name && formik.touched.name ? <div className='alert alert-danger py-2'>{formik.errors.name}</div> : null}
        <label htmlFor="email">Email : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" className='mb-3 form-control' id="email" />
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" className='mb-3 form-control' id="password" />
        {formik.errors.password && formik.touched.password ? <div className='alert alert-danger py-2'>{formik.errors.password}</div> : null}
        <label htmlFor="rePassword">RePassword : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="rePassword" className='mb-3 form-control' id="rePassword" />
        {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger py-2'>{formik.errors.rePassword}</div> : null}
        <label htmlFor="phone">Phone : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name="phone" className='mb-3 form-control' id="phone" />
        {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger py-2'>{formik.errors.phone}</div> : null}
        {loading ? <button className='btn text-light bg-main' type='button'><i className='fas fa-spinner fa-spin'></i></button>
          : <button disabled={!(formik.dirty && formik.isValid)} className='btn text-light bg-main' type='submit'>Register</button>}

        <Link className="ps-3" to={'/login'}>Login Now</Link>

      </form>
    </div>
  </>
}
