import { useEffect } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../services/api';

export const useTodos = () => {
  const { state, dispatch } = useTodoContext();
  
  // Load todos when component mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const data = await fetchTodos();
        const formattedTodos = data.map(task => ({
          id: task.id,
          text: task.title,
          completed: task.completed
        }));
        dispatch({ type: 'SET_TODOS', payload: formattedTodos });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load todos' });
        console.error(err);
      }
    };

    loadTodos();
  }, [dispatch]);
  
  const addTodo = async (text) => {
    if (text.trim().length === 0) return;
    
    try {
      dispatch({ type: 'CLEAR_ERROR' });
      const newTask = await createTodo(text);
      dispatch({ 
        type: 'ADD_TODO', 
        payload: {
          id: newTask.id,
          text: newTask.title,
          completed: newTask.completed
        }
      });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to add todo' });
      console.error(err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      dispatch({ type: 'CLEAR_ERROR' });
      const todoToUpdate = state.todos.find(todo => todo.id === id);
      const updatedTask = await updateTodo(id, { completed: !todoToUpdate.completed });
      
      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          id: updatedTask.id,
          text: updatedTask.title,
          completed: updatedTask.completed
        }
      });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update todo' });
      console.error(err);
    }
  };

  const removeTodo = async (id) => {
    try {
      dispatch({ type: 'CLEAR_ERROR' });
      await deleteTodo(id);
      dispatch({ type: 'DELETE_TODO', payload: id });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to delete todo' });
      console.error(err);
    }
  };

  return {
    todos: state.todos,
    loading: state.loading,
    error: state.error,
    addTodo,
    toggleTodo,
    removeTodo
  };
};
