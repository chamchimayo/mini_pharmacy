const UserRepository = require("../repository/users.repository");
const bcrypt = require('bcrypt')

class UserService {
  UserRepository = new UserRepository();
 
  
  
  //회원가입

  createUser = async (userId, nickname, password, confirmPw, gender, age) => {
    
    const result = await this.UserRepository.checkUsersIdDup(userId);
    if (result){
      throw new Error("이미 가입된 아이디입니다.")
     }else{
      const hashed = await bcrypt.hash(password,10);

    const createUserData = await this.UserRepository.createUser(
      userId,
      nickname,
      hashed,
      confirmPw,
      gender,
      age
    );
    


    return;
     }
  };
  
  


  loginUsers = async (userId, password) => {
    const loginUsers = await this.UserRepository.loginUsers(userId, password);

    if (!loginUsers || password !== loginUsers.password) {
      throw new Error("닉네임 또는 패스워드를 확인해주세요.");
    }
    return loginUsers;
  };

  getUsersInfo = async (userNum, userId, nickname, password, gender, age) => {
    const getUsersInfo = await this.UserRepository.getUsersInfo(
      userNum
      //  userId,
      //  nickname,
      //  password,
      //  gender,
      //  age
    );
    return {
      userNum: getUsersInfo.userNum,
      userId: getUsersInfo.userId,
      nickname: getUsersInfo.nickname,
      password: getUsersInfo.password,
      gender: getUsersInfo.gender,
      age: getUsersInfo.age,
    };
  };

  updateUsers = async (userNum, nickname, password) => {
    const User = await this.UserRepository.updateUsers(
      userNum,
      nickname,
      password
    );
    return {
      userNum: User.null,
      nickname: User.nickname,
      password: User.password,
      createdAt: User.createdAt,
      updatedAt: User.updatedAt,
    };
  };
  deleteUser = async (userNum) => {
    const deleteUsers = await this.UserRepository.deleteUsers(userNum);
    return deleteUsers;
  };
}


module.exports = UserService;
