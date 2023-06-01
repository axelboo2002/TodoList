import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setInputValue(todos[index]);
  };

  const handleUpdateTodo = () => {
    if (inputValue.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = inputValue;
      setTodos(updatedTodos);
      setInputValue("");
      setEditingIndex(null);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Agregar tarea nueva...."
        />
        {editingIndex !== null ? (
          <button onClick={handleUpdateTodo}>Actualizar </button>
        ) : (
          <button onClick={handleAddTodo}>Agregar</button>
        )}
      </div>
      <ul className="todos">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button onClick={() => handleEditTodo(index)}>Editar </button>
              <button onClick={() => handleDeleteTodo(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
