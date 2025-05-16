import { useState, type FormEvent } from "react";
// import { useTodo } from "../Todo_Context/Todo_Context";

import { useTodo } from '../Todo_Context.js'

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const add = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({ text, completed: false });
    setText("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;



// since we have an array, so we have to use an object to pass throught the values

// since we already defined id, so we again wont declare it and for todo, since todo name and object field name is same then react automatically takes that value directly.