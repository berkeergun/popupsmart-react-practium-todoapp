import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/todos/todosSlice";

function Header() {
  const { user, todoList, loading, theme } = useSelector((state) => ({...state.todos,}));
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(setTheme(!theme));
  };

  const activeTodos = todoList?.filter((todo) => !todo.isCompleted);

  return (
    <div style={{ border: "0px solid black", width: "700px" }}>
      <div style={{ position: "relative" }}>
        <button
          style={{
            position: "absolute",
            top: "35px",
            right: "35px",
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            backgroundColor: theme === false ? "#102027" : "#FFCC33",
            border: "0px solid black",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
          }}
          onClick={changeTheme}
        >
          {theme === false ? "🌙" : "🌞"}
        </button>
      </div>
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          textShadow: "4px 4px 2px #ffffff30",
        }}
      >
        Welcome {user}
      </h1>
      {activeTodos.length > 0 && (
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            textShadow: "4px 4px 2px #ffffff30",
            margin: "0px",
          }}
        >
          You have {activeTodos.length} thing{activeTodos.length > 1 ? "s" : ""}{" "}
          to do...
        </h3>
      )}

      {activeTodos.length === 0 && !loading && (
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            textShadow: "4px 4px 2px #ffffff30",
            margin: "0px",
          }}
        >
          There is nothing to do...
        </h3>
      )}
    </div>
  );
}

export default Header;
