import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/userContext";
import { useNavigate, Link, useParams } from "react-router-dom";

const prdtPage={
    display:'flex',
    width:'363',
    backgroundColor:'white',
    marginLeft:'100px',
    marginRight:'100px',
    paddingTop:'20px',
    padding:'20px',
    marginTop:'10px'
}

const imgSide={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}

const content = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft:'30px',
    border:'2px solid gray',
    borderRadius:'5px',
    padding:'20px'
}

const image = {
    border:'2px gray solid',
    borderRadius:'5px',
    padding:'10px',
    height:'416px'
}

const buttons={
    display:'flex',
    height:'68px',
    width:'416px',
    justifyContent:'space-evenly',
    fontSize:'16px',
    color:'#FFFFFF',
    // marginLeft:'50px',
    marginTop:'10px'    
}

const bt1={backgroundColor:'#FF9F00',
    height:'56px',
    width:'174px',
    border:'none',
    borderRadius:'2px',
    color:'#FFFFFF',
    fontSize:'16px'
}
const bt2={backgroundColor:'#FB641B',
    height:'56px',
    width:'174px',
    border:'none',
    borderRadius:'2px',
    color:'#FFFFFF',
    fontSize:'16px'
}

const ProductCol = (props) => {
    const {setcartProductInfo,setcartProduct,cartProductInfo}=useContext(UserContext);
    const [data,setData] = useState({
        Image:"#"
    });
    const {prdtId} = useParams();
    useEffect(()=>{
        const product=async()=>{
            try{
                const response=await axios.get(`http://localhost:3000/SearchProduct/${prdtId}`);
                console.log("aishbckqflkjDNFHQBERFLEH",response.data);
                setData(response.data);
            }catch(error){
                console.log("erorrrvnaehvbe")
            }
        }
        product();
    },[]);
    const {cartProduct,setBuyingProduct} = new useContext(UserContext)
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const BuyProduct = () => {
            console.log("buyong lkjhgfdsa")
            if(user.Name==="Login"){
                alert("You Are Not Logged in. Please Login.")
                navigate('/login')
            }else {
                setBuyingProduct([data])
                console.log("Buying products are :: ",BuyProduct)
                navigate(`/Product/Buy_Now`)
            }
    }
    const AddProduct = async () => {
        try{
            if(user.Name==="Login"){
                alert("You Are Not Logged in. Please Login.")
                navigate('/login')
            }else{
                let found=false;
                for(let i in user.cart){
                    if(user.cart[i]==data._id){
                        found=true;
                        break;
                    }
                }
                if(!found){
                    // alert("product already Added go to cart");
                    console.log("ccccccccccccccccccccc",data._id)
                    // setcartProduct([...cartProduct,prdtId])
                    // setcartProductInfo([...cartProductInfo,data])
                    const response = await axios.post("http://localhost:3000/cart/AddProduct",{
                        userId:user._id,
                        ProductId:data._id
                    })
                    if(response){
                        user.cart.push(data._id);
                        setUser(user)
                        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh",user)
                        console.log("successfully Added !!! ",user.cart);
                    }else console.log("error At backend");
                }
            }
        }catch(error){
            console.log("Error on Adding product into the Cart :: ",error)
        }
    }


    // const createLink = (Name="") =>{
    //     let linkName="";
    //     for(let i=0;i<Name.length;i++){
    //         if(Name[i]===' ' || Name[i]==','){
    //             linkName+='1';
    //         }else linkName+=Name[i];
    //     }
    //     console.log(linkName)
    //     return linkName;
    // }

    
    return(
        <div style={prdtPage}>
            <div style={imgSide}>
                <img style={image} src={`${data.Image}`}/>
                <div style={buttons}>
                    <button style={bt1} onClick={AddProduct}><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
                    <button style={bt2} onClick={BuyProduct}><i class="fa-solid fa-bolt-lightning"></i> BUY NOW</button>
                </div>
            </div>
            <div style={content}>
                <p style={{fontSize:'18px'}}>{data.Name}</p>
                <p style={{fontSize:'28px',fontWeight:'bolder'}}>₹{data.Price}</p>
                <div style={{display:'flex',border:'2px gray solid',padding:'10px',borderRadius:'10px'}}>
                    <pre style={{fontFamily:'initial',fontWeight:'bold'}}>Description  </pre>
                    <p style={{
                        width:'600px'
                    }}>{data.Discription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCol;