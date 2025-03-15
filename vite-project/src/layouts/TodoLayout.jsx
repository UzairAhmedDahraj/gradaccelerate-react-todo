import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ErrorMessage from '../components/ErrorMessage';
import { useTodos } from '../hooks/useTodos';
import { useTodoContext } from '../context/TodoContext';

const TodoLayout = () => {
  const { todos, loading, error, addTodo, toggleTodo, removeTodo } = useTodos();
  const { dispatch } = useTodoContext();

  const clearError = () => dispatch({ type: 'CLEAR_ERROR' });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">GAPTASK</h1>
        </div>
        
        <ErrorMessage message={error} onDismiss={clearError} />
        <TodoForm addTodo={addTodo} />
        
        {loading ? (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading tasks...</p>
          </div>
        ) : (
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={removeTodo} />
        )}
      </div>
      
      <div className="text-center mt-8 text-sm text-gray-500 font-medium">
        Made By Uzair Ahmed Dahraj | Day 4 Frontend | Day 5 Backend
      </div>
    </div>
  );
};

export default TodoLayout;
