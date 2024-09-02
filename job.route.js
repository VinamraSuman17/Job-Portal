import express from "express";
import { login, logout, register, updateProfile }from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").post(isAuthenticated, getAllJobs);
router.route("/getadminsjobs").post(isAuthenticated, getAdminJobs);
router.route("/get/:id").post(isAuthenticated, getJobById);


export default router;
