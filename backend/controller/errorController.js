require('dotenv').config();
const ErrorHandler = require('../utils/errorResponse');

const handleCastError = (err) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new ErrorHandler(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
    const value = err.keyValue;
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new ErrorHandler(message, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

  const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
};
  
const sendErrorProd = (err, res) => {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
        return res.status(err.statusCode).json({
          status: err.status,
          message: err.message,
        });

        // Programming or other unknown error: don't leak error details
    } else {
        // 1) Log error
        console.error('ERROR', err);

        // 2) Send generic message
        return res.status(500).json({
          status: 'error',
          message: 'Something unexpected happened, please try again later',
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
   if(process.env.NODE_ENV==="development") {
      let error = { ...err };
    
      if (error.name === 'CastError') error = handleCastError(error);
      if (error.code === 11000) error = handleDuplicateFieldsDB(error);
      if (error.name === 'ValidationError')
        error = handleValidationErrorDB(error);
      sendErrorDev(err, res);
   }
    else if (process.env.NODE_ENV==="production") {
      let error = { ...err };
      error.message = err.message;
  
      if (error.name === 'CastError') error = handleCastError(error);
      if (error.code === 11000) error = handleDuplicateFieldsDB(error);
      if (error.name === 'ValidationError')
        error = handleValidationErrorDB(error);
      if (error.name === 'JsonWebTokenError') error = handleJWTError();
      if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
      
      sendErrorProd(error, res);
    }
};
  