const { Users } = require("../models");

class UserRepository {
  constructor(){
    this.Users = Users;
  }

  checkUsersIdDup = async (userId) => {
    return await Users.findOne({ where: { userId } });
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



  getUsersInfo = async(userNum)=>{
    const users = await Users.findByPk(userNum);
    if(users.gender === 0) {
      users.gender = '남';
    } else if(users.gender === 1) {
      users.gender = '여';
    }
    return users;
  }

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

  deleteUsers = async(userNum)=>{
    const deleteUser = await Users.destroy({where:{userNum}})
    return deleteUser
  }
}

module.exports = UserRepository;