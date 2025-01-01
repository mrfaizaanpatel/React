import { useState } from "react";

function ChangeName()
{
    let [name,setName]=useState("NameChanged")
    let [year,setYear]=useState(2024)
    // let name="ChangeName"
    const change=()=>{
        setName("Yeah! Changed")
     // name="NameChanged"

    } 
    const changeYear=()=>{    
        setYear(2025)

    }
    return(
        <div>
            <h1 onClick={change}>{name}</h1>
            <p>{name}</p>
            <hr />
            <h1 onClick={changeYear}>{year}</h1>
        </div>
    );

}
export default ChangeName;