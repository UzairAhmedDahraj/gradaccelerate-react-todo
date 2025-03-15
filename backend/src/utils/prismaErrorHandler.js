import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { AppError } from '../middleware/errorHandler.js';

export const handlePrismaError = (error) => {
  // Handle specific Prisma errors
  if (error instanceof PrismaClientKnownRequestError) {
    // P2025 is the error code for "Record not found"
    if (error.code === 'P2025') {
      throw new AppError('Resource not found', 404);
    }
    
    // P2002 is for unique constraint violations
    if (error.code === 'P2002') {
      throw new AppError(`A resource with this ${error.meta?.target} already exists`, 409);
    }
    
    // Handle other Prisma errors
    throw new AppError('Database operation failed', 500);
  }
  
  // If it's not a Prisma error, rethrow it
  throw error;
};
