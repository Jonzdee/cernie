 "use client";
import {useState} from "react";

 function Hello(){
     console.log('check am a Client component');
     const [count, setCount] = useState(0);
    return (
        <>
        <h1 className="text-3xl">Welcome to next.js class</h1>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)} className="btn btn-primary  text-3xl">Click me!</button>
        </>
    )
 }

 export default Hello;