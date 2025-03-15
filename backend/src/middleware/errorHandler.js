export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Determine status code
  let statusCode = err.statusCode || 500;
  
  // Create error response object
  const response = {
    error: true,
    message: err.message || 'Server Error',
  };
  
  // Add stack trace in development mode
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }
  
  res.status(statusCode).json(response);
};

// Custom error class to be used throughout the application
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
