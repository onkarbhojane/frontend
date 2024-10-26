import { useContext, useEffect, useRef, useState } from 'react'
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom'
import './Navbar.css'
import Logo from '../Images/Logo.png'
import UserContext from '../Context/userContext.js'


const LogoStyle={
    height:'40px',
    width:'90px'
}
const Navbar=(props)=>{

    const {user,cartProduct} = useContext(UserContext);
    const {searchText,setSearchText} = useContext(UserContext)
    const [count,setCount]=useState(user.cart.length);
    const [searchTextLoc,setSearchTextLoc] = useState();
    const Navigate = useNavigate()
    const searchBar = useRef("")
    const Search = () => {
        setSearchText(searchTextLoc)
        searchBar.current.value=''
        if(searchText.length!=0) Navigate('/Search');
    }


    const onPressEnter = (event) => {
        if(event.key === "Enter"){
            setSearchText(searchTextLoc)
            searchBar.current.value=''
            Navigate('/Search');//here i have not set what to do when noting is written in the search bar
        }
    }
    return(
        <div className='nav-out' style={{backgroundColor:`${props.bgcolor}`}}>
            <Link to={'/'} style={{textDecoration:'none'}}>
                <div className="logo">
                    <img src={Logo} alt='Upload soon' style={LogoStyle}/>
                    <div style={{color:'orange'}}><span style={{color:'gray'}}>Explore</span> Plus</div>
                </div>
            </Link>
            <label for='search' onClick={Search} ><div className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></div></label>
            <input type='text' onKeyDown={onPressEnter} ref={searchBar} className='SearchBar' id='search' onChange={(event) => { setSearchTextLoc(event.target.value);}} placeholder='Search for Products, Brands & More' ></input>
            <div className="LCBD">
                <NavLink to='/login' className="Login">
                    <i className="fa-solid fa-user" style={{marginBottom:'20px',marginRight:'10px'}}></i>
                    <p>{user.Name}</p>
                </NavLink>
                <NavLink to='/details/cart' className="cart">
                    <i className="fa-solid fa-cart-plus" style={{marginBottom:'15px',marginRight:'7px'}}></i>
                    <p>Cart {user.cart.length}</p>
                </NavLink>
                <NavLink to='/details/bestSeller' className="bestSellar">
                    <i className="fa-solid fa-store" style={{marginBottom:'15px',marginRight:'2px'}}></i>
                    <p>Become a Seller</p>
                </NavLink>
                <NavLink to='/details/dots' className="dots" style={{display:'flex',alignItems:'center',paddingBottom:'10px'}}>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;