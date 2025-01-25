import { useState } from "react"
import UpdateNum from "./UpdateNumber"
import UpdateText from "./UpdateText"
import NavBar from "../functionalComponents/navBar"

const Memo=()=>{
    var [num,setNum]=useState(0)
    var [num1,setNum1]=useState(0)
    return (

        <div>
            <NavBar/>
            <h2>this is React.memo</h2>
            <UpdateText val={num}/>
            <button onClick={()=>setNum(num+1)}>+</button>
            <UpdateNum val={num1}/>
            <button onClick={()=>setNum1(num1+1)}>+</button>
        </div>
    )
}
export default Memo 