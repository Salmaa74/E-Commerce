import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import UserContextProvider from './Context/UserContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import CartContextProvider from './Context/CartContext.jsx'
import WishlistContextProvider from './Context/WishlistContext.jsx';


let queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <CartContextProvider>
    <WishlistContextProvider>
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools position='bottom-right' />
        </QueryClientProvider>

      </UserContextProvider>
    </WishlistContextProvider>

  </CartContextProvider>



)
