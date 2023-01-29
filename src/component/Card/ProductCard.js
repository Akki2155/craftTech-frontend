import React from 'react'
import './main.css'
import { Link } from 'react-router-dom';
import Button from '../Button/Button.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRupiahSign } from '@fortawesome/free-solid-svg-icons'
import ReactStars from 'react-rating-stars-component';



const ProductCard = ({product}) => {

  const rating=product.rating;

  const options =
{
  edit:false,
  color:"rgba(20,20,20,0.1)",
  activeColor:" #1476b3",
  size: window.innerWidth<600 ? 20 :25,
  value:rating,
  isHalf:true,
}

 
    return (
   
        <Link className='product-card-container' to={`/product/${product._id}`}>
            <img src="https://res.cloudinary.com/yuppiechef/image/upload/v1464623351/blog/yuppiechef/WP-GreenPan-range_iffpsf.jpg"  loading="lazy" alt='Product Image' />
            <div className='card-button'>
                <Button title='Add to Cart' />
                <Button title='Buy Now'/>
            </div>
            <div className='card-body'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
               <ReactStars {...options}/>
              <div className='card-rating-container'>
                <span>{product.numOfReviews} Reviews</span>
                <span>Assured</span>
              </div>
              <h4>&#x20B9; {`${product.price}`}</h4>
            </div>
        </Link>
        
    )
}

export default ProductCard