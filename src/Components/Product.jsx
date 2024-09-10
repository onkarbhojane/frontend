import './Product.css'


const Product=(props)=>{
    return(
        <div className='card' style={{ padding:`${props.padding}`}}>
            <img src={props.src} alt='Loading Soon' style={{height:'64px',width:'64px'}}></img>
            <p>{props.name}</p>
            <p>{props.offer}</p>
        </div>
    )
}

export default Product;