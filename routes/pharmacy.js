const express = require("express");
const router = express.Router();

const PhController = require('../controller/pharmacy.controller');

const phController = new PhController();

//pharmacyList
router.get('/', phController.getPharmacyList)
router.get('/:pharmacyNum',phController.getPharmacyOne)


module.exports = router