import './Menu.css'
import grocery from '../Images/Grocery.png'
import mobiles from '../Images/Mobiles.png'
import fashion from '../Images/Fashion.png'
import electronics from '../Images/Electronics.png'
import HomeFerniture from '../Images/Home&Ferniture.png'
import Appliances from '../Images/Appliances.png'
import Travel from '../Images/Travel.png'
import Beauty from '../Images/Beauty&Toy.png'
import TwoWheeler from '../Images/TwoWheeler.png'

const Category=(props)=>{
    return(
        <div className='card' style={{ padding:`${props.padding}`}}>
            <img src={props.src} alt='Loading Soon' style={{height:'64px',width:'64px'}}></img>
            <p>{props.name}</p>
        </div>
    )
}
const Menu=(props)=>{
    return(
        <div className='menu'> 
            <Category src={grocery} name='Grocery' padding="16px 16px 16px 24px"></Category> 
            <Category src={mobiles} name='Mobiles' padding='16px'></Category> 
            <Category src={fashion} name='Fashion' padding='16px'></Category> 
            <Category src={electronics} name='Electronics' padding='16px'></Category> 
            <Category src={HomeFerniture} name='Home & Ferniture' padding='16px'></Category> 
            <Category src={Appliances} name='Appliances' padding='16px'></Category> 
            <Category src={Travel} name='Travel' padding='16px'></Category> 
            <Category src={Beauty} name='Beauty, Toys & More' padding='16px'></Category> 
            <Category src={TwoWheeler} name='Two Wheelers' padding="16px 16px 16px 24px"></Category> 
        </div>
    )
}
export default Menu;