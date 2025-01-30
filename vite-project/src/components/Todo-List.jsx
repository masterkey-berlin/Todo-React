import React, { useState } from 'react' 

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Einkaufen gehen', 
    completed: false},
    { id: 2, text: 'Wohnung putzen', 
    completed: true},
    { id: 3, text: 'Hausaufgaben machen',
    completed: false},
  ])

  return (
    <div>
        <h1>Meine-Todo-List</h1>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                </li>
                            ))}
        </ul>
    </div>
    );
}

export default TodoList;