const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const PharmacyController = require("../controller/pharmacy.controller");
const pharmacyController = new PharmacyController();

router.get("/", pharmacyController.getPharmacyList);

module.exports = router;