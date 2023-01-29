import React from 'react'
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faArrowRightToBracket, faRegistered} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Button from '../Button/Button';


const Header = () => {
  return (
    <div>
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <h3>Craft-Tech</h3>
        </div>
        <div className='navbar-list'>
        <div className='nav-link-list'>
          <li>
          <Link to='/'>
          <Button title="Home"/>
          </Link>
          </li>
          <li>
          <Link to='/shop'>
          <Button title="Shop"/>
          </Link>
          </li>
          
        </div>
          <form>
            <input 
               className='search-from '
               type="search"
               placeholder='Search'
               aria-label='Search'
            />
           <Button title="Search"/>
          </form>
          <div className='buttons'>
             <button className='button'>
             <FontAwesomeIcon icon={faArrowRightToBracket} /> Sign In
             </button>
             <button className='button'>
             <FontAwesomeIcon icon={faRegistered} /> Register
             </button>
             <button className='button'>
             <FontAwesomeIcon icon={faCartArrowDown}/>
             </button>
          </div>
        </div>
    </div>
    <div className='category-container'>
      <div className='category-card'>
         <img src='https://www.earticleblog.com/wp-content/uploads/2016/08/airtel-hanset-special-offers.png' alt='' />
         <p>Top Offers</p>
      </div>
      <div className='category-card'>
         <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623966215-1574864350-gh-ceramic-cookware-1-1574864331.png?crop=1.00xw:0.975xh;0,0.0156xh&resize=480%3A%2A' alt='' />
         <p>Ceramic</p>
      </div>
      <div className='category-card'>
         <img src='https://shoponline.cottageemporium.in/image/cache/catalog/SAREE%20GI%20/BRONZE%20/M675D118CA0163005000_A-600x667.JPG' alt='' />
         <p>Bronze </p>
      </div>
      <div className='category-card'>
         <img src='https://5.imimg.com/data5/YW/BN/RC/SELLER-99938751/aluminum-flower-design-silver-diya-500x500.jpg' alt='' />
         <p>Aluminium</p>
      </div>
      <div className='category-card'>
         <img src='https://5.imimg.com/data5/YG/FY/MY-45066606/wooden-handicraft-250x250.jpg' alt='' />
         <p>Wooden</p>
      </div>
      <div className='category-card'>
         <img src='https://n2.sdlcdn.com/imgs/j/n/y/Gunnu-Sales-Beige-Brass-Handicraft-SDL446674361-1-66b1f.jpg' alt='' />
         <p>Brass</p>
      </div>
      <div className='category-card'>
         <img src='https://3.imimg.com/data3/WT/GG/GLADMIN-96237/bamboo-craft-500x500.jpg' alt='' />
         <p>Bamboo</p>
      </div>
    </div>
  </div>
  )
}

export default Header


