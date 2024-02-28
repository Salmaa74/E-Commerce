import React, { useContext, useEffect, useState } from 'react'
import style from './FeaturedProducts.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { WishlistContext } from '../../Context/WishlistContext';
import Loading from '../Loading/Loading';

export default function FeaturedProducts() {
  let { addToWishlist, removeFromWishlist, getWishlist, wishList,RemoveClick } = useContext(WishlistContext);
  let { addToCart } = useContext(cartContext);

  useEffect(() => {
    getWishlist()
  }, [])

  async function PostCart(id) {
    let { data } = await addToCart(id);
    if (data.status == 'success') {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
  }


 async function handleWishList(id){
    if(wishList.includes(id)){
      const { data } = await removeFromWishlist(id);
      if (data.status === 'success') {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
      RemoveClick(id)
    }else{
      const { data } = await addToWishlist(id);
    if (data.status == 'success') {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
    }
  }

  function getProduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')

  }
  let { data, isLoading } = useQuery('FeaturedProducts', getProduct);
 


  return <>
    {isLoading ? <Loading /> : <div className='row gy-4'>
      {data?.data.data.map(product =>
        <div className='col-md-3' key={product.id}>

          <div className='product p-2' >
            <Link to={`/ProductDetails/${product.id}`}>
              <img src={product.imageCover} alt={product.title} className='w-100' />
              <span className='font-sm text-main'>{product.category.name}</span>
              <h3 className='h5'>{product.title.split(' ').splice(0, 2).join(' ')}</h3>
           
            <div className='d-flex justify-content-between align-content-center'>
              <span className='font-sm '>{product.price} EGP</span>
              <span className='font-sm'>
                <i className="fas fa-star rating-color me-1"></i>
                {product.ratingsAverage}
              </span>

            </div>
            </Link>
            <div className=' text-center '>
            <button onClick={() => PostCart(product._id)} className='btn btn-outline-main  btn-sm w-75  mt-2'>Add to Cart</button>
            <span className={`btn`}
                  onClick={() => {
                    handleWishList(product.id)
                  }}>
                  <i className={`fa-solid cursor-pointer ${wishList.includes(product.id) ? "text-danger fa-regular fa-heart ": "fa-solid fa-heart-crack text-black"}`}></i>
                  </span>
            </div>
            
            
          </div>

        </div>

      )
      }
    </div >}



  </>
}

