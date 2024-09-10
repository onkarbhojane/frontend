import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/Components/App'
import UserContextProvider from './Context/UserContextProvider';

// const data= async ()=>{
//   try{
//    const res = await fetch("http://localhost:3000/home?name=Onkar&age=21")
//    console.log(res)
//   }catch(err){
//     console.log("error")
//   }
// }
// data();
ReactDOM.render(
  <UserContextProvider>
    <App></App>
  </UserContextProvider>,
  document.getElementById('root')
);