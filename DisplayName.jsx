import { useEffect, useState } from "react";


function DisplayName()
{
    let [inputName,setName]=useState("text");
    let [length,setLength]=useState(5);
    let [breadth,setBreadth]=useState(5);
    let [area,setArea]=useState(length*breadth);
    useEffect(()=>{
        setArea(length*breadth);
    },[length,breadth])

    return(
        <div>
            <input type="text" value={inputName} onChange={(event)=>{setName(event.target.value)}} />
            <h1>{inputName}</h1>
            <hr />
            <input type="number" placeholder="length" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <input type="number" placeholder="breadth" value={breadth} onChange={(e)=>{setBreadth(e.target.value)}}/>
            <h1>Area is {area}</h1>
        </div>
    );
}
export default DisplayName;