const { Router } = require("express");
const ClientsController = require("../controllers/ClientsController");

const router = Router();

router.get("/clients", ClientsController.getClients);
router.post("/clients", ClientsController.createClient);

module.exports = router;
