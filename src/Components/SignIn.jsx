import React,{useContext, useEffect, useState} from "react";
import Navbar from './Navbar.jsx'
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/userContext.js";

const msg = {
    height:'500px',
    display:'flex',
    flexDirection:'column',
    justifyContent:"center",
    alignItems:'center',
    width:'1000px',
    backgroundColor:'white',
    marginLeft:'220px',
    marginTop:'30px',
    marginBottom:'100px'
}

const bt2={
    backgroundColor:'#FB641B',
    height:'45.4px',
    width:'350px',
    border:'none',
    borderRadius:'5px',
    color:'#FFFFFF',
    fontSize:'16px',
    fontWeight:'bold',
    marginTop:'20px'
}


const Inputs = {
    height:'40px',
    width:'350px',
    marginTop:'20px',
    borderRadius:'10px',
    padding:'10px',
    fontSize:'15px',
    fontWeight:'bold'
}

const SignIn = (props) => {
    const {setUser,user} = useContext(UserContext);
    const {setcartProduct,cartProduct} = useContext(UserContext)
    const Navigate = useNavigate();
    const [mobileNo,setMobileNo] = useState();
    const [password,setpassword] = useState();
    useEffect(()=>{
        
        console.log("mkashbckjadshflhrefkja",user.cart.length);
    },[user])
    const Login = async () => {
        try{
            const response = await axios.post("http://localhost:3000/signIn",{
                mobileNo:mobileNo,
                password:password
            });
            if(response.data.msg=='data found'){
                setUser({...response.data._doc});
                Navigate('/');
            }else{

            }
        }catch(error){
            console.log("error in SignIn Process",error);
        }
    }
    // const fetchData = async (cart) => {
    //     try{
    //         const response = await axios.get(`http://localhost:3000/cart/${cart}`)
    //         if(response){
    //             setcartProduct([response.data.Product]);
    //             console.log("mkasclajhfboavk",cartProduct);
    //         }else{
    //             console.log("cart not found")
    //         }
    //     }catch(error){
    //         console.log("cannot fetch the cart content",error)
    //     }
    // }
    return(
        <div style={{
            backgroundColor:'#D1CFCF',
            height:'730px'
        }}>
            <div style={msg}>
                <h1 style={{marginBottom:'20px'}}>Welcome To Flipkart</h1>
                <input style={Inputs} type="number" onChange={(e) => setMobileNo(e.target.value)} placeholder="Enter Your Mobile Number"></input>
                <input style={Inputs} type="text" onChange={(e) => setpassword(e.target.value)} placeholder="Enter your password"></input>
                <button onClick={() => Login()} style={bt2}>Login</button>
                <Link to={'/signup'} style={{textDecoration:'none'}}>
                    <p style={{
                        marginTop: '20px', // Removes the underline
                        fontWeight: 'bold',
                        color: '#2874F0'
                    }}>
                        New User ? Create Account
                    </p>
                </Link>

            </div>
            <hr></hr>
        </div>
    )
}


export default SignIn;