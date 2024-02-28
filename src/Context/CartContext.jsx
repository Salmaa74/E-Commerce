import axios from "axios";
import { createContext,useEffect,useState } from "react";


export let cartContext = createContext();
export default function CartContextProvider(props) {
    
    const [cartNum, setCartNum] = useState(0);
    let headers = {
        token: localStorage.getItem('userToken')
    }

    function addToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId
        }
            , {
                headers
            })
            .then((response) => {
                setCartNum(response.data.numOfCartItems);
                return response
            })
            .catch((err) => err)
    }
    function getCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`
            , {
                headers
            })
            .then((response) => {
                setCartNum(response.data.numOfCartItems);
                return response
            })
            .catch((err) => err)
    }


    function CheckoutSession(cartID,shippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=https://salmaa74.github.io/E-Commerce/`
        , {
            shippingAddress
        }
            , {
                headers
            })
            .then((response) => {
                return response
            })
            .catch((err) => err)
    }
    function CreateCashOrder(cartID,shippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartID}`
        , {
            shippingAddress
        }
            , {
                headers
            })
            .then((response) => {
                return response
            })
            .catch((err) => err)
    }


    function deleteItem(id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
            , {
                headers
            })
            .then((response) => {
                setCartNum(response.data.numOfCartItems);
                return response
            })
            .catch((err) => err)
    }
    function clearCart(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`
        , {
            headers
        })
        .then((response) => {
            setCartNum(0)
            return response
        })
        .catch((err) => err)
    }
    function updateCount(id, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            count
        }
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }


    function getUserOrders(userID) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`)
            .then((response) => {
                return response
            })
            .catch((err) => err)
    }

    
    useEffect(()=>{
        getCart()
    },[])
    return <cartContext.Provider value={{ addToCart, getCart, deleteItem, updateCount,cartNum,clearCart,CheckoutSession,getUserOrders,CreateCashOrder }}>
        {props.children}
    </cartContext.Provider>
}


