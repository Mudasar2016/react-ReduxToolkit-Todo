import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
           state.todos =  state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload));
        }
    }
})

export const { addTodo, updateTodo, deleteTodo } = TodoSlice.actions

export default TodoSlice.reducer