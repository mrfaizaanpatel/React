import { useEffect, useState } from "react";
function EvenOdd()
{
    // const even = inputValue % 2 === 0;

    let[inputValue,setInputValue]=useState(1);
    let[answer,setAnswer]=useState("odd");
    useEffect(()=>{
        let v=parseInt(inputValue);
        if(v%2===0)
            setAnswer("Even")
        else
            setAnswer("Odd")
        // console.log("EvenOdd")
    },[inputValue])
    return(
        <div>
            <input type="number" value={inputValue} 
            onChange={(event)=>{setInputValue(event.target.value)
                // console.log(inputValue);
            }}/>
            {/* <p>{inputValue} is {even ? "Even" : "Odd"}</p> */}
            <h1>{answer}</h1>
        </div>
        
    );
}
export default EvenOdd;