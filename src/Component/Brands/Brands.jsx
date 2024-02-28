import React, { useEffect } from 'react'
import style from './Brands.module.css'
import { Helmet } from 'react-helmet'
import { getBrands } from '../../Redux/Brands'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function Brands() {

let {brands,isloading}=useSelector(({brand})=>brand)


  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBrands())
  }, [])


  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Brands</title>
    </Helmet>
    {isloading ?<Loading/>:<div className='row py-5 g-4'>
      {brands.map(brand => <div key={brand._id} className='col-md-3'>
        <div className='p-2 border rounded-3'>
          <Link to={`/BrandsDetails/${brand._id}`}>
          <img src={brand.image} alt={brand.name} className='w-100' />
          <p className='text-main'>{brand.name}</p>
          </Link>
         
        </div>
      </div> )}
      </div>}

  </>
}
