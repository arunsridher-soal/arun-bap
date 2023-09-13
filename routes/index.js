import Express from "express";
import { on_search } from "../controllers/index.js";
const router = Express.Router();

router.get("/", (req, res) => {
  res.send("Up & running...");
});
router.post("/on_search", on_search);

export default router;
