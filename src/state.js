
import { useState } from "react";

const State = () => {
    let [value, setvalue] = useState(0)
    let increase =()=>{
        setvalue(++value)

    }
    let decrease =()=>{
        setvalue(--value)

    }
    let reset =()=>{
        setvalue(0)

    }
    {/*let[ value , update ]=useState("Hello")
    let handleClick=()=>{
    */}
    
    return (  
        <div className="state">
            <h1>{value}</h1>
            <button onClick={increase}>Increse</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
           {/* <h1>{value}</h1>
            <button onClick={handleClick}>Click</button>*/}

        </div>
    );
}
 
export default State;