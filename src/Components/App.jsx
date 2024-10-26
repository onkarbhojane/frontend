import React, { useContext, useEffect } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Layout from '../Pages/Layout.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Foter.jsx';
import Menu from './Menu.jsx';
// import Registration from './Pages/Registration.jsx';
import Banner from './Banner.jsx';
import LoginForm from './LoginFrom.jsx'
import Account_Creation from './Account_Creation.jsx'
import SignUp from './SignUp.jsx'
import BestSeller from './BestSeller.jsx';
import UserContext from '../Context/userContext.js'
import Cart from './Cart.jsx';
import ProductCol from './ProductCol.jsx';
import SignIn from './SignIn.jsx'
import Become_A_Seller from './Become_A_Seller.jsx';
import SearchProduct from './SearchProduct.jsx';
import Buy_Now from './Buy_Now.jsx';



const App = (props) => {
    // const {Product,SearchedProducts} = useContext(UserContext)
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
    return (
        <React.StrictMode >
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route index element={
                        <>
                            <Menu></Menu>
                            <Banner></Banner>
                            <BestSeller prdtName='Shoe'></BestSeller>
                            <BestSeller prdtName='Phone'></BestSeller>
                        </>
                    }>
                    </Route>
                    {/* {Product.map((prdt,ind) => <Route key={`${prdt.Name}`} path={`Product/${createLink(prdt.Name)}`} element={<ProductCol data = {prdt}></ProductCol>}/>)} */}
                    <Route path='Product/:prdtId' element={<ProductCol ></ProductCol>}></Route>
                    <Route path='login' element={<div>
                        <LoginForm></LoginForm>
                        </div>}>
                    </Route>
                    <Route path='Account_Creation' element={<Account_Creation></Account_Creation>}>
                    </Route>
                    <Route path='signup' element={<SignUp></SignUp>}>
                    </Route>
                    {/* <Route path='OTP_ver' element={<OTP></OTP>}>
                    </Route> */}
                    <Route path='/SignIn' element={<SignIn></SignIn>}/>
                    <Route path='/Search' element={<SearchProduct></SearchProduct>}></Route>
                </Route>
                {/* <Route path='cart'></Route> */}
                <Route path='/details/cart' element={<Cart></Cart>}></Route>
                <Route path='/details/bestSeller' element={<Become_A_Seller></Become_A_Seller>}></Route>
                {/* {SearchedProducts.map((Product,index) => <Route key={index} path={`Product/Buy_Now`} element={<h1>hello world</h1>}></Route>)} */}
                <Route path='/Product/Buy_Now' element={<Buy_Now></Buy_Now>}></Route>
            </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App;