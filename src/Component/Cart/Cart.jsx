import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Helmet } from 'react-helmet';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {
  let { getCart, deleteItem, updateCount,clearCart,cartNum } = useContext(cartContext);
  let [loading, setLoading] = useState(true);
  let [items, setItems] = useState(null);


  async function cart() {
    let { data } = await getCart();
    setItems(data)
    setLoading(false)

  }
  async function remove(id) {
    setLoading(true);
    let { data } = await deleteItem(id);
    setItems(data);
    setLoading(false);

  }
  async function clear() {
    setLoading(true);
    let { data } = await clearCart();
    setItems(data);
    setLoading(false);

  }
  async function update(id, count) {
    if (count < 1) {
      let { data } = await deleteItem(id);
      setItems(data);
    }
    else {
      let { data } = await updateCount(id, count);
      setItems(data);
    }


  }
  useEffect(() => {
    cart()
  }, [])
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Cart</title>
    </Helmet>
    <div className='bg-main-light p-3 mt-5'>
      <h2 className=' fw-bolder text-center'>Cart Shop</h2>
      {loading ? <Loading/>: 
      cartNum==0  ?
      <div className='d-flex justify-content-between'><p className='h3 py-5 fw-bolder text-main'> "Uh oh! Your cart seems lonely. Explore our store and add items to bring it back to life."</p> </div> : <>
      <div className='d-flex justify-content-between '>
      <p>Total Price: <span className='text-main'>{items.data.totalCartPrice}</span> EGP</p>
      <p>Total Number of items: <span className='text-main'>{items.numOfCartItems}</span></p>
    </div>
    {items.data.products.map(product => <div className='row border-1 border-bottom m-2 align-items-center py-2' key={product.product._id}>
      <div className='col-md-2'>
        <img src={product.product.imageCover} alt={product.product.title} className='w-100' />
      </div>
      <div className='col-md-9'>
        <h3 className='h5 fw-bolder'>{product.product.title.split(' ').splice(0, 3).join(' ')}</h3>
        <p><span className='text-main'>{product.price} </span> EGP</p>
        <button className='btn btn-sm m-0 p-0 text-danger' onClick={() => remove(product.product._id)}><i className="fas fa-sm fa-trash text-danger"></i> Remove</button>

      </div>
      <div className='col-md-1'>
        <button className='btn brdr p-1 btn-outline-main' onClick={() => update(product.product._id, product.count + 1)}>+</button>
        <span className='mx-2'>{product.count}</span>
        <button className='btn brdr p-1 btn-outline-main' onClick={() => update(product.product._id, product.count - 1)}>-</button>
      </div>


    </div>)}
    <div className=' d-flex justify-content-center m-3'>
    <button className='btn btn-outline-danger  w-25' onClick={()=>clear()}><i className="fas fa-sm fa-trash "></i> Clear</button>
    <Link className='btn btn-outline-main w-25 ms-5' to={`/shippingAddress/${items.data._id}`}>CHECKOUT</Link>


    </div>
</>
    
    
      }
    
    </div>
  </>
}
