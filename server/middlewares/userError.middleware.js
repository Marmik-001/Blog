export const handleUserSignUpError = (err, request, response, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  
  
  response.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
  next();
};


