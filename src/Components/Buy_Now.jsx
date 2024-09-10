import {React, useRef, useContext,useState, useEffect} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Buy_Now.css';
import Logo from '../Images/Logo.png';
import UserContext from "../Context/userContext";
import { Detail } from "./Cart";
import axios from "axios";
import Foter from './Foter'
const LogoStyle={
    height:'40px',
    width:'90px'
}

const bt1 = {
    height:'44px',
    width:'223px',
    border:'none',
    borderRadius:'2px',
    backgroundColor:'#2874F0',
    color:'white',
    fontSize:'16px',
}
const bt2={
    backgroundColor:'#FB641B',
    height:'48px',
    width:'200px',
    border:'none',
    borderRadius:'2px',
    color:'#FFFFFF',
    fontSize:'14px',
    fontFamily:'arial',
    fontWeight:'bold'
}

const bt3={
    backgroundColor:'#FB641B',
    height:'48px',
    width:'230px',
    border:'none',
    borderRadius:'2px',
    color:'#FFFFFF',
    fontSize:'14px',
    padding:'10px 20px'
}

const AddressCard = (props) => {
    return(   
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            height:'200px',
            marginLeft:'20px',
            fontWeight:'bold'
        }}>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                width:'300px'
            }}>
                <p>{props.data.Name}</p>
                <p>{props.data.AddressType}</p>
                <p>{props.data.Mobile_number}</p>
            </div>
            <p style={{
                fontWeight:'lighter'
            }}>{props.data.Address}</p>
            <button onClick={() => {
                console.log(props.cardRef)
                // props.cardRef.current.style.display='none';
                // props.cardRef.current.style.visibility='hidden'
            }} style={bt2}>DELIVER HERE</button>
        </div>
    )
}

const Bproduct = (props) => {
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
                }} src={`${props.Item.Image}`} />
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
                        <button style={{
                            border:'none',
                            backgroundColor:'white',
                        }}>REMOVE</button>
                    </div>
                </div>
                <div style={{height:'50px',width:'20px',marginLeft:'200px',marginTop:'20px'}}>
                    <input type="radio" name={`${props.Item.Image}`} ></input>
                </div>
            </div>
            <hr></hr>
        </>
    )
}
const Buy_Now = (props) => {
    const {user,cartProductInfo,BuyingProduct} = useContext(UserContext)
    const [Addresses,setAddresses] = useState([]);
    const [count,setCount] = useState(0);
    const Address = useRef();
    const card = useRef();
    const DAdd = useRef();
    const NAdd = useRef();
    const buying_product = useRef();
    const NewAddressData = {Name:"",Mobile_number:0,ConfirmMobile:user.Mobile_number,confirmPassword:user.password,Pincode:0,Locality:"",Address:"",City:"",State:"",LandMark:"",OptionalMobileNumber:0,AddressType:""}
    const NewAddress = () => {
        if(count%2==1){
            Address.current.style.visibility='visible';
            Address.current.style.display='block'
        }else{
            Address.current.style.visibility='hidden';
            Address.current.style.display='none'
        }
        setCount(count+1);
    }
    useEffect(() => {
        AddressData();
    },[])
    const AddressData = async () => {
        try{
            console.log("addresssssss",user.Mobile_number)
            const response = await axios.post("http://localhost:3000/Addresses",{
                Mobile_number:user.Mobile_number,
                password:user.password
            });
            if(response.data!=="not found"){
                setAddresses(response.data)
            }
            console.log("address",response)
        }catch(error){
            console.log("error in fething addresses",error)
        }
    }
    const SaveNewAddress = async () => {
        try{
            const response = await axios.put("http://localhost:3000/SaveAddress",NewAddressData);
            if(response){
                Address.current.style.visibility="hidden"
                Address.current.style.display='none'
                setAddresses([...Addresses,NewAddressData])
                console.log("sent successfully :: ",response)
            }
        }catch(error){
            console.log("error in sending Address Data :: ",error);
        }
    }
    return (
        <div>
            <div className='nav-out' style={{backgroundColor:`#00BFFF`}}>
                    <Link to={'/'} style={{textDecoration:'none'}}>
                        <div className="logo">
                            <img src={Logo} alt='Upload soon' style={LogoStyle}/>
                            <div style={{color:'orange'}}><span style={{color:'gray'}}>Explore</span> Plus</div>
                        </div>
                    </Link>
            </div>
            <div style={{
                display:'flex',
                backgroundColor:'#D1CFCF',
                justifyContent:"space-between"
            }}>
                <div style={{backgroundColor:'#D1CFCF',width:'800px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',marginLeft:'150px',marginTop:'16px'}}>
                    <div className="LoginConfirm">
                        <p style={{marginLeft:'10px',color:'gray'}}>LOGIN</p>
                        <hr></hr>
                        <div style={{
                            display:'flex',
                            marginTop:'6px',
                            marginLeft:'10px',
                            alignItems:'center'
                        }}>
                            <p style={{marginRight:'20px',fontWeight:'bold'}}>{user.Name}</p>
                            <p style={{marginRight:'100px'}}>{user.Mobile_number}</p>
                            <Link to={'/login'}><button style={{height:'35px',width:'100px',backgroundColor:'white',border:'transparent',color:'blue'}}>CHANGE</button></Link>
                        </div>
                    </div>
                    <div className="deliveryAddress">
                        <div ref={DAdd} style={{
                            height:'39px',
                            weight:"fill",
                            backgroundColor:'#2874F0',
                            color:'white',
                            paddingLeft:'50px',
                            paddingTop:'10px'
                        }}>
                            <p>DELIVERY ADDRESS</p>
                        </div>
                        <div ref={card} >
                            {
                                Addresses.map((Address,index) => {
                                    if(index==0){
                                        return <div onClick={() => {
                                                    card.current.style.display='none';
                                                    card.current.style.visibility='hidden';
                                                    DAdd.current.style.backgroundColor='white';
                                                    DAdd.current.style.color='black';
                                                    NAdd.current.style.display='none';
                                                    NAdd.current.style.visibility='hidden'
                                                    buying_product.current.style.display='flex';
                                                    buying_product.current.style.visibility='visible';
                                                }}  style={{
                                                    display:'flex',
                                                    marginLeft:'20px',
                                                    alignItems:'baseline'
                                                }}>
                                                    <input type="radio" checked name="Address"></input>
                                                    <AddressCard key={index} data={Address}/>
                                                </div>
                                    }else{
                                        return <div cardRef={card} onClick={() => {
                                                    card.current.style.display='none';
                                                    card.current.style.visibility='hidden';
                                                    DAdd.current.style.backgroundColor='white';
                                                    DAdd.current.style.color='black';
                                                    NAdd.current.style.display='none';
                                                    NAdd.current.style.visibility='hidden'
                                                    buying_product.current.style.display='flex';
                                                    buying_product.current.style.visibility='visible';
                                                }} style={{
                                                    display:'flex',
                                                    marginLeft:'20px',
                                                    alignItems:'baseline'
                                                }}>
                                                    <input type="radio" name="Address"></input>
                                                    <AddressCard key={index} data={Address}/>
                                                </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="addNewAddress" ref={NAdd}>
                        <p onClick={NewAddress} style={{color:"blue",fontSize:'13px',fontWeight:"bold",fontFamily:'sans-serif'}}><i class="fa-solid fa-plus" style={{marginRight:'10px'}}></i> ADD A NEW ADDRESS</p>
                        <div ref={Address} style={{
                                visibility:'hidden',
                                display:'none'
                            }}>
                            <div style={{
                                display:'flex',
                                height:'570px',
                                width:'600px',
                                flexDirection:'column',
                                justifyContent:'space-evenly',
                                padding:'50px',
                                paddingTop:'10px'
                            }}>
                                <button style={bt1}><i class="fa-solid fa-location-crosshairs"></i>Use my current location</button>
                                <div style={{
                                    display:'flex',
                                    justifyContent:'space-between'
                                }}>
                                    <input onChange={(event) => {
                                        NewAddressData.Name=event.target.value;
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="text" placeholder="name" />
                                    <input onChange={(event) => {
                                        NewAddressData.Mobile_number=event.target.value
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="number" placeholder="10-digit mobile number"/>
                                </div>
                                <div style={{
                                    display:'flex',
                                    justifyContent:'space-between'
                                }}>
                                    <input onChange={(event) => {
                                        NewAddressData.Pincode=event.target.value;
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="number" placeholder="pincode" />
                                    <input style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="text" placeholder="locality" />
                                </div>
                                <input onChange={(event) => {
                                    NewAddressData.Address=event.target.value
                                }} style={{
                                    height:'50px',
                                    paddingLeft:'10px',
                                    height:'90px'
                                }} type="text" placeholder="Address (Area and Street)" />
                                <div style={{
                                    display:'flex',
                                    justifyContent:'space-between'
                                }}>
                                    <input onChange={(event) => {
                                        NewAddressData.City=event.target.value;
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="text" placeholder="City/District/Town" />
                                    <select onChange={(event) => {
                                        NewAddressData.State=event.target.value;
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }}>
                                        <option>Maharastra</option>
                                        <option>Karnataka</option>
                                    </select>
                                </div>
                                <div style={{
                                    display:'flex',
                                    justifyContent:'space-between'
                                }}>
                                    <input onChange={(event) => {
                                        NewAddressData.LandMark=event.target.value;
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="text" placeholder="Landmark (Optional)" />
                                    <input onChange={(event) => {
                                        NewAddressData.OptionalMobileNumber=event.target.value;
                                    }} style={{
                                        height:'50px',
                                        width:'280px',
                                        paddingLeft:'10px'
                                    }} type="text" placeholder="Alternate Phone (Optional)" />
                                </div>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'space-between',
                                    color:'gray'
                                }}>
                                    <p>Address Type</p>
                                    <div style={{
                                        paddingLeft:'20px',
                                        display:'flex',
                                        justifyContent:'space-between',
                                        marginTop:'10px',
                                        color:'black'
                                    }}>
                                        <input onChange={(event) => {
                                            NewAddressData.AddressType="Home"
                                        }} type="radio" id="home" name="AddressType" /><label htmlFor="home">  Home (All day delivery)</label>
                                        <input onChange={(event) => {
                                            NewAddressData.AddressType="Work"
                                        }}  type="radio" id="office" name="AddressType" /><label htmlFor="home">Work (delivery between 10AM - 5PM)</label>
                                    </div>
                                </div>
                                <div style={{
                                    display:'flex',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginTop:'20px'
                                }}>
                                    <button onClick={SaveNewAddress} style={bt3}>SAVE AND DELIVER HERE</button>
                                    <p style={{color:'#2874F0'}}>CANCEL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OrderSummery">
                        <p>ORDER SUMMERY</p>
                        <div ref={buying_product} style={{
                            display:'none',
                            visibility:'hidden'
                        }}>
                            {
                                BuyingProduct.map((product,index) => <Bproduct Item={product}></Bproduct>)
                            }
                        </div>
                    </div>
                    <div className="PaymentOptions">
                        <p>PAYMENT OPTIONS</p>
                    </div>
                </div>
                <div style={{
                    height:'400px',
                    width:'350px',
                    backgroundColor:'white',
                    marginTop:'20px',
                    fontSize:'17px',
                    marginRight:'150px',
                    position:'sticky',
                    top:'78px',
                    display:'flex',
                    flexDirection:'column',
                    justifyItems:'space-evenly',
                    padding:'20px',
                }}>
                    <Detail cartItems={BuyingProduct}></Detail>
                </div>
            </div>
            <Foter></Foter>
        </div>
    )
}

export default Buy_Now;