import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodo = [todo, ...todos];

    setTodos(newTodo);
    console.log(todo, ...todos);
  };

  const completeTodo = (id) => {
    let updatedTosdos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTosdos);
  };

  const removeTodo = (id) => {
    let removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <div>
      <h1>Whats the Plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
