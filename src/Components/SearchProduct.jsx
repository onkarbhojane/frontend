import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/userContext";
import axios from "axios";
import { Navigate,Link } from "react-router-dom";

const Item = (props) => {
    return (
        <>
            <div style={{
                height:'220px',
                padding:'24px 0px 30px 24px',
                // border:'2px solid black',
                backgroundColor:'white',
                // borderRadius:'10px',
                textAlign:'center',
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <img height={'200px'} width={'150px'} style={{
                    borderRadius:'10px',
                    margin:'0px 25px'
                }} src={props.src} alt="" />
                <p style={{
                    display:'block',
                    fontSize:'18px',
                    fontWeight:'bold',
                    width:'500px',
                    height:'230px',
                    textAlign:'left',
                    padding:'0px 0px 0px 25px'
                }} >{props.Name}</p>
                <p style={
                    {
                        display:'block',
                        fontWeight:'bold',
                        fontSize:'25px',
                        width:'350px',
                        height:'230px',
                        textAlign:'left',
                        padding:'0px 0px 0px 25px'
                    }
                }>₹{props.Price}</p>
            </div>
            <hr></hr>        
        </>
    )
}

const Filter = () => {
    return (
        <div style={{
            width:'270px',
            backgroundColor:'white',
            marginRight:'8px',
            height:'1000px'
        }}></div>
    )
}
const SearchProduct = (props) => {
    const {searchText,setSearchText} = useContext(UserContext);
    const {SearchedProducts,setSearchProducts} = useContext(UserContext)


    const searchFilter = (search="") => {
        let Arr = search.toLowerCase().split(" ");
        for(let key of Arr){
            console.log(key)
            if(key === "phone"){
                setSearchText("Phone");
                break;
            }else if(key === 'shoe'){
                setSearchText("Shoe");
                break;
            }
        }
    }

    useEffect(() => {
        const fetchSearchData = async () => {
            try{
                searchFilter(searchText);
                const response = await axios.post("http://localhost:3000/Search",{
                    search:searchText
                })
                // set searched Products on the display
                if(response){
                    // setSearchProducts(response._doc);
                    console.log(response)
                }
            }catch(error){
                console.log("error in fething search data for ",error)
            }
        }
        fetchSearchData();
    },[])
    
    
    const createLink = (Name="") =>{
        let linkName="";
        for(let i=0;i<Name.length;i++){
            if(Name[i]===' ' || Name[i]==',' || Name[i]=='#'){
                linkName+='1';
            }else linkName+=Name[i];
        }
        // console.log(linkName)
        return linkName;
    }

    return(
        <div style={{
            display:'flex',
            flexDirection:'row',
            padding:'8px'
        }}>
            <Filter></Filter>
            <div style={{
                width:'1250px'
            }}>
                {SearchedProducts.map((Product,index) => <Link to={`/Product/${createLink(Product.Name)}`} style={{textDecoration:"none",color:"black"}}><Item Name={`${Product.Name}`} key={index} src={`${Product.Image}`} Price={`${Product.Price}`} /></Link>)}
            </div>
        </div>
    )
}

export default SearchProduct;