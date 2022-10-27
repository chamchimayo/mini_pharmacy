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

  findOneUser = async(userId)=>{
    const findOneUser = await Users.findOne({
      where:{userId},
    })
    return findOneUser;
  }

  updateUser = async(userNum,userId,nickname)=>{
    const updateUser = await Users.update({nickname},{where:{userNum,userId}})

    return updateUser
  }

  deleteUser = async(userNum,userId)=>{
    const deleteUser = await Users.destroy({where:{userNum,userId}})
    return deleteUser
  }
}

module.exports = UserRepository;