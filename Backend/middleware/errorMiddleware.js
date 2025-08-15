// middleware/errorMiddleware.js

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // pass the error to the next middleware
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Handle Mongoose bad ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource Not Found";
    res.status(404);
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🍛" : err.stack,
  });
};

export default { notFound, errorHandler };
