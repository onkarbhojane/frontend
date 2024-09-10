import React, { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import LoginLogo from '../Images/LoginLogo.png'
import axios from 'axios';

const Account_Creation=(props)=>{
    const[mobileNo,setMobleNo] = useState(0);
    const navigate = useNavigate();
    const CheckMobileNumber = async (event) => {
        console.log(event)
        try {
            const response = await axios.get(`http://localhost:3000/mobileChecker/${mobileNo}`)
            if( response.data.s == true ) {
                console.log("mobile number exists")
                navigate('/login')
            } else {
                console.log("mobile number not exists")
                navigate('/signup')
            }
        } catch(e) {
            console.log("error",e)
        }
    }
    return(
        <div className='out'>
            <div className='box1'>
                <p id='login'>Looks like you're new here!</p>
                <p id='login_cont'>Sign up with your mobile number to get started</p>
                <img src={LoginLogo} id='img'></img>
            </div>
            <div className='box2' >
                <div id='box21' style={{height:'250px'}}>
                    <input type='text' placeholder='Enter Your Mobile number' onChange={(event) => {setMobleNo(event.target.value)}} id='input_det'></input>
                    <p style={{marginLeft:'10px',fontSize:'12px',}}>By continuing, you agree to Flipkart's <Link to='/terms' style={{color:'#2874F0'}}>Terms of Use</Link> and <Link to='/policy' style={{color:'#2874F0'}}>Privacy Policy</Link>.</p>
                    <div >
                        <button id='Req_OTP_btn' onClick={CheckMobileNumber}>Continue</button>
                    </div>
                    <Link to='/login' >
                        <button id='user_btn'>Existing User? Log in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Account_Creation;