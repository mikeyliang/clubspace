import { Router } from "express";
const router = Router();
import userRoutes from "../controllers/user.controller";

/* GET Request */
router.get("/", userRoutes.get);
router.get("/:id", userRoutes.get);

/* POST Request */
router.post("/", userRoutes.create);

/* PUT Request */
router.post("/:id", userRoutes.update);

export default router;
