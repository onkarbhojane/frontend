import React, { useState } from "react";
import UserContext from "./userContext.js";

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState({Name:"Login",password:"password",Mobile_number:0,productClick:'Phones',cart:[]});
    const [Product,setProduct] = useState([{}])
    const [cartProduct,setcartProduct] = useState([])
    const [searchText,setSearchText] = useState("")
    const [cartProductInfo,setcartProductInfo] = useState([])
    const [BuyingProduct,setBuyingProduct] = useState([]);
    const [SearchedProducts, setSearchProducts] = useState([{Name:"onkar",Image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/s/-original-imah2qyrmtgtzztg.jpeg?q=70',Price:1000},
        {Name:"onkar",Image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/s/-original-imah2qyrmtgtzztg.jpeg?q=70',Price:1000}
        ,{Name:"onkar",Image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/s/-original-imah2qyrmtgtzztg.jpeg?q=70',Price:1000}
        ,{Name:"onkar",Image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/s/-original-imah2qyrmtgtzztg.jpeg?q=70',Price:1000}
        ,{Name:"onkar",Image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/s/-original-imah2qyrmtgtzztg.jpeg?q=70',Price:1000}

    ])
    return (
        <UserContext.Provider value={{user,setUser,Product,setProduct,cartProduct,setcartProduct,searchText,setSearchText,SearchedProducts,setSearchProducts,cartProductInfo,setcartProductInfo,BuyingProduct,setBuyingProduct}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;