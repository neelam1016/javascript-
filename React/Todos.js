import React,{memo} from 'react'

 function Todos({todos,addTodo}) {
    console.log("Child Render")
    console.log(todos)
  return (
    <div>
        <h2> My Todos</h2>
        <ul>
            {todos.map((val,ind)=>
            <li key={ind}>{val}</li>)}
        </ul>
        <button onClick={addTodo}> Add Todo</button>
    </div>
  )
}
export default memo(Todos)
