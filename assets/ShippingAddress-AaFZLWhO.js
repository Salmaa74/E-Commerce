import{e as d,r as h,c as m,k as u,l as p,m as x,j as e,H as b}from"./index-ByVpNI3x.js";function g(){const{cartId:a}=d(),{CheckoutSession:i,CreateCashOrder:r}=h.useContext(m);async function o(n){const{data:t}=await i(a,n);t.status=="success"&&(window.location.href=t.session.url)}async function l(n){const{data:t}=await r(a,n);t.status=="success"&&(window.location.href="/allorders")}let c=u({phone:p().required("Phone Number is Required").matches(/^01[0125][0-9]{8}$/,"Invalid Phone")}),s=x({initialValues:{details:"",phone:"",city:""},validationSchema:c,onSubmit:o});return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("title",{children:"Shipping-Address"})]}),e.jsxs("div",{className:"w-75 mx-auto py-4",children:[e.jsx("h2",{className:"h1 text-center ",children:"Your Address"}),e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx("label",{htmlFor:"details",children:"Details : "}),e.jsx("input",{onChange:s.handleChange,type:"details",name:"details",className:"mb-3 form-control",id:"details"}),e.jsx("label",{htmlFor:"phone",children:"Phone : "}),e.jsx("input",{onChange:s.handleChange,onBlur:s.handleBlur,type:"tel",name:"phone",className:"mb-3 form-control",id:"phone"}),s.errors.phone&&s.touched.phone?e.jsx("div",{className:"alert alert-danger py-2",children:s.errors.phone}):null,e.jsx("label",{htmlFor:"city",children:"City : "}),e.jsx("input",{onChange:s.handleChange,type:"city",name:"city",className:"mb-3 form-control",id:"city"}),e.jsx("button",{type:"submit",className:"btn bg-main text-light w-25 me-5",children:"Credit Cart"}),e.jsx("button",{type:"button",className:"btn btn-outline-main w-25 ms-5",onClick:()=>l(s.values),children:"Cash on delivery"})]})]})]})}export{g as default};
