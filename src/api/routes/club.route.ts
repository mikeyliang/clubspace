import { Router } from "express";
const router = Router();
import clubController from "../controllers/club.controller";

/* GET Request */
router.get("/club", clubController.get);
router.get("/user/:id", clubController.getClubById);

/* POST Request */
router.post("/club", clubController.create);

/* PUT Request */
router.post("/club/:id", clubController.update);

export default router;