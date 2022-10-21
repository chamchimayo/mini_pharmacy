const SignupService = require("../service/users.service");
const Joi = require('joi');

class SignupController {
  SignupService = new SignupService();

  SignupUser = async (req, res, next) => {
    try{
    const { nickname, password, confirm } = req.body;
    const schema = Joi.object({
      nickname: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      password: Joi.string().min(3).required(),
      confirm: Joi.ref("password"),
    });
    
    await schema.validateAsync(req.body);
    await this.SignupService.createUser(
        nickname,
        password,
        confirm
      );
      res.status(201).json({ message: "회원가입이 완료되었습니다." });
    }catch(e){
        return res.status(400).json({code:400, message: e.message})
    }
  };
}
module.exports = SignupController;