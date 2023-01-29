import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFontAwesome, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import React from 'react'
import './main.css'

const Footer = () => {
  return (
    <div className='footer-container'>
       <hr></hr>
        <div className='footer-left'>
           <div className='link-container'>
           <h4>About</h4>
             <div className='list-link'>
                <Button title="About Us"/>
                <Button title="Contact Us"/>
                <Button title="Careers"/>
                <Button title="Being Seller"/>
             </div>
           </div>
           <div className='link-container'>
           <h4>Help</h4>
           <div className='list-link'>
           <Button title="Payment"/>
           <Button title="Order"/>
           <Button title="GSTIN"/>
             </div>
           </div>
        </div>
        <div className='footer-mid'>
           <h2>Craft-Tech</h2>
           <p>In Making Innovation with</p>
           <h3>ComfortTech Pvt Ltd</h3>
        </div>
        <div className='footer-right'>
           <div className='link-container'>
           <h4>Social</h4>
           <FontAwesomeIcon icon={faInstagram}  className='button button-hover'/>
           <FontAwesomeIcon icon={faTwitter} className='button button-hover'/>
           <FontAwesomeIcon icon={faFacebook} className='button button-hover'/>
           <FontAwesomeIcon icon={faEnvelope} className='button button-hover'/>
           </div>
        </div>
    </div>
  )
}

export default Footer