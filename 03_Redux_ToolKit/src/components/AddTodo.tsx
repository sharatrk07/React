import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {addTodo} from '../features/todo/todoSlice' 
import { addTodo } from '../todoSlice.js';

// AddTodo: Helps to send the data to the store using useDispatch()

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  // dispatch uses the reducer to make changes in the store

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (input.trim() !== '') { // Only add todo if input is not empty
      dispatch(addTodo(input));
      
      // dispatch: used to dispatch(send) the values to the store
      // input: value of the input field.
      // addTodo: a reducer method that adds a new todo to the store.
      
      setInput('');
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out pr-10"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input && (
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
              onClick={() => setInput('')}
              title="Clear input"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg font-medium transition-colors duration-200 flex items-center justify-center"
          disabled={!input.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo;