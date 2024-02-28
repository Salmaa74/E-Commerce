import React, { useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { cartContext } from '../../Context/CartContext';
import { Helmet } from 'react-helmet';
import Loading from '../Loading/Loading';


export default function AllOrders() {
  const { id } = jwtDecode(localStorage.getItem("userToken"));
  const { getUserOrders } = useContext(cartContext);
  let [loading, setLoading] = useState(true);
  let [items, setItems] = useState(null);

  async function Order(id) {
    const { data } = await getUserOrders(id)
    setItems(data)
    setLoading(false)
  }
  useEffect(() => {
    Order(id)
  }, [])
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Orders</title>
    </Helmet>
    <div className='bg-main-light p-3 mt-5 '>
      <h2 className=' fw-bolder text-center p-2'>My Orders</h2>
      {loading ? <Loading /> :
        items.length == 0 ?
          <div className='d-flex justify-content-between'><p className='h3 py-5 fw-bolder text-main'> "Your order history is empty. Start shopping now to fill it with your favorite items!"</p> </div>
          : <>
            {items.map((order, index) => <div className='row ' key={index}>
              <h2 className=' fw-bold'>Order :<span className=' text-main'> {index + 1}</span></h2>
              <p className='  col-md-6 fw-bolder d-inline-block'> Shipping Address: <span className='text-main fw-bold'> {order.shippingAddress.details}, {order.shippingAddress.city}</span></p>
              <p className=' col-md-6 fw-bolder d-inline-block'> Phone: <span className='text-main fw-bold'> {order.shippingAddress.phone}</span></p>
              <p className=' col-md-6 fw-bolder d-inline-block'>TotalOrderPrice: <span className='text-main fw-bold'> {order.totalOrderPrice} </span></p>
              <p className=' col-md-6 fw-bolder d-inline-block'> Payment Method : <span className='text-main fw-bold'>{order.paymentMethodType} </span></p>
              <p className=' col-md-6 fw-bolder d-inline-block'> Is Paid : <span className='text-main fw-bold'>{order.isPaid == false ? <span>Not yet</span> : <span>Paid</span>} </span></p>
              <p className=' col-md-6 fw-bolder d-inline-block'>Is Delivered : <span className='text-main fw-bold'> {order.isDelivered == false ? <span>Not yet</span> : <span>Delivered</span>}</span></p>
              {order.cartItems.map((item, index) =>
                <div key={index} className='row border-1 border-bottom m-2 align-items-center py-2'>
                  <div className='col-md-2'>
                    <img src={item.product.imageCover} alt={item.product.title} className='w-100' />
                  </div>
                  <div className='col-md-9'>
                    <h3 className='h5 fw-bolder'>{item.product.title.split(' ').splice(0, 3).join(' ')}</h3>
                    <p><span className='text-main'>{item.price} </span> EGP</p> 
                    <p>QTY : <span className='text-main'>{item.count} </span></p> 
                  </div>


                </div>
              )}

            </div>
            )
            }





          </>


      }

    </div>
  </>
}




