import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import '../Components/LoginForm.css'
import UserContext from "../Context/userContext.js";

const SignUp = (props) => {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [mobileNo,setMobleNo]=useState(0)
    const [password,setPassword]=useState("")
    const [verpassword,setverPassword]=useState("")
    const [message,setMessage] = useState({name:"",mobileNo:"",password:""});

    const vallidatePassword = (password) => {
        const lowerc=false;
        const upperc=false;
        const num=false;
        const specialc=false;

        for(const chr in password){
            if(chr>65 && chr<97) upperc=true;
            if(chr>=97) lowerc=true;
            if((chr>=32 && chr<=46) || (chr==64)) specialc=true;
            if(chr>=48 && chr<=57) num=true;
        } 
        if(!(lowerc || upperc || num || specialc)) return {
            flag:false,
            val:"password should contains upperCase,LowerCase,special Symbols & numbers"
        }
    }

    const senddata = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:3000/signup",{
                Name:name,
                Mobile_number:mobileNo,
                password:password
            })
            if(res.data.status === 202){
                setUser(res.data._doc);
                console.log(res.data._doc)
                navigate('/')
            }
        }catch(e){
            console.log('eror')
        };
    }

    return (
        <div className='box2' style={{
            height:'400px',
            margin:'40px',
            alignContent:'center',
            marginLeft:'400px',
            borderRadius:'10px'
        }} >
            <div id='box21' style={{height:'350px'}}>
                <label for='uname' >Enter Name </label>
                <input type='text' autoComplete="off" placeholder='username' value={name} onChange={(event) => {setName(event.target.value)}} id='input_det uname' style={{height:'30px',border:'none',fontSize:'15px', padding:'5px',borderRadius:'20px',borderColor:'none',paddingLeft:'20px'}}></input>
                <span style={{color:'red'}}>{message.name}</span>
                <label for='Mnum' >Enter Mobile Number </label>
                <input type='tel' autoComplete="off" placeholder='0000000000' onChange={(event) => {setMobleNo(event.target.value)}} id='input_det Mnum' style={{height:'30px',border:'none',fontSize:'15px', padding:'5px',borderRadius:'20px',borderColor:'none',paddingLeft:'20px'}}></input>
                <span style={{color:'red'}}>{message.mobileNo}</span>
                <label for='pass' >Enter Password</label>
                <input type='password' autoComplete="off" placeholder='*******' onChange={(event) => {setPassword(event.target.value)}} id='input_det pass' style={{height:'30px',border:'none',fontSize:'15px', padding:'5px',borderRadius:'20px',borderColor:'none',paddingLeft:'20px'}}></input>
                <span style={{color:'red'}}>{message.password}</span>
                <label for='verpass' >Confirm-Password</label>
                <input type='password' autoComplete="off" placeholder='*******' onChange={(event) => {setverPassword(event.target.value)}} id='input_det verpass' style={{height:'30px',border:'none',fontSize:'15px', padding:'5px',borderRadius:'20px',borderColor:'none',paddingLeft:'20px'}}></input>
                {/* <span style={{color:'red'}}>{message.verpassword}</span> */}
                <br></br>
                <button id='Req_OTP_btn' onClick={senddata}>signup</button>
            </div>
        </div>
    )
}

export default SignUp;