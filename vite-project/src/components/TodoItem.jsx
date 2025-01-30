import React from 'react';

function TodoItem({ todo, onTodoToggle }) {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => onTodoToggle(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </li>
    )
}   

export default TodoItem;