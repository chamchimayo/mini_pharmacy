const UserRepository = require("../repository/users.repository");
const crypto = require("crypto");

class UserService {
  UserRepository = new UserRepository();
  createUser = async (userId,nickname, password,confirmPw,gender,age) => {
  
      const existsUsers = await this.UserRepository.findAllUser(userId);
      if (existsUsers.length !== 0) {
        throw new Error("이미 사용중인 아이디입니다.");
        return;
      }

      // const salt = crypto.randomBytes(32).toString("base64");
      // let hashpassword = crypto
      //   .pbkdf2Sync(password, salt, 50, 32, "sha512")
      //   .toString("base64");
      // password = hashpassword;
      const createUserData = await this.UserRepository.createUser(
        userId,
        nickname,
        password,
        confirmPw,
        gender,
        age
      
      );
     return;
    
     
    
  };
}


module.exports =UserService