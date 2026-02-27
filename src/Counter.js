import React from 'react'
import { useState } from'react'
import'./Counter.css'
const Counter=()=>{
const[count,setCount]=useState(true)
 function Change(){
    setCount(!count)
      console.log(count)
    }
  return(
    
    <div className='counter'>
     <h1>{count?"True":"False"}</h1>
     <div className={count?"box-skyblue":"box-dark"}></div>
      <button onClick={Change} className='btn-Counter'>Dark/Skyblue</button>
    </div>
  )
}
export default Counter;

