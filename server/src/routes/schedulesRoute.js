const { Router } = require("express");
const SchedulesController = require("../controllers/SchedulesController");
const authenticator = require("../middlewares/authenticator");

const router = Router();

router.get("/schedules", authenticator, SchedulesController.getSchedules);
router.post("/schedules", authenticator, SchedulesController.createSchedule);

module.exports = router;
