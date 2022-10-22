const { Users } = require("../models");

class UserRepository {
  constructor(){
    this.Users = Users;
  }
  findAllUser = async (nickname) => {
    const users = await this.Users.findAll({where: {nickname}});

    return users;
  };

  createUser = async (userId, nickname, password, confirmPw,gender,age) => {
    const createUserData = await this.Users.create({
      userId,
      nickname,
      password,
      confirmPw,
      gender,
      age
    });

    return createUserData
  };
  loginUsers = async(userId,password)=>{
    const loginUsers = await Users.findOne({
      where:{userId,password},
    })
    return loginUsers
  }

  updateUsers = async(userNum,nickname,password)=>{
    const updateUser = await Users.update({nickname,password},{where:{userNum}})

      return updateUser
     
  }
}

module.exports = UserRepository;
