import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../todoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  // Function to handle edit mode activation
  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Function to save the updated todo
  const handleUpdate = () => {
    if (editText.trim() !== "" && editingId) {
      dispatch(updateTodo({ id: editingId, text: editText }));
      // Reset editing state after update
      setEditingId(null);
      setEditText("");
    }
  };

  // Function to cancel edit mode
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">My Todos</h2>
      {todos.length === 0 ? (
        <div className="bg-zinc-800 rounded p-4 text-center text-gray-300">
          No todos yet. Add one to get started!
        </div>
      ) : (
        <ul className="list-none space-y-3">
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded shadow-md transition-all"
              key={todo.id}
            >
              {editingId === todo.id ? (
                // Edit mode
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 bg-zinc-700 text-white px-3 py-1 rounded border border-zinc-600 focus:outline-none focus:border-indigo-500"
                    autoFocus
                  />
                  <div className="flex space-x-1">
                    <button
                      onClick={handleUpdate}
                      className="text-white bg-green-600 p-1 rounded hover:bg-green-700"
                      title="Save"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="text-white bg-gray-600 p-1 rounded hover:bg-gray-700"
                      title="Cancel"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                // View mode
                <div className="flex items-center flex-1 space-x-3">
                  <span className="text-white flex-1">{todo.text}</span>
                  <div className="flex space-x-1">
                    {/* Edit button */}
                    <button
                      onClick={() => handleEdit(todo)}
                      className="text-white bg-blue-500 p-1.5 rounded hover:bg-blue-600 transition-colors"
                      title="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                    {/* Delete button */}
                    <button
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      // callback function used to run when the user click on that button
                      // dispatch: used to dispatch(send) the values to the store
                      className="text-white bg-red-500 p-1.5 rounded hover:bg-red-600 transition-colors"
                      title="Delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;