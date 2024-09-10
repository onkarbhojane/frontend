import Footer from "../Components/Foter"
import Navbar from "../Components/Navbar"
import Menu from "../Components/Menu"
import Banner from "../Components/Banner"
import { Outlet } from "react-router-dom"
import UserContextProvider from "../Context/UserContextProvider"
const Layout=(props)=>{
    return(
        <div style={{
            backgroundColor:'#d1cfcf'
          }}>
            <header >
                <Navbar ></Navbar>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer >
                <div style={{marginTop:'10px'}}></div>
                <Footer></Footer>
            </footer>
        </div>
    )
}
export default Layout;