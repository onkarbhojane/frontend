import React from 'react'
import './Footer.css'


const Footer=(props)=>{
    return(
        <div className='footer'>
            <div className="aboutUs">
                <p style={{color:'gray'}}>ABOUT US</p>
                <p style={{color:'white',marginTop:'10px'}}>Contact Us</p>
                <p style={{color:'white'}}>About Us</p>
                <p style={{color:'white'}}>Carriers</p>
                <p style={{color:'white'}}>Flipkart Stories</p>
            </div>
            <div className="grpComp">
                <p style={{color:'gray'}}>GROUP COMPANY</p>
                <p style={{color:'white',marginTop:'10px'}}>Myntra</p>
                <p style={{color:'white'}}>Cleartrip</p>
                <p style={{color:'white'}}>Shopsy</p>
            </div>
            <div className="help">
                <p style={{color:'gray'}}>HELP</p>
                <p style={{color:'white',marginTop:'10px'}}>Payment</p>
                <p style={{color:'white'}}>Shiping</p>
                <p style={{color:'white'}}>Cancellation & Returns</p>
            </div>
            <div className="cpolicy">
                <p style={{color:'gray'}}>CUSTOMER POLICY</p>
                <p style={{color:'white',marginTop:'10px'}}>Cancellation & Returns</p>
                <p style={{color:'white'}}>Terms Of Use</p>
                <p style={{color:'white'}}>Security</p>
                <p style={{color:'white'}}>Privacy</p>
                <p style={{color:'white'}}>Sitemap</p>
            </div> 
            <hr></hr>
            <div className="mailUs">
                <p style={{color:'gray'}}>Mail Us</p>
                <p style={{color:'white',marginTop:'10px'}}>Flipkart Internet Private Limited,</p>
                <p style={{color:'white'}}> Buildings Alyssa, Begonia & </p>
                <p style={{color:'white'}}> Clove Embassy Tech Village, </p>
                <p style={{color:'white'}}> Outer Ring Road, Devarabeesanahalli Village, </p>
                <p style={{color:'white'}}> Bengaluru, 560103, </p>
                <p style={{color:'white'}}>  Karnataka, India </p>
            </div>
            <div className="addr">
                <p style={{color:'gray'}}>Registered Office Address:</p>
                <p style={{color:'white',marginTop:'10px'}}>Flipkart Internet Private Limited,</p>
                <p style={{color:'white'}}> Buildings Alyssa, Begonia & </p>
                <p style={{color:'white'}}> Clove Embassy Tech Village, </p>
                <p style={{color:'white'}}> Outer Ring Road, Devarabeesanahalli Village, </p>
                <p style={{color:'white'}}> Bengaluru, 560103, </p>
                <p style={{color:'white'}}>  Karnataka, India </p>
                <p style={{color:'white'}}>  CIN : U51109KA2012PTC066107  </p>
                <p style={{color:'white'}}>  Karnataka, India </p>
                <p style={{color:'white'}}> Telephone: <a href="tel:044-45614700">044-45614700</a> / <a href="tel:044-67415800">044-67415800</a></p>
            </div>
        </div>
    )
}

export default Footer;