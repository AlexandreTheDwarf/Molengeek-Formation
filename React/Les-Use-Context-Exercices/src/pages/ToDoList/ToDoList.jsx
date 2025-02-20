import React, { useState, useContext } from "react";
import ThemeContext from "../../context/themeContext";
import NavBar from "../../Components/NavBar/NavBar";

function ToDoList() {
  const { todos, addTodo, updateTodos } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState("");

  // Fonction pour marquer un élément comme complété
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateTodos(updatedTodos); // Mettre à jour le contexte avec les tâches modifiées
  };

  return (
    <div>
      <NavBar/>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addTodo(inputValue)}>Ajouter une tâche</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
