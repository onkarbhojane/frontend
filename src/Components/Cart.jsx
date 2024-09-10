import React,{useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";
import LoginNeeded from './LoginNeeded'
import UserContextProvider from "../Context/UserContextProvider";
import UserContext from "../Context/userContext";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";


const bt2={
    backgroundColor:'#FB641B',
    height:'50.4px',
    width:'174px',
    border:'none',
    borderRadius:'2px',
    color:'#FFFFFF',
    fontSize:'16px',
    fontWeight:'bold',
    marginLeft:'550px'
}

const Card = (props) => {
    const {setcartProduct,setcartProductInfo,cartProductInfo,cartProduct} = useContext(UserContext)


    const createLink = (Name="") =>{
        let linkName="";
        for(let i=0;i<Name.length;i++){
            if(Name[i]===' ' || Name[i]==',' || Name[i]=='#'){
                linkName+='1';
            }else linkName+=Name[i];
        }
        console.log(linkName)
        return linkName;
    }

    
    return (
        <>
            <div style={{
                display:'flex',
                height:'150px',
                marginBottom:'10px',
                marginTop:'10px'
            }}>
                <img style={{
                    height:'120px',
                    width:'120px',
                    margin:'10px 0px',
                }} src={`${props.Image}`} />
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px',
                    marginLeft:'30px'
                }}>
                    <Link to={`/Product/${createLink(props.Item.Name)}` } style={{color:'black',textDecoration:'none'}} ><p style={{fontSize:'25px'}}>{props.Name}</p></Link>
                    <div>
                        <button onClick={() => {
                            for(let Item of cartProductInfo){
                                if(Item == props.Item){
                                    cartProductInfo.pop(Item);
                                    cartProduct.pop(Item.Image);
                                    break;
                                }
                            }
                            console.log("save later clicked",Item.Name,cartProductInfo)
                            setcartProduct(cartProduct)
                            setcartProductInfo(cartProductInfo)
                            console.log("after",cartProductInfo)
                        }} style={{
                            border:'none',
                            backgroundColor:'white',
                            marginRight:'10px'
                        }}>SAVE FOR LATER</button>
                        <button style={{
                            border:'none',
                            backgroundColor:'white',
                        }}>REMOVE</button>
                    </div>
                </div>
                <div style={{height:'50px',width:'20px',marginLeft:'200px',marginTop:'20px'}}>
                    <input type="radio" name={`${props.Image}`} ></input>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

const Item = (props) => {
    const {user,setcartProduct,cartProduct} = useContext(UserContext)
    const [product,setProduct] = useState([]);
    const {cartProductInfo,setcartProductInfo} = useContext(UserContext)
    const {BuyingProduct,setBuyingProduct} = useContext(UserContext)
    const fetchProduct = async () => {
        try{
             const response = await axios.post("http://localhost:3000/cart/GetItems",{
                Items:cartProduct
             });
             const Items = Object.values(response.data)
             if(response){
                setcartProductInfo(Items);
                setBuyingProduct(Items)
             }
        }catch(error){
            console.log("Error in fetching Products ",error)
        }
    }
    fetchProduct();
    useEffect(() => {
        
    },[])




    return (
        <>
        <div style={{
            marginLeft:'100px',
            backgroundColor:'white',
            padding:'24px',
            border:'2px solid black',
            width:'800px',
            marginTop:'20px',
            fontSize:'17px'
        }}>
            <div style={{}}>
                {
                    cartProductInfo.map( (cont,index) => <Card Name={cont.Name} key={index} style={{textDecoration:"none",color:"black"}} Image={cont.Image} Item={cont} ></Card>)
                }
            </div> 
            <div style={{
                height:'60px',
                width:'770px',
                padding:'16px 22px',
                // border:'2px solid gray'                      
            }}>
                <button style={bt2}>PLACE ORDER</button>
            </div>
        </div>
        <div style={{
            height:'400px',
            width:'350px',
            backgroundColor:'white',
            marginTop:'20px',
            fontSize:'17px',
            marginRight:'100px',
            position:'sticky',
            top:'70px',
            display:'flex',
            flexDirection:'column',
            justifyItems:'space-evenly',
            padding:'20px'
        }}>
            <Detail cartItems={BuyingProduct}></Detail>
        </div>
        </>
    )
}


const Detail = (props) => {
    let TotalPrice=0;
    for(let Item of props.cartItems){
        TotalPrice+=Item.Price;
    }
    const discount=0;
    const BMASM=0;
    const CouponFY=0;
    const diliveryCharges=0;
    return (
        <>
                <p style={{fontWeight:'25px',fontWeight:'bold',color:'gray'}}>Price Details</p>
                <hr style={{marginTop:'20px',
                fontSize:'17px'}}></hr>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px'
                }}>
                    <p>Price {`(${props.cartItems.length} Items)`}</p>
                    <p>₹{TotalPrice}</p>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px'
                }}>
                    <p>Discount</p>
                    <p>-₹{discount}</p>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px'
                }}>
                    <p>Buy more & save more</p>
                    <p>-₹{BMASM}</p>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px'
                }}>
                    <p>Coupons for you</p>
                    <p>-₹{CouponFY}</p>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px'
                }}>
                    <p>Delivery Charges</p>
                    <p>₹{diliveryCharges}</p>
                </div>
                <hr style={{marginTop:'20px',
                fontSize:'17px'}}></hr>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px',
                    fontSize:'20px',
                    fontWeight:'bold',
                    fontFamily:'sans-serif'
                }}>
                    <p>Total Amount</p>
                    <p>₹{TotalPrice-discount-BMASM-CouponFY+diliveryCharges}</p>
                </div>
                <hr style={{marginTop:'20px',
                fontSize:'17px'}}></hr>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    fontSize:'17px',
                }}>
                    <p>You will save ₹{discount+BMASM+CouponFY} on this order</p>
                </div>
            </>
    )
}


const Cart = (props) => {
    const {user,setcartProduct,cartProduct} = useContext(UserContext)
    const [product,setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.post("http://localhost:3000/cart",{
                    cart: user.cart
                })
                if(response.data.msg=='data found'){
                    setcartProduct(response.data._doc.Product);
                }else{
                    console.log("cart not found")
                }
            }catch(error){
                console.log("cannot fetch the cart content")
            }
        }
        fetchData();
    },[])
    if(user.Name=="Login" && user.password=="password") return <LoginNeeded/>
    if(cartProduct.length==0) return <EmptyCart/>
    return (
        <>
            <Navbar bgcolor='deepskyblue'></Navbar>
            <div style={{
                display:'flex',
                backgroundColor:'#D1CFCF',
                justifyContent:"space-between"
            }}>
                <Item></Item>
            </div>
        </>
    )
}

export default Cart;
export {Detail}




