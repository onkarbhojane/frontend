import {React, useEffect, useState,useContext} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import UserContext from '../Context/userContext.js'


const Card = (props) => {
    return (
        <div style={{
            height:'100x',
            padding:'10px',
            border:'2px solid black',
            backgroundColor:'white',
            borderRadius:'10px',
            textAlign:'center'
        }}>
            <img height={'142px'} width={'142px'} style={{borderRadius:'10px'}} src={props.Image} alt="" />
            <p>{props.Name}</p>
            <p style={
                {
                    fontWeight:'bold'
                }
            }>From ₹{props.Price}</p>
        </div>
    )
}

const BestSeller = (props) => {
    const [prdt,setprdt] = useState([]);
    useEffect(() => {
        Data();
    },[])
    const Data = () => {
        try{
            const response = axios.get(`http://localhost:3000/products/${props.prdtName}`)
            .then((response) => {
                if(response.status===200){
                    const productData = Object.values(response.data);
                    // setProduct([...productData])
                    console.log("ddddddddddddddddddd",productData);
                    setprdt([...productData]);
                }
            })
            .catch((error) => {
                console.log(`error in getting data of ${props.prdtName}`,error)
            })
            
        }catch(error){
            console.log(`There is an error on getting ${props.prdtName} Info`,error)
        }
    }


    // used to avoid spaces in Link

    // const createLink = (Name="") =>{
    //     let linkName="";
    //     for(let i=0;i<Name.length;i++){
    //         if(Name[i]===' ' || Name[i]===',' || Name[i]==='#' || Name[i]==='/' || Name[i]==='=' || Name[i]==='?' || Name[i]==='&' || Name[i]===':' || Name[i]==='@' || Name[i]==='+' || Name[i]==='%' || Name[i]==='(' 
    //             || Name[i]===')' || Name[i]==='{' || Name[i]==='}' || Name[i]==='^' || Name[i]==='"' || Name[i]==='<' || Name[i]==='>'){
    //             linkName+='1';
    //         }else linkName+=Name[i];
    //     }
    //     console.log("App js ",linkName)
    //     return encodeURIComponent(linkName);
    // }
    // if(prdt.length==0) return <h1>Load in some second</h1>
    return(
        <div style={{
            height:'250px',
            backgroundColor:'white',
            padding:'15px',
            marginTop:'10px',
            marginLeft:'11px',
            borderRadius:'5px',
            marginRight:'10px'
        }}>
            <Link to={`${props.prdtName.slice(4)}`} style={{color:'black',textDecoration:'none'}}><h2>Best Deal On {props.prdtName}</h2></Link>
            <br></br>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                }}>
                {prdt.map((prdt1,ind) => <Link to={`/Product/${prdt1._id}`} key={ind} style={{color:'black',textDecoration:'none'}}><Card Image={prdt1.Image} Name={prdt1.Name.slice(0,11)} Price={prdt1.Price} ></Card></Link>)}
            </div>
        </div>
    )
}



export default BestSeller;