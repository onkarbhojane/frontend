import axios from "axios";
import React, { useContext } from "react";
import UserContext from "../Context/userContext";
import { useNavigate, Link } from "react-router-dom";

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
    const {cartProduct,setBuyingProduct} = new useContext(UserContext)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const description="Description  "
    const BuyProduct = () => {
            console.log("buyong lkjhgfdsa")
            if(user.Name==="Login"){
                alert("You Are Not Logged in. Please Login.")
                navigate('/login')
            }else {
                setBuyingProduct([props.data])
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
                for(let i in cartProduct){
                    if(cartProduct[i]==props.data._id){
                        found=true;
                        break;
                    }
                }
                if(!found){
                    const response = await axios.post("http://localhost:3000/cart/AddProduct",{
                        cart:user.cart,
                        ProductId:props.data._id
                    })
                    if(response){
                        console.log("successfully Added !!! ");
                    }else console.log("error At backend");
                }
            }
        }catch(error){
            console.log("Error on Adding product into the Cart :: ",error)
        }
    }


    const createLink = (Name="") =>{
        let linkName="";
        for(let i=0;i<Name.length;i++){
            if(Name[i]===' ' || Name[i]==','){
                linkName+='1';
            }else linkName+=Name[i];
        }
        console.log(linkName)
        return linkName;
    }

    
    return(
        <div style={prdtPage}>
            <div style={imgSide}>
                <img style={image} src={`${props.data.Image}`}/>
                <div style={buttons}>
                    <button style={bt1} onClick={AddProduct}><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
                    <button style={bt2} onClick={BuyProduct}><i class="fa-solid fa-bolt-lightning"></i> BUY NOW</button>
                </div>
            </div>
            <div style={content}>
                <p style={{fontSize:'18px'}}>{props.data.Name}</p>
                <p style={{fontSize:'28px',fontWeight:'bolder'}}>₹{props.data.Price}</p>
                <div style={{display:'flex',border:'2px gray solid',padding:'10px',borderRadius:'10px'}}>
                    <pre style={{fontFamily:'initial',fontWeight:'bold'}}>Description  </pre>
                    <p style={{
                        width:'600px'
                    }}>{props.data.Discription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCol;