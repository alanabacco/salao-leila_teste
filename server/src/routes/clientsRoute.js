const { Router } = require("express");
const ClientsController = require("../controllers/ClientsController");
const authenticator = require("../middlewares/authenticator");

const router = Router();

router.get("/clients", authenticator, ClientsController.getClients);
router.post("/clients", ClientsController.createClient);

module.exports = router;
