import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Allow all origins if CORS_ORIGIN is not set
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Hello World route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "hi deb" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
