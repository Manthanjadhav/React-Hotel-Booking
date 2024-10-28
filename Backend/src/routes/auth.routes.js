import express from "express";
import { login } from "../controllers/userController.js";
import { check } from "express-validator";

const router = express.Router();

const loginValidation = [
  check("email", "Invalid email format").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({ min: 6 }),
];

router.post("/login", loginValidation, login);

export default router;
