import React, { useState,useEffect} from 'react'

function UseEffectForTitle() {

const [count,setCount]=useState(0);
useEffect(()=>{
    alert("Component is mounted");
},[])

useEffect(()=>{
document.title=`TitleCount: ${count}`;
},[count])

const increament=()=>{
    setCount((count)=>{
        return count+1;
    })
}

  return (
    <div>
<hr />
<h2>Question 4</h2>
<button onClick={increament}>Click here</button>
<h1>Count displayer: {count}</h1>
    </div>
  )
}

export default UseEffectForTitle