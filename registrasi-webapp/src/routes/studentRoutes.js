import { Router } from "express";
import { showForm, submitForm, showStudents } from "../controllers/studentController.js";

const router = Router();

// Form Input Pendaftar
router.get("/students/register", showForm);
router.post("/students/register", submitForm);

// Data Pendaftar
router.get("/students/list", showStudents);

export default router;
