const PharmacyService = require("../service/prac.pharmacy.service");
const axios = require("axios");

class PharmacyController {
  pharmacyService = new PharmacyService();

  getPharmacyList = async (req, res) => {
    const { Q0, Q1, QT, QN, ORD, pageNo, numOfRows } = req.query;
    console.log("@@@@@@@@@@", Q0);
    let list = await this.pharmacyService.getPharmacyList(Q0, Q1, QT, QN, ORD, pageNo, numOfRows);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(list.data.response.body);
  };
}

module.exports = PharmacyController;
