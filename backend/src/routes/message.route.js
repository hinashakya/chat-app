import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

// Get all users for sidebar (must be placed before /:id to avoid route conflict)
router.get("/users", protectRoute, getUsersForSidebar);

// Get messages with a specific user (by ID)
router.get("/chat/:id", protectRoute, getMessages);

// Send a message to a specific user (by ID)
router.post("/send/:id", protectRoute, sendMessage);

export default router;
