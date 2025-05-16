import "./Index.css";
import { TodoProvider } from "./components/Todo_Context/Todo_Context.js";
import TodoForm from "./components/Todo_Context/components/TodoForm";
import TodoItem from "./components/Todo_Context/components/TodoItem";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface todoDetails {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

function App() {
  // todos: It contains the list of all todos
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: todoDetails["addTodo"] = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo: todoDetails["updateTodo"] = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo: todoDetails["deleteTodo"] = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodo: todoDetails["toggleTodo"] = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // 2nd part: Local Storage

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    const todosFromStorage: Todo[] = stored ? JSON.parse(stored) : [];
    if (todosFromStorage.length > 0) {
      setTodos(todosFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;


// ✅ Context API:
// Context API is a built-in feature in React that allows you to create a global state or values
// that can be accessed by any component in the component tree without passing props manually at every level.
// This helps avoid "prop drilling" (passing props from parent to child to grandchild, etc.).

// Usage Steps:
// 1. Create a Context using `React.createContext()`.
// 2. Wrap your app (or part of it) with the Context Provider and pass in the value you want to share.
// 3. Use `useContext(YourContext)` in any component that needs to consume the shared value.

// ✅ React Redux:
// React Redux is the official React binding for Redux. It allows React components to read data from a Redux store
// and dispatch actions to update the store.
// React Redux provides hooks like `useSelector()` to access state and `useDispatch()` to send actions.

// Usage Steps:
// 1. Create your Redux store and reducer.
// 2. Wrap your React app with the `<Provider store={store}>` to make the store accessible.
// 3. Use `useSelector()` to read data from the store.
// 4. Use `useDispatch()` to send actions to the reducer.

// ✅ Redux Toolkit (RTK):
// Redux Toolkit is the official, recommended way to write Redux logic. It simplifies the setup and code structure
// by providing utilities like `createSlice`, `configureStore`, and built-in support for immutable updates and thunk.
// It reduces boilerplate code and makes Redux easier to use, especially in large-scale apps.

// Usage Steps:
// 1. Define your state and reducers using `createSlice()`.
// 2. Create the Redux store using `configureStore()` and pass in your slice reducers.
// 3. Use `useSelector()` and `useDispatch()` from React Redux to interact with the store.
// 4. RTK also supports async logic through `createAsyncThunk()`.

// STEPS ...,
// userContext: Create the store createStore()
// userContextProvider: Stores the values

//  const { setUser } = useContext(UserContext): used to send the data to the store
// const { user } =  useContext(UserContext): used to fetch the data from the store

  // ✅ Local Storage:
  // Local Storage is a browser API for storing key/value pairs in a persistent way.
  // Data is saved as strings and remains across page reloads and browser restarts.

  // Usage Steps:
  // 1. Convert complex data (objects, arrays) to a JSON string before saving.
  // 2. Save the string under a descriptive key with `localStorage.setItem(key, value)`.
  // 3. Retrieve the string later with `localStorage.getItem(key)`.
  // 4. If the key doesn’t exist, `getItem` returns `null` — handle this case.
  // 5. Parse the retrieved JSON string back into your desired format with `JSON.parse()`.
  // 6. To update data, modify your JS object/array, re-stringify, and call `setItem` again.
  // 7. To remove a specific entry, use `localStorage.removeItem(key)`.
  // 8. To clear all entries, use `localStorage.clear()`.