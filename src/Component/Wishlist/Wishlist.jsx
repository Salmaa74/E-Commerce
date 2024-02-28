import React, { useContext, useEffect, useState } from 'react'
import style from './Wishlist.module.css'
import { WishlistContext } from '../../Context/WishlistContext'
import { Helmet } from 'react-helmet'
import Loading from '../Loading/Loading';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function Wishlist() {
  const {removeFromWishlist, getWishlist,wishNum } = useContext(WishlistContext);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const { addToCart } = useContext(cartContext);

  async function wishlist() {
    const { data } = await getWishlist();
    setItems(data)
    setLoading(false)
  }
  async function PostCart(id) {
    let { data } = await addToCart(id);
    if (data.status == 'success') {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
    /* remove(id) */
  }
  async function remove(id) {
    setLoading(true);
    const { data } = await removeFromWishlist(id);
    setItems(data);
    setLoading(false);

  }

  useEffect(() => {
    wishlist()
  }, [])

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Wishlist</title>
    </Helmet>
    <div className='bg-main-light p-3 mt-5'>
      <h2 className=' fw-bolder text-center'>My WishList</h2>
      {loading ? <Loading/>: 
      wishNum==0? <div className='d-flex justify-content-between'><p className='h3 py-5 fw-bolder text-main'> "Your wishlist is currently empty. Start adding items you love to create your personalized collection!"</p> </div> :<>
        {items.data.map(product => <div className='row border-1 border-bottom m-2 align-items-center' key={product._id}>
          <div className='col-md-2'>
            <img src={product.imageCover} alt={product.title} className='w-100' />
          </div>
          <div className='col-md-8'>
            <h3 className='h5 fw-bolder'>{product.title?.split(' ').splice(0, 3).join(' ')}</h3>
            <p><span className='text-main'>{product.price} </span> EGP</p>
            <button className='btn btn-sm m-0 p-0 text-danger' onClick={() => remove(product._id)}><i className="fas fa-sm fa-trash "></i> Remove</button>

          </div>
          <div className='col-md-2'>
            <button className='btn bg-main text-light w-100' onClick={() => PostCart(product._id)}>Add To Cart</button>
          </div>

        </div>)}
      </>

      }
    </div>

  </>
}
