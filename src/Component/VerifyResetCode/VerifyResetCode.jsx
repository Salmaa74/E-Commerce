import React, { useState } from 'react'
import style from './VerifyResetCode.module.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function VerifyResetCode() {
  const [apiErorr, setapiErorr] = useState(null);
  const navigate = useNavigate();



  async function onSubmit(values) {
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values)
      .catch((err) => {
        setapiErorr(err.response.data.message);
      })
    if (data.status == 'Success') {
      navigate('/resetpassword')
    }

  }
  const validationSchema = yup.object({
    resetCode: yup.string().required("Email is Required").matches(/^[0-9]{3,10}$/, "Enter numbers only"),
  })

  let formik = useFormik({
    initialValues: {
      resetCode: "",
    }, validationSchema
    , onSubmit


  });

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Verification Code</title>
    </Helmet>
    <div className='w-75 py5 m-5'>
      <h2 className="mb-4">Verification Code</h2>
      <form onSubmit={formik.handleSubmit}>
      {apiErorr ? <div className="alert alert-danger">{apiErorr}</div>
       : null}
        
          <input
            className="form-control mb-3"
            type="text"
            id="resetCode"
            name="resetCode"
            value={formik.values.resetCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Reset Code:'
          />
          {formik.errors.resetCode && formik.touched.resetCode ? 
            <div className="alert alert-danger  py-2">
              {formik.errors.resetCode}
            </div>
           : null}
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="btn bg-main text-white w-25  mt-4 d-block ">
          Next
        </button>
      </form>
    </div>

  </>
}



