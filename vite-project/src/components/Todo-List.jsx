import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Putzen", completed: false},
        {id: 2, text: "Aufräumen", completed: false},
        {id: 3, text: "Hausaufgaben", completed: false}
    ]);

    // function to add a todo
    const addTodo = (todo) => {
        // early return for empty todo
        if (todo.trim() === ''){
            return;
        }
        const newTodo = {
            id: todos.length +1,
            text: todo,
            completed: false
        }
        setTodos([...todos, newTodo]);
        console.log("Todos:", todos);
    }

    // remove function
    // toggle function

    return (
        <div className="bg-gradient-to-br from-[#0093E9] to-[#80D0C7] min-h-screen flex flex-col justify-between">
      <header className="rounded-t-lg bg-white p-4 shadow-md">
        <h3
          className="my-6 bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-center text-3xl font-bold text-transparent">
          Functional-Todo-App
        </h3>
        <TodoForm addTodo={addTodo} todos={todos}/>
      </header>
      <main className="bg-blue-700">
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-start border-t border-gray-300 py-2">
                    <TodoItem todo={todo}/>
                </li>
            ))}
        </ul>
      </main>
      <footer>
        <p
          className="rounded-b-lg bg-white p-4 text-center text-sm text-gray-700 shadow-md">
          © 2025 Todo App -
          <a href="http://amazon.de/" target="_blank">Amazon</a>
        </p>
      </footer>
    </div>
    )
}

export default TodoList;