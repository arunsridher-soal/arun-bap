import Express from "express";
import { on_select } from "../controllers/index.js";
const router = Express.Router();

router.post("/on_select", on_select);

export default router;