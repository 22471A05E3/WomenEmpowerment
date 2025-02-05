import React, { useState, Usestate,useEffect } from 'react';
export default function Test(){
    const [count,setcount] = useState(0);

//     useEffect(() => {
//         setTimeout(() =>{
//         setcount((count) => count+1);
//     },1000);
// });


    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={ () => setcount(count+1)}>Increment</button>
            <button onClick={ () => setcount(count-1)}>Decrement</button>
        </div>
    )
}