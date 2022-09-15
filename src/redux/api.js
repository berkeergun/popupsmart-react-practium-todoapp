import axios from "axios"

const API=axios.create({baseURL:"https://631e64909f946df7dc41aaac.mockapi.io"})

export const getTodos=() => API.get("/todos")
// export const getTodo=(todo_id) => API.get(`/todos/${todo_id}`)
export const addTodo=(newTodo) => API.post(`/todos`,newTodo)
export const deleteTodo=(todo_id) => API.delete(`/todos/${todo_id}`)
export const editTodo=(todo_id,newTodoData) => API.put(`/todos/${todo_id}`,newTodoData)
