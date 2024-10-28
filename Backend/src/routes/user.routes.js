import express from "express";
import { register } from "../controllers/userController.js";
import { check } from "express-validator";

const router = express.Router();

const registerValidation = [
  check("email", "Invalid email format").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({ min: 6 }),
  check("firstName", "First name is required").notEmpty(),
  check("lastName", "Last name is required").notEmpty(),
];

router.post("/register", registerValidation, register);

export default router;
