import { Router } from "express";
import categoryRoute from "./categoryRoute";
import videoRoute from "./videoRoute";

const router = Router();

router.use("/category", categoryRoute);
router.use("/video", videoRoute);

export default router;
