import{r as c,i as m,k as u,l as h,m as x,j as e,H as p,f as C}from"./index-Bs8QTJ__.js";function j(){const[t,a]=c.useState(null),r=m();async function i(n){const{data:d}=await C.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",n).catch(l=>{a(l.response.data.message)});d.status=="Success"&&r("/resetpassword")}const o=u({resetCode:h().required("Email is Required").matches(/^[0-9]{3,10}$/,"Enter numbers only")});let s=x({initialValues:{resetCode:""},validationSchema:o,onSubmit:i});return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("title",{children:"Verification Code"})]}),e.jsxs("div",{className:"w-75 py5 m-5",children:[e.jsx("h2",{className:"mb-4",children:"Verification Code"}),e.jsxs("form",{onSubmit:s.handleSubmit,children:[t?e.jsx("div",{className:"alert alert-danger",children:t}):null,e.jsx("input",{className:"form-control mb-3",type:"text",id:"resetCode",name:"resetCode",value:s.values.resetCode,onChange:s.handleChange,onBlur:s.handleBlur,placeholder:"Reset Code:"}),s.errors.resetCode&&s.touched.resetCode?e.jsx("div",{className:"alert alert-danger  py-2",children:s.errors.resetCode}):null,e.jsx("button",{disabled:!(s.isValid&&s.dirty),type:"submit",className:"btn bg-main text-white w-25  mt-4 d-block ",children:"Next"})]})]})]})}export{j as default};