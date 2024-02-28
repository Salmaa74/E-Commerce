import React, { useContext, useEffect, useState } from 'react'
import style from './CategoriesDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategories } from '../../Redux/Categories';
import Loading from '../Loading/Loading';
import { WishlistContext } from '../../Context/WishlistContext';

export default function CategoriesDetails() {
  const { addToWishlist, removeFromWishlist, wishList,RemoveClick } = useContext(WishlistContext);
  const [Categorie, setCategorie] = useState({});
  const [products, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);
  const { Categories } = useSelector(({ categorie }) => categorie);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSubCategories(id))
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

  async function getCategorie(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    setCategorie(data.data);
  }
  async function getProduct(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`)
    setProduct(data.data);
    setloading(false)
  }
  useEffect(() => {
    getCategorie(id)
    getProduct(id)

  }, [])

  return <>
    <h3 className='h1 fw-bold text-center pt-5'>{Categorie.name}</h3>
    {loading ? <Loading/> : <>
      <div className='row g-2 my-5'>
        {Categories.map(Categorie => <div key={Categorie._id} className='col-md-3'>
          <div className='p-2 border rounded-3 '>
            <p className=' text-center fw-bold h6 text-main'>{Categorie.name}</p>
          </div>
        </div>)}
      </div>
      <div className='row gy-4'>
        {products.length !== 0 ?
          products.map(product =>
            <div key={product.id} className='col-md-3'>
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
            </div>              </div>
            </div>

          ) : <div className=' d-flex justify-content-center align-items-center my-5'>
          <p className='h2 fw-bolder'>"Looks like our stock is taking a breather! Don't worry, we're in the process of replenishing our shelves with fantastic products. Meanwhile, why not  browse our other sections for great deals and offerings? Thank you for your understanding!"</p>
        </div>
        }
      </div>
    </>


    }
  </>
}
