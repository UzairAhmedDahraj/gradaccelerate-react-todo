import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No tasks yet. Add a new one above!
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
