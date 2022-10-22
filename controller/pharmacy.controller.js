const PhService = require('../service/pharmacy.services');


class PhController {
    constructor() {
        this.phService = new PhService();
    }
    getPharmacyList = async (req, res) => {        
    try {
        const { Q0, Q1, QT, QN, ORD, pageNo, numOfRows } = req.query;

        let list = await this.phService.findAll(Q0,  Q1, QT, QN, ORD, pageNo, numOfRows)
    
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(list.data.response.body)
    
    } catch(err) {
        next(err);
    }   
}

    getPharmacyOne = async(req,res) => {
    
        try {
            const { pharmacyNum } = req.params;
            
        let pharmacy = await this.phService.findOne(pharmacyNum)

        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(pharmacy.data.response.body.items)
        } catch (err) {
            next(err);
        }
              
        }



// list.then( (response) => {
// res.setHeader("Access-Control-Allow-Origin","*")
// res.json(response.data.response.body)   
// })    
}
module.exports = PhController;
