import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="border-b border-gray-200 last:border-b-0">
      <div className="flex items-center px-4 py-3">
        <input
          type="checkbox"
          className="h-5 w-5 text-blue-600 rounded"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span 
          className={`flex-1 ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
        >
          {todo.text}
        </span>
        <button 
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Delete todo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
