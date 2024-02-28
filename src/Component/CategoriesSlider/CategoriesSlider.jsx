import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from 'react-slick';
import { Link } from 'react-router-dom'


export default function CategoriesSlider() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 1
  };
  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  }
  let { data } = useQuery('Categories', getCategories);
  return <>
    <div className='row my-5'>

      < Slider {...settings}>
        {data?.data.data.map(Categorie =>
          <div className='col-md-2' key={Categorie._id}>
            <Link to={`CategoriesDetails/${Categorie._id}`}>
              <img src={Categorie.image} height={200} className='w-100' alt={Categorie.name} />
              <h6 className='my-1'>{Categorie.name}</h6>
            </Link>

          </div>)}
      </Slider>
    </div>
  </>
}
