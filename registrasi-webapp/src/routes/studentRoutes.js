import { Router } from "express";
import { showForm, submitForm } from "../controllers/studentController.js";

const router = Router();

router.get("/students/register", showForm);
router.post("/students/register", submitForm);

export default router;
