const ControllerPackage = require("../Controllers/controllerPackage");

const router = require("express").Router();
const package = require("./package");
const ekspedition = require("./ekspedition");

router.use("/packages", package);
router.use("/ekspeditions", ekspedition);
// router.use(errorHandler);
module.exports = router;
