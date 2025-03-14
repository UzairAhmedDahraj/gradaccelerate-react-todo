import React from 'react';
import TodoInput from './TodoInput';
import Button from './Button';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-gray-200">
      <TodoInput 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task..." 
      />
      <div className="mt-2">
        <Button 
          type="submit" 
          variant="primary"
          fullWidth
        >
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
