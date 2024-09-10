import './LoginForm.css'
import {Link} from 'react-router-dom'
import LoginLogo from '../Images/LoginLogo.png'
import axios from 'axios'

const LoginForm=()=>{
    

    return (
        <div className='out'>
            <div className='box1'>
                <p id='login'>Login</p>
                <p id='login_cont'>Get access to your Orders, Wishlist and Recommendations</p>
                <img src={LoginLogo} id='img'></img>
            </div>
            <div className='box2'>
                <div id='box21'>
                    <input type='text' placeholder='Enter Your Email/Mobile number' name='mobileNo' id='input_det'></input>
                    <p style={{marginLeft:'10px',fontSize:'12px',}}>By continuing, you agree to Flipkart's <Link to='/terms' style={{color:'#2874F0'}}>Terms of Use</Link> and <Link to='/policy' style={{color:'#2874F0'}}>Privacy Policy</Link>.</p>
                    <Link to={'/SignIn'} >
                        <button id='Req_OTP_btn'>Request OTP</button>
                    </Link>
                </div>
                <Link to='/Account_Creation' id='Creat_act' >New to Flipkart? Create an account</Link>
            </div>
        </div>
    )
}
export default LoginForm;
