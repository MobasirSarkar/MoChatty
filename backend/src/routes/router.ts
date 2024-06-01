import express, { Router, Response, Request } from "express";

const Express = express();
const router = Router();

router.get("", (req: Request, res: Response) => {
  res.send("server is running");
});
