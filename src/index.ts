import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Hello World route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
