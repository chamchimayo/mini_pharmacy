const express = require("express");
const router = express.Router();

const PhController = require('../controller/pharmacy.controller');

const phController = new PhController();


router.get('/', phController.getPharmacyList)


module.exports = router