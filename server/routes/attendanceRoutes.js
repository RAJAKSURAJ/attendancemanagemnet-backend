import express from "express";
import {
  deleteAttendanceByDays,
  enterAttendanceByrollNo,
  getAttendance,
  getAttendanceByrollNo,
} from "../controllers/attendanceController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/:roomId").get(protect, getAttendanceByrollNo);
router.route("/").post(protect, admin, enterAttendanceByrollNo);
router.route("/:days").delete(protect, admin, deleteAttendanceByDays);
router.route("/getAnalysis").post(protect, getAttendance);

export default router;
