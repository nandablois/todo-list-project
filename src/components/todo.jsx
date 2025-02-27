import React from 'react'

export default function Todo({todo, removeTodo, completeTodo}) {
  return(
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className='content'>
        <p>{todo.text}</p>
        <p className='category'>Categoria: {todo.category}</p>
      </div>
      <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}>✔</button>
        <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
}
 

