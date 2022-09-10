import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div className="" key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiFillDelete onClick={() => removeTodo(todo.id)} />
        <AiFillEdit />
      </div>
    </div>
  ));
}

export default Todo;
