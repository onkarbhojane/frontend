import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

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

const bt2={backgroundColor:'#FB641B',
    height:'45.4px',
    width:'174px',
    border:'none',
    borderRadius:'2px',
    color:'#FFFFFF',
    fontSize:'16px',
    fontWeight:'bold',
    marginTop:'20px'
}



const LoginNeeded = (props) => {
    const Navigate = useNavigate()
    return (
        <div style={{
            backgroundColor:'#D1CFCF',
            height:'730px'
        }}>
            <Navbar bgcolor='deepskyblue'></Navbar>
            <div style={msg}>
                <img height={"162px"} width={"222px"} src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                <p style={{marginTop:'24px',fontSize:'18px',fontWeight:'bold'}}>Something is Missing ?</p>
                <p style={{marginTop:'10px'}}>Login to see the items you added previously</p>
                <button onClick={() => Navigate('/login')} style={bt2}>Login</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default LoginNeeded