import{u as x,r,U as g,j as e,H as j,L as f,f as w}from"./index-DNJDnrwC.js";import{c as b,a as i,u as N}from"./index.esm-p72fFgC1.js";function S(){let n=x(),[o,t]=r.useState(!1),[l,d]=r.useState(null),{setToken:m}=r.useContext(g);async function c(h){t(!0);let{data:s}=await w.post("https://ecommerce.routemisr.com/api/v1/auth/signin",h).catch(p=>{d(p.response.data.message),t(!1)});s.message=="success"&&(t(!1),localStorage.setItem("userToken",s.token),localStorage.setItem("data",JSON.stringify(s.user)),m(s.token),n("/"))}let u=b({email:i().required("Email is Required").email("Invalid Email"),password:i().required("Password is Required").matches(/^[A-Z][\w @]{5,8}$/,"Invalid Password EX:Name123")}),a=N({initialValues:{email:"",password:""},validationSchema:u,onSubmit:c});return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("title",{children:"LogIn"})]}),e.jsxs("div",{className:"w-75 mx-auto py-4",children:[e.jsx("h2",{children:"Login Now"}),e.jsxs("form",{onSubmit:a.handleSubmit,children:[l?e.jsx("div",{className:"alert alert-danger",children:l}):null,e.jsx("label",{htmlFor:"email",children:"Email : "}),e.jsx("input",{onChange:a.handleChange,onBlur:a.handleBlur,type:"email",name:"email",className:"mb-3 form-control",id:"email"}),a.errors.email&&a.touched.email?e.jsx("div",{className:"alert alert-danger py-2",children:a.errors.email}):null,e.jsx("label",{htmlFor:"password",children:"Password : "}),e.jsx("input",{onChange:a.handleChange,onBlur:a.handleBlur,type:"password",name:"password",className:"mb-3 form-control",id:"password"}),a.errors.password&&a.touched.password?e.jsx("div",{className:"alert alert-danger py-2",children:a.errors.password}):null,e.jsxs("div",{className:" d-flex justify-content-between py-3 ",children:[o?e.jsx("button",{className:"btn text-light bg-main ",type:"button",children:e.jsx("i",{className:"fas fa-spinner fa-spin"})}):e.jsx("button",{disabled:!(a.dirty&&a.isValid),className:"btn text-light bg-main ",type:"submit",children:"LogIn"}),e.jsx(f,{className:"ps-3 ms-0",to:"/ForgotPassword",children:"Forgot Password !"})]})]})]})]})}export{S as default};
