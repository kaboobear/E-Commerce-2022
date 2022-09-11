import * as ProductContoller from "../controllers/product.controller";
import { Router } from "express";

const router = Router();

router.post("/", ProductContoller.create);
router.get("/", ProductContoller.getAll);

export const productRouter = router;
