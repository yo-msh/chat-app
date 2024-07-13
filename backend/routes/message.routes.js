import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// @desc    Get messages
router.get("/:id", protectRoute, getMessages);

// @desc    Send a message
router.post("/send/:id", protectRoute, sendMessage);

export default router;
