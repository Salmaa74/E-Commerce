import{r as c,c as N,W as v,h as w,j as s,a as C,H as y,S,_ as i,f as b}from"./index-DNJDnrwC.js";function E(){var n={dots:!1,arrows:!1,autoplay:!0,infinite:!0,autoplaySpeed:2e3,slidesToShow:1,speed:500,slidesToScroll:1};const[a,r]=c.useState({}),[o,d]=c.useState(!0);let{addToCart:m}=c.useContext(N),{addToWishlist:u,removeFromWishlist:x,wishList:l,RemoveClick:h}=c.useContext(v),{id:f}=w();async function j(t){if(l.includes(t)){const{data:e}=await x(t);e.status==="success"?i.success(e.message):i.error(e.message),h(t)}else{const{data:e}=await u(t);e.status=="success"?i.success(e.message):i.error(e.message)}}async function p(t){let{data:e}=await m(t);e.status=="success"?i.success(e.message):i.error(e.message)}async function g(t){let{data:e}=await b.get(`https://ecommerce.routemisr.com/api/v1/products/${t}`);r(e.data),d(!1)}return c.useEffect(()=>{g(f)},[]),s.jsx(s.Fragment,{children:o?s.jsx(C,{}):s.jsxs(s.Fragment,{children:[s.jsxs(y,{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("title",{children:a.title})]}),s.jsxs("div",{className:"row align-items-center",children:[s.jsx("div",{className:"col-md-4",children:s.jsx(S,{...n,children:a.images.map((t,e)=>s.jsx("img",{src:t,alt:a.title,className:"w-100 py-3"},e))})}),s.jsx("div",{className:"col-md-8",children:s.jsxs("div",{className:"details",children:[s.jsx("h3",{className:"h5",children:a.title.split(" ").splice(0,2).join(" ")}),s.jsx("p",{className:"py-3",children:a.description}),s.jsx("span",{className:"font-sm text-main",children:a.category.name}),s.jsxs("div",{className:"d-flex justify-content-between align-content-center",children:[s.jsxs("span",{className:"font-sm ",children:[a.price," EGP"]}),s.jsxs("span",{className:"font-sm",children:[s.jsx("i",{className:"fas fa-star rating-color me-1"}),a.ratingsAverage]})]}),s.jsxs("div",{className:" text-center ",children:[s.jsx("button",{onClick:()=>p(a.id),className:"btn btn-outline-main btn-sm w-75  mt-2",children:"Add to Cart"}),s.jsx("span",{className:"btn",onClick:()=>{j(a.id)},children:s.jsx("i",{className:`fa-solid cursor-pointer ${l.includes(a.id)?"text-danger fa-regular fa-heart ":"fa-solid fa-heart-crack text-black"}`})})]})]})})]})]})})}export{E as default};
