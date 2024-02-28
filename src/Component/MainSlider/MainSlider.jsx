import React from 'react'
import Slider1 from '../../assets/images/slider-image-1.jpeg'
import Slider2 from '../../assets/images/slider-image-2.jpeg'
import Slider3 from '../../assets/images/slider-image-3.jpeg'
import side1 from '../../assets/images/side1.jpg'
import side2 from '../../assets/images/side2.jpg'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

export default function MainSlider() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1
  };
  const products = [
    { id: 1, name: 'Product 1', image: Slider1  },
    { id: 2, name: 'Product 2', image: Slider2  },
    { id: 3, name: 'Product 3', image: Slider3 },
  ];
  return <>
    <div className='row gx-0 my-3'>
      <div className='col-md-9'>
        < Slider {...settings}>
          {products.map(product => (
            <div key={product.id}>
              <Link to={`CategoriesDetails/6439d41c67d9aa4ca97064d5`}>
                <img src={product.image} alt={product.name} className='w-100 ' height={400} />
              </Link>
            </div>
          ))}

        </Slider>
      </div>
      <div className='col-md-3'>
        <Link to={'CategoriesDetails/6439d58a0049ad0b52b9003f'}>
          <img src={side2} height={200} alt="side2" />
        </Link>
        <Link to={'CategoriesDetails/6439d61c0049ad0b52b90051'}>
          <img src={side1} height={200} alt="side1" />
        </Link>

      </div>
    </div>

  </>
}
