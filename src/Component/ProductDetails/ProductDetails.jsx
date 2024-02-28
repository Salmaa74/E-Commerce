import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import { WishlistContext } from '../../Context/WishlistContext';

export default function ProductDetails() {
  var settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    infinite: true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    speed:500,
    slidesToScroll: 1
  };
  const [details, setDetails] = useState({});
  const [loading, setloading] = useState(true);
  let { addToCart } = useContext(cartContext);
  let { addToWishlist, removeFromWishlist, wishList,RemoveClick } = useContext(WishlistContext);
  let { id } = useParams();


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

  async function PostCart(id) {
    let { data } = await addToCart(id);
    if (data.status == 'success') {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }

  } 
  async function getDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setDetails(data.data);
    setloading(false)
  }
  useEffect(() => {
    getDetails(id)
  }, [])
  return <>
    {loading ? <Loading/> :<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{details.title}</title>
    </Helmet>
    <div className='row align-items-center'>
        <div className='col-md-4'>
          <Slider {...settings}>
            {details.images.map((imag,index)=><img key={index} src={imag} alt={details.title} className='w-100 py-3' />) }
          </Slider>

        </div>
        <div className='col-md-8'>
          <div className='details'>
            <h3 className='h5'>{details.title.split(' ').splice(0, 2).join(' ')}</h3>
            <p className='py-3'>{details.description}</p>
            <span className='font-sm text-main'>{details.category.name}</span>
            <div className='d-flex justify-content-between align-content-center'>

              <span className='font-sm '>{details.price} EGP</span>
              <span className='font-sm'>
                <i className="fas fa-star rating-color me-1"></i>
                {details.ratingsAverage}
              </span>
            </div>
            <div className=' text-center '>
            <button onClick={() => PostCart(details.id)} className='btn btn-outline-main btn-sm w-75  mt-2'>Add to Cart</button>
            <span className={`btn`}
                  onClick={() => {
                    handleWishList(details.id)
                  }}>
                  <i className={`fa-solid cursor-pointer ${wishList.includes(details.id) ? "text-danger fa-regular fa-heart ": "fa-solid fa-heart-crack text-black"}`}></i>
                  </span>
            </div>
          </div>

        </div>
      </div>
    </>


     
    }

  </>
}