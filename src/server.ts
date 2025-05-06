import express, {Request, Response} from "express";
import { Query } from "express-serve-static-core";
import { User } from "./model/user.type";

const app = express();

export interface TypedRequestQuery<T extends Query> extends Express.Request{
  query: T;
}

app.get("/", (req, res) => {
  res.json({message:"ok"});
});

app.get("/login", (req: Request, res: Response) => {
  res.json(req.query);
});

app.get("/login2", (req: TypedRequestQuery<User>, res: Response) => {
  res.json(req.query);
});

app.listen(3000, () => console.log("sever is running"));