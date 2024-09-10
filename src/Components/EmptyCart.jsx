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



const EmptyCart = (props) => {
    const Navigate = useNavigate()
    return (
        <div style={{
            backgroundColor:'#D1CFCF',
            height:'730px'
        }}>
            <Navbar bgcolor='deepskyblue'></Navbar>
            <div style={msg}>
                <p style={{marginTop:'10px',fontSize:'38px',fontWeight:'bold'}}>Cart is Empty ?</p>
                <img height={"162px"} width={"222px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkl4UOkTb_tcfmwq1s9IUdsjRw2DW9sKydQ&s" alt="" />
                <button onClick={() => Navigate('/')} style={bt2}>Explore More</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default EmptyCart