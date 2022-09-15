import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./todos/todosSlice.js";

export const store = configureStore({
    reducer:{
        todos:todosSlice,
    },
})