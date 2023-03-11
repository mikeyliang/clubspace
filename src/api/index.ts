import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();

const port = process.env.PORT;
import userRouter from "./routes/user.route";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

app.use("/user", userRouter);

/* Error handler middleware */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
