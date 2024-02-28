import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext.jsx'
import { Helmet } from 'react-helmet'

export default function Login() {

  let navigate = useNavigate()
  let [loading, setLoading] = useState(false);
  let [apiErorr, setapiErorr] = useState(null);
  let {setToken}=useContext(UserContext)


  async function onSubmit(values) {
    setLoading(true);
    let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((err) => {
        setapiErorr(err.response.data.message);
        setLoading(false);
      })
    if (data.message == 'success') {
      setLoading(false)
      localStorage.setItem('userToken',data.token);
      localStorage.setItem("data", JSON.stringify(data.user));
      setToken(data.token)
      navigate('/')
    }

  }
  let validationSchema = yup.object({
    email: yup.string().required("Email is Required").email('Invalid Email'),
    password: yup.string().required("Password is Required").matches(/^[A-Z][\w @]{5,8}$/, "Invalid Password EX:Name123"),
  })
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    }, validationSchema
    , onSubmit


  })
  return <>
   <Helmet>
      <meta charSet="utf-8" />
      <title>LogIn</title>
    </Helmet>
    <div className='w-75 mx-auto py-4'>
      <h2>Login Now</h2>
      <form onSubmit={formik.handleSubmit}>
        {apiErorr ? <div className='alert alert-danger'>{apiErorr}</div> : null}
        <label htmlFor="email">Email : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" className='mb-3 form-control' id="email" />
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password : </label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" className='mb-3 form-control' id="password" />
        {formik.errors.password && formik.touched.password ? <div className='alert alert-danger py-2'>{formik.errors.password}</div> : null}
        <div className=' d-flex justify-content-between py-3 '>
        {loading ? <button className='btn text-light bg-main ' type='button'><i className='fas fa-spinner fa-spin'></i></button>
          : <button disabled={!(formik.dirty && formik.isValid)} className='btn text-light bg-main ' type='submit'>LogIn</button>}
          <Link className="ps-3 ms-0" to={'/ForgotPassword'}>Forgot Password !</Link>
        </div>
       
      
      </form>
    </div>
  </>
}
