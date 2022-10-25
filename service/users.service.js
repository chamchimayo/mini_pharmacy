const UserRepository = require("../repository/users.repository");
const crypto = require("crypto");

class UserService {
  UserRepository = new UserRepository();
  
  
  
  
  createUser = async (userId, nickname, password, confirmPw, gender, age) => {
    // const existsUsers = await this.UserRepository.findAllUser(userId);
    // if (existsUsers.length !== 0) {

    //   throw new Error("이미 사용중인 아이디입니다.");
    //   return;

    // }

    // const salt = crypto.randomBytes(32).toString("base64");
    // let hashpassword = crypto
    //   .pbkdf2Sync(password, salt, 50, 32, "sha512")
    //   .toString("base64");
    // password = hashpassword;
    const result = await this.UserRepository.checkUsersIdDup(userId);
    if (result){
      throw new Error("이미 가입된 아이디입니다.")
     }else{

    const createUserData = await this.UserRepository.createUser(
      userId,
      nickname,
      password,
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
      // password: getUsersInfo.password,
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
