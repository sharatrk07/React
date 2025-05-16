import { createContext, useContext } from "react";

export const Todo_Context = createContext({
  todos: [
    // Properties []
    {
      id: "1",
      todo: "Task 1",
      completed: false,
    } 
  ],
  // Functionalities, here we just define the functionalities with function name and use those in main.tsx
  addTodo: (todo) => {},
  updateTodo: ( id, todo ) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

// useContext(): It is used by defining the context
export const useTodo = () => {
  return useContext(Todo_Context);
} 

export const TodoProvider = Todo_Context.Provider