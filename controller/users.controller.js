const UsersService = require("../service/users.service");
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { json } = require("sequelize");

class UsersController {
  usersService = new UsersService();

  createUsers = async (req, res, next) => {
    /**
     *  @swagger
     * /customers:
     * post:
     * tag: Members
     *  description: 회원가입 기능입니다
     *  response:
     *  200:
     * description: 회원가입이 되었습니다
     */
    if (req.headers.authorization) {
      res.status(400).send("로그인이 이미 되어있습니다");
      return;
    }
    //try {
      const { userId, nickname, password, confirmPw,gender,age } = req.body;

      const result = await this.usersService.createUser(
        userId,
        nickname,
        password,
        confirmPw,
        gender,
        age   
        
      );
      res.status(200).send("회원가입에 성공했습니다");
    // } catch (err) { 
    //   res.status(400).send("가입 대실패");
    // }
  };

  getUsersInfo =async(req,res,nex)=>{
    const {userNum}=req.params;
    const getUser = await  this.usersService.getUsersInfo(userNum);
    
    res.status(200).json({getUser})
  }
  


  loginUsers = async(req,res,next)=>{
    const{userId,password}=req.body;
    if(req.headers.authrization){
      res.status(400).send('이미 로그인이 되어있습니다.');
      return;
    }try{
      const user = await this.usersService.loginUsers(userId,password);

      res.send({ // 토큰값 받기
        token: jwt.sign({ userId: user.userId }, process.env.COOKIE_NAME),
        });
    }catch(err){
      res.status(400).json({error:err.message})
    }
  }





  updateUsers = async(req,res,next)=>{
    console.log("@@@@@@@@@@@@@@@here i am")

   // try{
      const {userNum}=req.params;
      console.log("@@@@@@@@@@@@@@@",userNum)

      const {nickname,password}=req.body;
      console.log(nickname,password)
      const userData = await this.usersService.updateUsers(userNum,nickname,password)
      res.status(200).json({data:userData})
  // }catch(err){
    //    res.status(400).send('입력정보 오류')
    // }
     }

  deleteUsers=async(req,res,next)=>{
    const {userNum}=req.params;
    const deleteUser = await this.usersService.deleteUser(userNum);
    res.status(200).json("회원탈퇴 성공")
}
}


module.exports = UsersController;