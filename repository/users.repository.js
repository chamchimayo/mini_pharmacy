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
}

module.exports = UserRepository;
