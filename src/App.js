import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { getTodos, setUser, setTheme } from "./redux/todos/todosSlice";

function App() {
  const { todoList } = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  const theme = JSON.parse(localStorage.getItem("theme"));

  const setItems = async () => {
    let person = prompt("Please enter your name");
    dispatch(setUser(person));
    dispatch(setTheme(true));
  }

  if (!user) {
    setItems()
  }

  
  useEffect(() => {
    dispatch(setUser(user));
    dispatch(setTheme(theme));
    dispatch(getTodos());
  }, [dispatch]);

  // console.log(todoList)

  theme === false
  ? (document.body.style.backgroundColor = "#c2c2c2")
  : (document.body.style.backgroundColor = "#102027")


  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "0px solid green",
        // backgroundColor: theme === false ? "#c2c2c2" : "#102027",
        transition: "0.2s ease-in-out",
      }}
    >
      
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          border: "0px solid white",
          width: "1280px",
          marginBottom: "50px",
        }}
      >

        <Header />
        <Input />
        <TodoList />

      </div>

    </div>
  );
}

export default App;
