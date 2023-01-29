import React, { useEffect } from "react";
import ProductCard from "../../component/Card/ProductCard";
import MetaData from "../../component/MetaData/MetaData";
import "./main.css";

import { getProduct } from "../../actions/productActions";
import  Loader  from '../../component/loader/Loader'
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
          <Loader/>
      ) : (
        <div>
          <MetaData title="Craft-Tech" />
          <div className="hero card bg-dark text-white border-0">
            <img
              src="/assests/bg-hero.jpg"
              className="card-img"
              alt="Background"
              height="500px"
            />
            <div className="card-img-overlay">
              <div className="container">
                <h5 className="card-title display-3 bg-dark mb-0 p-2">
                  NEW ARRIVALS SEASON
                </h5>
                <p className="card-text lead fs-2 text-black">
                  CHECK OUT ALL THE TRENDING CRAFTS
                </p>
              </div>
            </div>
          </div>
          <div className="products-card-banner">
            <div className="best-deal-container">
              <p className="card-text lead fs-1 text-black">DEALS OF THE DAY</p>
              <button className="button-53" role="button">
                Get Best Deals
              </button>
            </div>
            <div className="products-card-container">
              {products &&
                products.map((product) => <ProductCard product={product} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
