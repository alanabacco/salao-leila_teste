const { Router } = require("express");
const ServicesController = require("../controllers/ServicesController");

const router = Router();

router.get("/services", ServicesController.getServices);
router.get("/services/:id", ServicesController.getServiceById);
router.post("/services", ServicesController.createService);
router.patch("/services/:id", ServicesController.updateService);
router.delete("/services/:id", ServicesController.deleteService);

module.exports = router;
