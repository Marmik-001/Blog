export const handleUserSignUpError = (err, request, response, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  // console.log(request.body);

  response.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
  next();
};


