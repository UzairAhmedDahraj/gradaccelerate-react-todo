import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-b border-gray-200">
      <div className="flex">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 rounded-l border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
