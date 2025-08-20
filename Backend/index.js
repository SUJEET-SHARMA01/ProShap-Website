import express from "express";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import errorMiddleware from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/products", ProductRoutes);
app.use("/api/users", userRoutes);
// 404 middleware
// Error handler middleware
app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

app.listen(port, () =>
  console.log(`🚀 Server running on port ${port}`)
);
