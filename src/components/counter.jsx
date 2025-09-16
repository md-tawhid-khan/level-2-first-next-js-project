"use client"

import { useState } from "react";

const Counter = () => {

    const [count,setCount]=useState(0)

    return (
        <div>
            <button onClick={()=>setCount(count+1)} className="text-amber-200 " >increment</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)} className="text-orange-400 " >decrement</button>            
        </div>
    );
};

export default Counter;