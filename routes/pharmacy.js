const express = require("express");
const router = express.Router();

const PharmacyController = require('../controller/pharmacy.controller');

const pharmacyController = new PharmacyController();

//pharmacyList
router.get('/:pharmacyNum', pharmacyController.getPharmacyOne);
router.get('/', pharmacyController.getPharmacyList);

module.exports = router