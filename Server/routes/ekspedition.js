const ControllerExpedition = require("../Controllers/controllerEkspedition");

const router = require("express").Router();

router.get("", ControllerExpedition.get);

module.exports = router;
