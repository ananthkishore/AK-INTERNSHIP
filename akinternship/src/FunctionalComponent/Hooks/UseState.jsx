import {useState } from "react";
var UseState =() =>{
    var [a,b] = useState
    var initialVal=10
    return (
        <div>
            <h1>This is useState Example</h1>
            <h2>this is the value : {a}</h2>
            <button onClick={()=>{
                b(a++)
            }}>increament</button>
            <button onKeyDown={()=>{
                b(a--)
            }}>increament</button>
            <button onDoubleClick={()=>{
                b(initialVal)
            }}>increament</button>
        

           <input
           type="number"
           value={text}
           onChange={(e) => setText(e.target.value)}
           />
           <h4>The text is {text}</h4>
      </div>
    )

}
export default UseState;
