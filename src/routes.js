import { Router } from "express";

import * as todolist from "./controllers/todolist";

const routes = Router();

routes.get("/", (_, res) => {
  return res.json({ ping: "pong!" });
});

routes.get("/todolist", todolist.all);
routes.get("/todolist/active", todolist.isActive);
routes.get("/todolist/completed", todolist.isCompleted);
routes.post("/todolist", todolist.create);
routes.put("/todolist/:id", todolist.edit);
routes.delete("/todolist", todolist.destroy);

export default routes;
