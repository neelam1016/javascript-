import React,{useState,useCallback} from 'react';
import Todos from './Todos';

export default function Mycallback() {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    const counter=()=>{
        setCount(count+1)
    }
    const addTodo=useCallback(()=>{
        setTodos((t)=> [...t,"new data"]);
    },[todos])
  return (
    <div>
        <h2> Usecallback Example</h2>
        <Todos todos={todos} addTodo={addTodo}/>
        <div>
            Count : {count} <br/>
            <button onClick={counter}>++</button>
        </div>
    </div>
  )
}
