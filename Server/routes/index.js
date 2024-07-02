const ControllerPackage = require("../Controllers/controllerPackage");

const router = require("express").Router();

router.post("/packages", ControllerPackage.create);
router.get("/packages", ControllerPackage.get);
router.get("/packages/:id", ControllerPackage.getById);
router.put("/packages/:id", ControllerPackage.update);
router.delete("/packages/:id", ControllerPackage.delete);
router.get("/reports", ControllerPackage.getReports);
// router.use(errorHandler);
module.exports = router;
