const PhService = require('../service/ph.services');


class PhController {
    constructor() {
        this.phService = new PhService();
    }
    view = async (req, res) => {        
    const { Q0, Q1, QT, QN, ORD, pageNo, numOfRows } = req.query;

    let list = await this.phService.api(Q0,  Q1, QT, QN, ORD, pageNo, numOfRows)

    res.setHeader("Access-Control-Allow-Origin","*")
    res.json(list.data.response.body)
// list.then( (response) => {
// res.setHeader("Access-Control-Allow-Origin","*")
// res.json(response.data.response.body)   
// })    
}


}
module.exports = PhController;
