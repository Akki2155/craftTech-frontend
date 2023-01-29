import React, { Fragment, useEffect } from 'react'
import './main.css';

import {useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../../actions/productActions';

import { useParams } from 'react-router-dom';






const Products = () => {
  // const Product={
  //   "name":"Apple 13",
  //   "Description":"Apple 13 is launced in year 2022 with latest bio-chip and modern tech camera",
  //   "price":"12000",
  // }

  const {id}=useParams();

  // console.log((id));

  const dispatch=useDispatch();

  const {product,loading, error} = useSelector((state) =>  state.productDetails)


  useEffect(()=>{

    dispatch(getProductDetails(id));

  },[dispatch,id])
  
  return (
      <div className='product-container'>
      <div className='product-image'>
      <img src="https://res.cloudinary.com/yuppiechef/image/upload/v1464623351/blog/yuppiechef/WP-GreenPan-range_iffpsf.jpg"  loading="lazy" alt='Product Image' />
      </div>
      <div className='product-detail'>
         <h1>{product.name}</h1>
         <div className='product-detail-1'>
           <p>{product.description}</p>
           <p>{product.price}</p>
         </div>
      </div>
      </div>
  )
}

export default Products