const UserRepository = require("../repository/users.repository");
const crypto = require("crypto");

class UserService {
  UserRepository = new UserRepository();
  createUser = async (nickname, password) => {
    try {
      const existsUsers = await this.UserRepository.findAllUser(nickname);
      if (existsUsers.length !== 0) {
        throw new Error("닉네임이 이미 존재합니다.");
        return;
      }

      const salt = crypto.randomBytes(32).toString("base64");
      let hashpassword = crypto
        .pbkdf2Sync(password, salt, 50, 32, "sha512")
        .toString("base64");
      password = hashpassword;
      const createUserData = await this.UserRepository.createUser(
        nickname,
        password,
        salt,
        gender,
        age,
        address
      );
      return {
        userId: createUserData.userId,
        nickname: createUserData.nickname,
        password: createUserData.password,
        createdAt: createUserData.createdAt,
        updatedAt: createUserData.updatedAt,
        salt: createUserData.salt,
        gender: createUserData.gender,
        age: createUserData.age,
        address: createUserData.address
      };
    } catch (e) {
      return res.status(400).json({ code: 400, message: e.message });
    }
  };
}


module.exports =UserService