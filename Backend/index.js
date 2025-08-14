import express from "express";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js"
import {notFound,errorHandle} from "./middleware/errorMiddleware.js"
import dotenv from "dotenv";
dotenv.config();


connectDB()
const port =process.env.PORT || 5000;
const app = express();

app.use("/api/products",ProductRoutes)
app.use(notFound)
app.use(errorHandle)

app.listen(port, () => console.log(`Server running on port ${port}`));
