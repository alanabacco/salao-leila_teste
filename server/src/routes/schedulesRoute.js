const { Router } = require("express");
const SchedulesController = require("../controllers/SchedulesController");

const router = Router();

router.get("/schedules", SchedulesController.getSchedules);
router.post("/schedules", SchedulesController.createSchedule);

module.exports = router;
