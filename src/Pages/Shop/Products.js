import React, { useEffect } from 'react'
import ProductCard from '../../component/Card/ProductCard'
import MetaData from '../../component/MetaData/MetaData'
import './main.css'

import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../actions/productActions'

const Products = () => {

  const dispatch= useDispatch();

  const {loading, products, productCount}=useSelector(
    (state)=> state.products
  );

  useEffect(()=>{

    dispatch(getProduct());

  },[dispatch])

  return (
    <div className='main-products-container'>
      <MetaData title="Shop- CraftTech"/>
       <div className='filter-container'>
         <div>
            <h3>Filters</h3>
            <hr></hr>
            <h4>Categories</h4>
            <p>Sub-Category</p>
            <p>Sub-Category 2</p>
            <p>Sub-Category 3</p>
            <hr></hr>
         </div>
         <div>
          <h4>Price</h4>
         </div>
       </div> 
       <div className='products-container'>
           
           {products && products.map(product => (
              <ProductCard  product={product}/>
           ))}
           
       </div>
    </div>
  )
}

export default Products