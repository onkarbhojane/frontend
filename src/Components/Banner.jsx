import React, { useEffect, useState } from 'react'
import './Banner.css'
import banner1 from '../Images/banner1.png'
import banner2 from '../Images/banner2.png'
import banner3 from '../Images/banner3.png'

const Banner=(props)=>{
    const [pointer,setPointer]=useState(0);
    const Arr=[banner1,banner2,banner3];
    return (
        <div className='banner'
        style={{
            display:'flex',
            backgroundImage:`url(${Arr[pointer]})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <button className='but' onClick={()=>{
                if(pointer>0) setPointer(pointer-1);
            }}>{'<'}</button>
            <button className='but' onClick={()=>{
                if(pointer<2) setPointer(pointer+1);
            }}>{'>'}</button>            
        </div>
    )
}

export default Banner;