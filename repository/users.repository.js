const { Users } = require("../models");

class UserRepository {
  constructor(){
    this.Users = Users;
  }
  findAllUser = async (nickname) => {
    const users = await this.Users.findAll({where: {nickname}});

    return users;
  };

  createUser = async (nickname, password, salt,gender,age,address) => {
    const createUserData = await this.Users.create({
      nickname,
      password,
      salt,
      gender,
      age,
      address
    });

    return createUserData
  };
}

module.exports = UserRepository;
