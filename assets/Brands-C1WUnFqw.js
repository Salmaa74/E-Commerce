import{b as d,d as i,r as n,e as l,j as s,H as c,a as m,L as o}from"./index-DNJDnrwC.js";function j(){let{brands:a,isloading:r}=d(({brand:e})=>e),t=i();return n.useEffect(()=>{t(l())},[]),s.jsxs(s.Fragment,{children:[s.jsxs(c,{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("title",{children:"Brands"})]}),r?s.jsx(m,{}):s.jsx("div",{className:"row py-5 g-4",children:a.map(e=>s.jsx("div",{className:"col-md-3",children:s.jsx("div",{className:"p-2 border rounded-3",children:s.jsxs(o,{to:`/BrandsDetails/${e._id}`,children:[s.jsx("img",{src:e.image,alt:e.name,className:"w-100"}),s.jsx("p",{className:"text-main",children:e.name})]})})},e._id))})]})}export{j as default};
