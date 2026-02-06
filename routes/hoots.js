import { Router } from "express";
import verifyToken from "../middleware/verify-token.js";

const router = Router()

router.post("/", verifyToken)
router.get("/", verifyToken)
router.get("/:hootId", verifyToken)
router.put("/:hootId", verifyToken,)
router.delete("/:hootId", verifyToken)
router.post("/", verifyToken)


export default router