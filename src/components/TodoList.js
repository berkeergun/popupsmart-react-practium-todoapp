import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import TodoCard from "./TodoCard";

function TodoList() {
  const { todoList, loading } = useSelector((state) => ({ ...state.todos }));

  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className="transition"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      {todoList.length === 0 && (
        <div>
          <h1 style={{ color: "#ffffff90", letterSpacing: "2px" }}>
            Empty List...
          </h1>
        </div>
      )}
      {todoList &&
        todoList.map((item, key) => <TodoCard item={item} key={key} />)}
    </div>
  );
}

export default TodoList;
