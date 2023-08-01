import { addCptCode } from "../controllers/cptcode.js";
import express from "express";

const router = express.Router();


router.post("/create/cpt/code",addCptCode );

export default router;