import express from "express";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudentProfile,
  getStudentByrollNo,
} from "../controllers/studentController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.route("/all").get(protect, getAllStudents);
router.route("/addStudent").post(protect, admin, addStudent);
router
  .route("/:id")
  .get(protect, getStudentById)
  .delete(protect, admin, deleteStudent)
  .put(protect, admin, updateStudentProfile);
router.route("/room/:roomId").get(getStudentByrollNo);
export default router;
