// const { addTask } = require("../services/tasks/add");
// const { getOrganizationData } = require("../services/app/inital");
// const { getTasks } = require("../services/tasks/get");
// const { updateTask } = require("../services/tasks/update");

// const router = require("express").Router();

import { Router } from "express";
import getOrganizationData from "../services/app/inital.js";
import addTask from "../services/tasks/add.js";
import getTasks from "../services/tasks/get.js";

const router = Router();

router.get("/app/initial", getOrganizationData);

router.get("/user/:id/tasks", getTasks);
router.post("/user/:id/tasks", addTask);
// router.put("/user/:id/tasks/:taskId", updateTask);


export default router;