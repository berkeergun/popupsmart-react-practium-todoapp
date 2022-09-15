import { createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import * as api from "../api.js";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getTodos();
      // console.log(response.data);
      return response.data;

    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
// export const getTodo = createAsyncThunk(
//   "todos/getTodo",
//   async (todo_id, { rejectWithValue }) => {
//     try {
//       const response = await api.getTodo(todo_id);
//       // console.log(response.data);
//       return response.data;

//     } catch (error) {
//       // console.log(error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, { rejectWithValue }) => {
    try {
      const response = await api.addTodo(newTodo);
      // console.log(response.data);
      return response.data;

    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todo_id, { rejectWithValue }) => {
    try {
      const response = await api.deleteTodo(todo_id);
      // console.log(response.data);
      return response.data;

    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({todo_id,newTodoData}, { rejectWithValue }) => {
    try {
      const response = await api.editTodo(todo_id,newTodoData)

      // console.log(response.data);
      // reUploadData()
      return response.data;

    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);


export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoList:[],
    todo:{},
    user:"",
    loading:false,
    theme:null,
  },
  
  reducers: {
    setUser:(state,action)=>{
      state.user=action.payload
      localStorage.setItem("profile",JSON.stringify(action.payload))
    },
    setTheme:(state,action)=>{
      state.theme=action.payload
      localStorage.setItem("theme",JSON.stringify(action.payload))
    },
  },
  extraReducers:{
    [getTodos.pending]: (state, action) => {
      if(state.todoList.length === 0){
        state.loading=true
      }
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading=false
      state.todoList= action.payload;
      // console.log(action.payload)
    },
    [getTodos.rejected]: (state, action) => {
      state.loading=false
      state.error = action.payload.message;
    },
    //-----------
    // [getTodo.pending]: (state, action) => {
    // },
    // [getTodo.fulfilled]: (state, action) => {
    //   state.todo= action.payload;
    //   console.log(action.payload)
    // },
    // [getTodo.rejected]: (state, action) => {
    //   state.error = action.payload.message;
    // },
    //-----------------------
    [addTodo.pending]: (state, action) => {},
    [addTodo.fulfilled]: (state, action) => {
      state.todoList= [...state.todoList,action.payload];
      // console.log(action.payload)
    },
    [addTodo.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    //-----------------------
    [deleteTodo.pending]: (state, action) => {},
    [deleteTodo.fulfilled]: (state, action) => {
      // console.log(action)
      state.todoList= state.todoList.filter((item) => item.id !== action.payload.id)
    },
    [deleteTodo.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    //-----------------------
    [editTodo.pending]: (state, action) => {},
    [editTodo.fulfilled]: (state, action) => {
      let a = current(state.todoList).filter((item)=> item.id !== action.payload.id)
      let b = [...a,action.payload]
      state.todoList = b.sort(function(a, b) { return a.id - b.id});
      // console.log(state.todoList)
    },
    [editTodo.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    //-----------------------
  },
});

export const { setUser,setTheme} =todosSlice.actions
export default todosSlice.reducer;