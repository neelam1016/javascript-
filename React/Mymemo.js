import React, {useState,useMemo}from 'react'
function squareNum(number){
    console.log("Square done")
    return Math.pow(number,2);
}
export default function Mymemo() {
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);
    const square=useMemo(()=>{
             return squareNum(number)
           },[number]);
    const onChangeHandler=(e)=>{
        setNumber(e.target.value)
    }
    const counterClick=()=>{
        setCounter(counter+1)
    }
  return (
    <div>
        <h2> UseMemo Example</h2>
        <input type="number" placeholder="Enter number" value={number} onChange={onChangeHandler}/>
         <div> Output : {square}</div>
        <br/>
        <button onClick={counterClick}> Counter ++</button>
        <div> Counter value is {counter}</div>
    </div>
  )
}
