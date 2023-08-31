const { Router } = require("express");
const SchedulesController = require("../controllers/SchedulesController");
const authenticator = require("../middlewares/authenticator");

const router = Router();

router.get("/schedules", authenticator, SchedulesController.getSchedules);
router.get(
  "/schedules/client/:id",
  authenticator,
  SchedulesController.getSchedulesByClientId
);
router.post("/schedules", authenticator, SchedulesController.createSchedule);
router.get("/schedules/:id", authenticator, SchedulesController.getScheduleById);
router.patch("/schedules/:id", authenticator, SchedulesController.updateSchedule);

module.exports = router;
