import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

function Input() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // let content = newTodo
    dispatch(addTodo({ content: newTodo }));
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todoInput transition"
        minLength={3}
        style={{
          width: "300px",
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
          border: "1px solid transparent",
          backgroundColor: "orange",
          boxShadow: "2px 5px 1px 1px #00000030",
          color: "#fff",
        }}
        placeholder="Add Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        required
      />
    </form>
  );
}

export default Input;
