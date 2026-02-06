import { Router } from "express";
import verifyToken from "../middleware/verify-token.js";
import * as hootControllers from "../controllers/hoots.js";

const router = Router();

router.post("/", verifyToken, hootControllers.createHoot);
router.get("/", verifyToken, hootControllers.getHoots);
router.get("/:hootId", verifyToken, hootControllers.getHoot);
router.put("/:hootId", verifyToken, hootControllers.updateHoot);
router.delete("/:hootId", verifyToken, hootControllers.deleteHoot);
router.post("/:hootId/comments", verifyToken, hootControllers.addComment);

export default router;
