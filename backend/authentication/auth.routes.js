import express from "express";
import {signup} from "./auth.controller.js";
import {login} from "./auth.controller.js";
import {logout} from "./auth.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js";
import {auth_health} from "./auth.controller.js";

const router = express.Router();

// Public hits
router.post("/signup", signup);
router.post("/login" ,login);

router.get("/heath", auth_health);


// Protected hits
router.use(authMiddleware)
router.post("/logout", logout);

export default router;
