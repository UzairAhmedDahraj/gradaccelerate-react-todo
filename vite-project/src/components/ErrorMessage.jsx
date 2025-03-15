import React from 'react';

const ErrorMessage = ({ message, onDismiss }) => {
  if (!message) return null;
  
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 mx-4">
      <div className="flex">
        <div className="flex-1">
          <p className="text-red-700">{message}</p>
        </div>
        {onDismiss && (
          <button 
            onClick={onDismiss} 
            className="text-red-500"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
