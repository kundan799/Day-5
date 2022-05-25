import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todos,settodos]=useState([])
   
    useEffect(()=>{
        fetch('http://localhost:8080/todos')
        .then(response => response.json())
        .then(data => settodos(data));

    },[])
  return (
    <div>Todo
        <div>
            <div>
            <input type="text" />
            <button>+</button>
            </div>
            {todos.map((el)=>(
                <div key={el.id}>{el.value}</div>

            ))}
        </div>
        
      
    </div>
  )
}

export default Todo
