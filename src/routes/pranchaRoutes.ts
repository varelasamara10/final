import express from "express";
import PranchaController from "../controllers/PranchaController";

const router = express.Router();

router.get("/pranchas", PranchaController.getPranchas);
router.post("/pranchas", PranchaController.createPrancha);

export default router;
