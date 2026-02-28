import React from 'react'
import { useState } from'react'

const Dynamic=()=>{
    const [name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    function handle(e){
        setName(e.target.value)
    }
    
    return(
        <><center>
        <form>
          <br/> Name: <input type="text" onChange={handle}/>
            <br/><br/>Email: <input type="Email" onChange={(e=>setEmail(e.target.value))}/>
           <br/> <br/>Password: <input type="Password" onChange={(e=>setPassword(e.target.value))}/>
        </form>
        <h1>{name}</h1>
        <h1>{Email}</h1>
        <h1>{Password}</h1>
        </center>
        </>
    )
}
export default Dynamic;