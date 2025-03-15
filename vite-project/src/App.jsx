import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoLayout from './layouts/TodoLayout';

function App() {
  return (
    <TodoProvider>
      <TodoLayout />
    </TodoProvider>
  );
}

export default App;
