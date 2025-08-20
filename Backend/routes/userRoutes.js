import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,  // 👈 add this
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

// Register + Get All Users
router.route('/')
  .post(registerUser)
  .get(getUsers);

// Login & Logout
router.post('/login', authUser);
router.post('/logout', logoutUser);

// Profile (logged-in user only)
router.route("/profile")
  .get(getUserProfile)
  .put(updateUserProfile);   // ✅ correct function

// User by ID (admin use)
router.route("/:id")
  .get(getUserById)
  .delete(deleteUser)
  .put(updateUser);

export default router;
