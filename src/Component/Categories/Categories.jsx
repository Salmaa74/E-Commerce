import React, { useEffect } from 'react'
import style from './Categories.module.css'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/Categories';
import { FallingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Categories() {

  let {Categories,isloading}=useSelector(({categorie})=>categorie);

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return <>
   <Helmet>
      <meta charSet="utf-8" />
      <title>Categories</title>
    </Helmet>
    {isloading ? <Loading/>:
    <div className='row py-5 g-4'>
      {Categories.map(Categorie => <div key={Categorie._id} className='col-md-3'>
        <div className='p-2 border rounded-3'>
          <Link to={`/CategoriesDetails/${Categorie._id}`}>
          <img src={Categorie.image} height={300} alt={Categorie.name} className='w-100' />
          <p className=' text-main pt-2'>{Categorie.name}</p>
          </Link>
         
        </div>
      </div> )}
      </div>}
  </>
}
