import{r as t,h as y,c as v,W as k,j as e,a as C,L as D,_ as n,f as o}from"./index-DNJDnrwC.js";function P(){const[l,d]=t.useState({}),[i,m]=t.useState([]),[h,u]=t.useState(!0),{id:c}=y(),{addToCart:f}=t.useContext(v),{addToWishlist:x,removeFromWishlist:g,getWishlist:_,wishList:r,RemoveClick:j}=t.useContext(k);async function w(s){const{data:a}=await f(s);a.status=="success"?n.success(a.message):n.error(a.message)}async function N(s){if(r.includes(s)){const{data:a}=await g(s);a.status==="success"?n.success(a.message):n.error(a.message),j(s)}else{const{data:a}=await x(s);a.status=="success"?n.success(a.message):n.error(a.message)}}async function b(s){let{data:a}=await o.get(`https://ecommerce.routemisr.com/api/v1/brands/${s}`);d(a.data)}async function p(s){let{data:a}=await o.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${s}`);m(a.data),u(!1)}return t.useEffect(()=>{b(c),p(c)},[]),e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"h1 fw-bold text-center py-5",children:l.name}),h?e.jsx(C,{}):e.jsx("div",{className:"row gy-4",children:i.length!==0?i.map(s=>e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"product p-2",children:[e.jsxs(D,{to:`/ProductDetails/${s.id}`,children:[e.jsx("img",{src:s.imageCover,alt:s.title,className:"w-100"}),e.jsx("span",{className:"font-sm text-main",children:s.category.name}),e.jsx("h3",{className:"h5",children:s.title.split(" ").splice(0,2).join(" ")}),e.jsxs("div",{className:"d-flex justify-content-between align-content-center",children:[e.jsxs("span",{className:"font-sm ",children:[s.price," EGP"]}),e.jsxs("span",{className:"font-sm",children:[e.jsx("i",{className:"fas fa-star rating-color me-1"}),s.ratingsAverage]})]})]}),e.jsxs("div",{className:" text-center ",children:[e.jsx("button",{onClick:()=>w(s._id),className:"btn btn-outline-main  btn-sm w-75  mt-2",children:"Add to Cart"}),e.jsx("span",{className:"btn",onClick:()=>{N(s.id)},children:e.jsx("i",{className:`fa-solid cursor-pointer ${r.includes(s.id)?"text-danger fa-regular fa-heart ":"fa-solid fa-heart-crack text-black"}`})})]}),"              "]})},s.id)):e.jsx("div",{className:" d-flex justify-content-center align-items-center my-5",children:e.jsx("p",{className:"h2 fw-bolder",children:`"Looks like our stock is taking a breather! Don't worry, we're in the process of replenishing our shelves with fantastic products. Meanwhile, why not  browse our other sections for great deals and offerings? Thank you for your understanding!"`})})})]})}export{P as default};
