import { useState } from "react";
import { useTodo } from '../Todo_Context.js'

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [message, setMessage] = useState(todo.text);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const handleEdit = () => {
    updateTodo(todo.id, { ...todo, text: message });
    setIsEditable(false);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) handleEdit();
          else setIsEditable(true);
        }}
        disabled={todo.completed}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleDelete}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;



  // todo.todo: It helps to get the todo[] from the main todo
     // find that particular row to edit by using id and first destrucure everything and replace todo with the newly given todoMsg and make editable as falsse.