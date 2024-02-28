import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();
export default function WishlistContextProvider(proprs) {
    const [wishList, setWishList] = useState([]);
    const [wishNum, setWishNum] = useState(0);
    let headers = {
        token: localStorage.getItem('userToken')
    }
    function Click(productId) {
        if (!wishList.includes(productId)) {
            setWishList([...wishList, productId]);
        }
    }
    function RemoveClick(productId) {
        setWishList(wishList.filter(item => item !== productId));
    }

    function addToWishlist(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            productId
        }, {
            headers
        })
            .then((response) => {
                Click(productId); 
                setWishNum(response.data.count);
                return response
            })
            .catch((err) => err)
    }
    function removeFromWishlist(id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
            headers
        })
            .then((response) => {

                setWishNum(response.data.count);
                return response
            })
            .catch((err) => err)
    }
    function getWishlist() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            headers
        })
            .then((response) => {
                setWishNum(response.data.count);
                setWishList(
                    response.data.data.map((product) => {
                        return product.id;
                    })
                );
                return response;
            })
            .catch((err) => err)
    }
    useEffect(() => {
        getWishlist()
      }, [])


    return <WishlistContext.Provider value={{ addToWishlist, removeFromWishlist, getWishlist, wishList, setWishList, wishNum,RemoveClick}}>
        {proprs.children}
    </WishlistContext.Provider>

}

