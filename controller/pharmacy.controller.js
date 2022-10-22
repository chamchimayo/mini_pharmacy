const PharmacyService = require("../service/pharmacy.service")

class PharmacyController {
    pharmacyService = new PharmacyService();

    getPharmacyList = async (req, res, next) => {
        let api = async () => {
            let response = null;
            try {
                response = await pharmacyService.getPharmacyList();
            } catch(e) {
                console.log(e);
            }
            return response;
        }
        console.log("@@@@@@@@@@@@@api", api);

        async function insure(schema, id, id2, object) {
            const data = await schema.findOne({ id: id2 });
            if (!data) {
            console.log("No database created, creating one...");
            data = new schema(object).then((data) => data.save());
            }
            return data;
            }
            
        api.then((response) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.json(response.data.response.body);
        });
    };
}

module.exports = PharmacyController;