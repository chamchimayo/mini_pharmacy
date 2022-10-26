const dotenv = require("dotenv");
dotenv.config(`${process.env.COOKIE_NAME}`);

const UsersService = require("../service/users.service");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = Joi.object({
  userId: Joi.string().alphanum().required(),
  nickname: Joi.string().required(),
  password: Joi.string().disallow("userId").required(),
  confirmPw: Joi.ref("password"),
  gender: Joi.number().required(),
  age: Joi.number().required(),
});

class UsersController {
  usersService = new UsersService();

  createUsers = async (req, res, next) => {
    try {
      await userSchema.validateAsync(req.body);
      if (req.headers.authorization) {
        res.status(400).send("로그인이 이미 되어있습니다");
        return;
      }

      const { userId, nickname, password, confirmPw, gender, age } = req.body;
      if (password.search(userId) > -1) {
        res
          .status(400)
          .send({ errorMessage: "비밀번호에 닉네임이 포함되어있습니다." });
        return;
      }
      if (password !== confirmPw) {
        res
          .status(400)
          .send({
            errorMessage: "비밀번호가 비밀번호 확인란과 일치하지 않습니다.",
          });
        return;
      }

      const result = await this.usersService.createUser(
        userId,
        nickname,
        password,
        confirmPw,
        gender,
        age
      );
      res.status(201).send("회원가입에 성공했습니다");
    } catch (err) {
      res.json(err.message);
    }
  };

  checkDuplicatedId = async (req, res, next) => {
    const { userId } = req.body;
    try {
      const message = await this.usersService.checkDuplicatedId(userId);
      console.log("@@@@@@@@@@@@@@", message);
      res.status(200).json({message});
    } catch (err) {
      res.json(err.message);
    }
  }

  loginUsers = async (req, res, next) => {
    const { userId, password } = req.body;
    if (req.headers.authorization) {
      res.status(400).send("이미 로그인이 되어있습니다.");
      return;
    }

    try {
      const user = await this.usersService.loginUsers(userId, password);

      res.send({
        // 토큰값 받기
        token: jwt.sign({ userId: user.userId }, `${process.env.COOKIE_NAME}`),
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  getUsersInfo = async (req, res, nex) => {
    const { userNum } = req.params;
    const getUser = await this.usersService.getUsersInfo(userNum);

    res.status(200).json({ getUser });
  };

  updateUsers = async (req, res, next) => {
    try{
      const { userNum } = req.params;
      const { nickname, password } = req.body;

      const userData = await this.usersService.updateUsers(
        userNum,
        nickname,
        password
      );

      res.status(200).json({ data: userData });
    }catch(err){
       res.status(400).send('입력정보 오류')
    }
  };

  deleteUsers = async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      await this.usersService.deleteUsers(userId, password);
      res.status(200).json("회원정보 삭제완료");
    } catch (err) {
      res.status(400).send("입력정보 오류");
    }
  };
}

module.exports = UsersController;
