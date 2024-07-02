const ControllerEkspedition = require("../Controllers/controllerEkspedition");

const router = require("express").Router();

router.get("", ControllerEkspedition.get);

module.exports = router;
