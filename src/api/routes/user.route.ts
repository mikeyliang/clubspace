import { Router } from "express";
const router = Router();
import userController from "../controllers/user.controller";

/* GET Request */
router.get("/user", userController.get);
router.get("/user/:id", userController.get);

/* POST Request */
router.post("/user", userController.create);

/* PUT Request */
router.post("/user/:id", userController.update);

export default router;
