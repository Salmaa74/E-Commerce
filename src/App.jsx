import React, { useContext, useEffect } from 'react';
import { HashRouter,  RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { UserContext } from './Context/UserContext.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.jsx'
import Home from './Component/Home/Home'
import Layout from './Component/Layout/Layout'
import Cart from './Component/Cart/Cart'
import Products from './Component/Products/Products'
import Categories from './Component/Categories/Categories'
import Brands from './Component/Brands/Brands'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Notfound from './Component/Notfound/Notfound'
import Protected from './Component/Protected/Protected.jsx'
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx'
import BrandsDetails from './Component/BrandsDetails/BrandsDetails.jsx'
import Wishlist from './Component/Wishlist/Wishlist.jsx'
import CategoriesDetails from './Component/CategoriesDetails/CategoriesDetails.jsx'
import Userprofile from './Component/Userprofile/Userprofile.jsx'
import ForgotPassword from './Component/ForgotPassword/ForgotPassword.jsx'
import VerifyResetCode from './Component/VerifyResetCode/VerifyResetCode.jsx'
import ResetPassword from './Component/ResetPassword/ResetPassword.jsx'
import ShippingAddress from './Component/ShippingAddress/ShippingAddress.jsx'
import AllOrders from './Component/AllOrders/AllOrders.jsx'



export default function App() {
  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Protected><Home /> </Protected> },
        { path: 'cart', element: <Protected><Cart /></Protected> },
        { path: 'shippingAddress/:cartId', element: <Protected><ShippingAddress /></Protected> },
        { path: 'allorders', element: <Protected><AllOrders /></Protected> },
        { path: 'wishlist', element: <Protected><Wishlist /></Protected> },
        { path: 'products', element: <Protected><Products /></Protected> },
        { path: 'ProductDetails/:id', element: <Protected><ProductDetails /></Protected> },
        { path: 'Categories', element: <Protected><Categories /></Protected> },
        { path: 'CategoriesDetails/:id', element: <Protected><CategoriesDetails /></Protected> },
        { path: 'brands', element: <Protected><Brands /></Protected> },
        { path: 'BrandsDetails/:id', element: <Protected><BrandsDetails /></Protected> },
        { path: 'Userprofile', element: <Protected><Userprofile /></Protected> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'ForgotPassword', element: <ForgotPassword /> },
        { path: 'verifyResetCode', element: <VerifyResetCode /> },
        { path: 'resetpassword', element: <ResetPassword /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])
  let { setToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      setToken(localStorage.getItem('userToken'))
    }
  }, [])


  return <>
    <Provider store={store}>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </Provider>




  </>
}
