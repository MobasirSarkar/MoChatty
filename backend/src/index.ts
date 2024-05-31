import express, { Response, Request } from "express";

const app = express();
const PORT = 5000;
app.get("/", (req: Request, res: Response) => {
  res.send(`The server is running`);
});

app.listen(PORT, () => {
  console.log("server is running");
});
