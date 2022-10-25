const PharmacyService = require("../service/pharmacy.service");

class PharmacyController {
  constructor() {
    this.pharmacyService = new PharmacyService();
  }

  getPharmacyList = async (req, res, next) => {
    try {
      const { Q0, Q1, QT, QN, ORD, pageNo, numOfRows } = req.query;

      let list = await this.pharmacyService.findAll(
        Q0,
        Q1,
        QT,
        QN,
        ORD,
        pageNo,
        numOfRows
      );

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(list.data.response.body);
    } catch (err) {
      next(err);
    }
  };

  getPharmacyOne = async (req, res) => {
    try {
      const { pharmacyNum } = req.params;

      let pharmacy = await this.pharmacyService.findOne(pharmacyNum);
      console.log("@@@@@@@@", pharmacy.data.response);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(pharmacy.data.response.body.items);
    } catch (err) {
      res.send(err);
    }
  };
}

module.exports = PharmacyController;

