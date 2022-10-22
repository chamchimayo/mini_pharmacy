const axios = require("axios");

class PharmacyService {
  getPharmacyList = async (req) => {
    await axios.get(
      "http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",
      {
        params: {
          serviceKey:
            "mOk9mEF6Sksn9c8fyHGP/9cv1uUCR2UvKS8TCxg2yFoI2szGva6EdeQ3vFApAWBCRRMjYEDKEj/vvXELm1geNA==",
          Q0: req.query.Q0,
          Q1: req.query.Q1,
          QT: req.query.QT,
          QN: req.query.QN,
          ORD: req.query.ORD,
          pageNo: req.query.pageNo,
          numOfRows: req.query.numOfRows,
        },
      }
    );
  };
}

module.exports = PharmacyService;
