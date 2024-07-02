const ControllerPackage = require("../Controllers/controllerPackage");

const router = require("express").Router();

router.post("", ControllerPackage.create);
router.get("", ControllerPackage.get);
router.get("/reports", ControllerPackage.getReports);
router.get("/:id", ControllerPackage.getById);
router.put("/:id", ControllerPackage.update);
router.delete("/:id", ControllerPackage.delete);

module.exports = router;
