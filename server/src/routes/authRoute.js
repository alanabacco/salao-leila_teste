const { Router } = require("express");
const AuthController = require("../controllers/AuthController");
const authenticator = require("../middlewares/authenticator");

const router = Router();

router.post("/clientLogin", AuthController.ClientLogin);
// router.get("/clientSession", authenticator, AuthController.getClientSession);

module.exports = router;
