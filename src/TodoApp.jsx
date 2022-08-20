import React from 'react'
import { useGetTodosQuery } from './store'


export const TodoApp = () => {

  const { data: todos = [], isLoading} = useGetTodosQuery();
  console.log(todos);


  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'true' : 'False' }</h4>

      <pre>...</pre>

      <ul>
      {/* { data.map(data => (
         <li key={ data.id }>{ data.title }</li>
        )) } */}

        {
          todos.map(todo => (
            <li key={ todo.id }> <strong> {todo.completed ? 'Done: ' : 'Pending: '}</strong>{ todo.title }</li>
          ))
        }


      </ul>

      <button>
        Next Todo
      </button>
    </>
  )
}
