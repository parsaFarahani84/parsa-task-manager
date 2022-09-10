import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
    // console.log(input);
  };

  const handleChange = function (e) {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
