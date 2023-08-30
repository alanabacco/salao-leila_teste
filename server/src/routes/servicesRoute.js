const { Router } = require("express");
const ServicesController = require("../controllers/ServicesController");
const authenticator = require("../middlewares/authenticator");

const router = Router();

router.get("/services", ServicesController.getServices);
router.get("/services/:id", ServicesController.getServiceById);
router.post("/services", authenticator, ServicesController.createService);
router.patch("/services/:id", authenticator, ServicesController.updateService);
router.delete("/services/:id", authenticator, ServicesController.deleteService);

module.exports = router;
