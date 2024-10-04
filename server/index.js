import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import dbConnection from "./utils/index.js";

dotenv.config();

// Establish a connection to the database
dbConnection();

// Define the app (treehouse) first
const app = express();

const PORT = process.env.PORT || 8801; // Change 8800 to 8801

// Set up middleware (these are like setting up tools and supplies)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Commented out route handlers (you might want to define routes in the future)
// app.use("/api", routes);
// app.use(routeNotFound);
// app.use(errorHandler);

// Finally, listen on the port (start the treehouse party!)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
