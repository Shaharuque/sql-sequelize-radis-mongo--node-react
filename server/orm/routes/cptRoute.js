import { addCptCode, getCptCodes } from "../controllers/cptcode.js";
import express from "express";

const router = express.Router();

router.get("/get/cpt/code",getCptCodes );
router.post("/create/cpt/code",addCptCode );

export default router;