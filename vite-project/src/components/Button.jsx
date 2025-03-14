import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '', 
  fullWidth = false,
  ariaLabel
}) => {
  const baseClasses = 'py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white bg-black hover:bg-gray-800 focus:ring-black border border-transparent',
    secondary: 'text-gray-400 hover:text-gray-500',
    // Add more variants as needed
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
