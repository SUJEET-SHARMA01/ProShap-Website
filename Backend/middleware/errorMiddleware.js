const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(next);
};

const errorHandle = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  //check mongoose bad object
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = `Resource Not Found`;
    statusCode = 404;
  }
  res.status(statusCode);
  res.json({
    message,
    stack: process.env.NODE_ENN === "production" ? "🍛" : err.stack,
  });
};
export default {notFound,errorHandle}
