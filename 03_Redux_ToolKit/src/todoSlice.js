import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
// the above line helps to take these values and change in other components

export default todoSlice.reducer

//  the above line helps to store those changed values in the reducer
//  and the reducer is the one that is connected to the store
//  so the store will have the updated values

// store only stores the values added or changed from this todoSlice only
// store will store the state of the todoSlice at the time of the last action dispatched on this

//  For example:

//  This is the default syntax of creating a sllice in redux and here, we get the access of 2 values:
// state: returns the current state of that function,
// action:  while using the functions, it takes some values to perform an action

// slice = createSlice({
//  name: 'todo',
//  initialState,
//  reducers: {
//   addTodo: ( state, action ) => {}
//  }
// })