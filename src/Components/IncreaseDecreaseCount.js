import React,{ useState} from 'react'

function IncreaseDecreaseCount() {

const [count,setCount]=useState(0);

 const increament=()=>{
    setCount((count)=>{
        return count+1;
    })
}
 const decreament=()=>{
    setCount((count)=>{
       return count-1})
}
const reset=()=>{
    setCount((count)=>{
        return 0;
    })
}

  return (
    <div>
<hr />
<h2>Question 3</h2>
        <h1>Initial click count:{count}</h1>
        

        <button onClick={reset}>Reset count</button><button onClick={increament}>Increase count</button><button onClick={decreament}>Decrease count</button>
    </div>
  )
}

export default IncreaseDecreaseCount