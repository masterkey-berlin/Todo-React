import React, { useState } from 'react';

function TodoForm() {
    const [todos, setTodos] = useState([]); //Zustand für die Todos
    const [newTodoText, setNewTodoText] = useState(''); //Zustand für den Text des neuen Todos
    
    const handleTodoAdd = (event) => {{
        event.preventDefault(); //Verhindert das Neuladen der Seite beim Absenden des Formulars

        if (newTodoText.trim() !== '') { //Überprüft, ob der Text nicht leer oder nur aus Leerzeichen besteht
        setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]); //oder eineUUID-Bibliothek für eindeutige IDs
        setNewTodoText(''); //Leert das Eingabefeld nach dem Hinzufügen
             }
        };

        const handleTodoToggle = (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                )
            );
        };

        const handleTodoDelete = (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        };  

        return (
            <div>
                <h1>Meine Todo-List</h1>

                <form onSubmit={handleTodoAdd}>
                    <input
                        type="text"
                        value={newTodoText}
                        onChange={(event) => setNewTodoText(event.target.value)}//Aktualisiert den Textzustand bei jeder Eingabe
                        placeholder="Neues Todo hinzufügen"
                    />
                    <button type="submit">Hinzufügen</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleTodoToggle(todo.id)}
                            />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                            <button onClick={() => handleTodoDelete(todo.id)}>Löschen</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default TodoForm;