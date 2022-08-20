import React from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store';
import { useState } from 'react';


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // const { data: todos = [], isLoading} = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nexTodo = () => {
    setTodoId(todoId + 1);
  }
  const prevTodo = () => {
    if (todoId > 1) {
      setTodoId(todoId - 1);
    }
  }


  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <ul>
        {/* { data.map(data => (
         <li key={ data.id }>{ data.title }</li>
        )) } */}

        {/* {
          todos.map(todo => (
            <li key={ todo.id }> <strong> {todo.completed ? 'Done: ' : 'Pending: '}</strong>{ todo.title }</li>
          ))
        } */}


      </ul>

      <button onClick={nexTodo }>
        Next Todo
      </button>
      <button onClick={prevTodo}>
        prev Todo
      </button>
    </>
  )
}
