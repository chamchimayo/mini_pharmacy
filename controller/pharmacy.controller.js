const PharmacyService = require("../service/pharmacy.service");
const axios = require("axios");

class PharmacyController {
  pharmacyService = new PharmacyService();

  getPharmacyList = async (req, res, next) => {
    let response = null;
    let api = async () => {
      try {
        response = await this.pharmacyService.getPharmacyList(req);
      } catch (e) {
        console.log(e);
      }
      return response;
    };

    // console.log("@@@@@@@@@@@api", api);
    // async function insure(schema, id, id2, object) {
    //     const data = await schema.findOne({ id: id2 });
    //     if (!data) {
    //         console.log("No database created, creating one...");
    //         data = new schema(object).then((data) => data.save());
    //     }
    //     return data;
    // }

    await api((response) => {
      console.log("@@@@@@@@@@@response", response.data);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  };
}

module.exports = PharmacyController;
