const express = require("express");
const router = express.Router();

const PhController = require('../controller/ph.controller');

const phController = new PhController();


router.get('/', phController.view)


module.exports = router