const express = require("express");
const router = express.Router();

const PharmacyController = require('../controller/pharmacy.controller');

const pharmacyController = new PharmacyController();

//pharmacyList
router.post('/', pharmacyController.getPharmacyList);
router.get('/:pharmacyNum',pharmacyController.getPharmacyOne);

module.exports = router