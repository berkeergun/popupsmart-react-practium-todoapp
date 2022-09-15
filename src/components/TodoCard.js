import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, getTodos } from "../redux/todos/todosSlice";

function TodoCard({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (todo_id) => {
    if (window.confirm("Are you sure to delete todo?")) {
      dispatch(deleteTodo(todo_id));
    }
  };

  const [basicModal, setBasicModal] = useState(false);
  const [newContent, setNewContent] = useState("");
  const toggleShow = () => setBasicModal(!basicModal);

  
  const handleEdit = (e) => {
    e.preventDefault();
    if (!newContent) {
      return null;
    }

    let todo_id = item.id;
    let newTodoData = { content: newContent };
    // console.log(todo_id)
    // console.log(newContent)

    dispatch(editTodo({ todo_id, newTodoData }));
    toggleShow();
    setNewContent("");
  };

  const handleDone = (e) => {
    let todo_id = item.id;
    let newTodoData = { isCompleted: !item.isCompleted };
    // console.log(todo_id)
    // console.log(newContent)
    dispatch(getTodos());
    if (basicModal) {
      toggleShow();
    }

    // dispatch(getTodo(todo_id))
    // console.log(item);

    dispatch(editTodo({ todo_id, newTodoData }));
  };

  return (
    <div
      className="transition"
      style={{
        width: "600px",
        border: "0px solid black",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "5px",
        margin: "5px",
        position: "relative",
        wordBreak: "break-all",
        borderRadius: "8px",
        boxShadow: "2px 5px 1px 1px #00000030",
        backgroundColor: item.isCompleted ? "#37474f" : "#7da453",
        textDecoration: item.isCompleted ? "line-through" : null,
      }}
      key={item.id}
      data-aos="fade-right"
    >
      <div style={{ margin: "5px" }} className="transition">
        {item.content}
      </div>

      {basicModal && (
        <form
          className="transition"
          onSubmit={handleEdit}
          style={{ display: "flex", width: "100%", marginBottom: "5px" }}
        >
          <input
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid transparent",
              backgroundColor: "#fefefe",
              boxShadow: "2px 2px 1px 1px #00000030",
              color: "#000",
              fontFamily: "Montserrat, sans-serif",
            }}
            type="text"
            placeholder="Update Todo..."
          />
        </form>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          border: "0px solid black",
          alignItems: "center",
        }}
      >
        <div
          className="icons8-done grayscale"
          style={{
            margin: "0px 5px",
            cursor: "pointer",
            filter: item.isCompleted && "none",
          }}
          onClick={() => handleDone()}
        ></div>
        <div
          className="icons8-edit"
          style={{
            margin: "0px 5px",
            cursor: "pointer",
            display: item.isCompleted ? "none" : null,
          }}
          onClick={() => toggleShow()}
        ></div>
        <div
          className="icons8-delete"
          style={{ margin: "0px 5px", cursor: "pointer" }}
          onClick={() => handleDelete(item.id)}
        ></div>
      </div>
    </div>
  );
}

export default TodoCard;
