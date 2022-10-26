const UserRepository = require("../repository/users.repository");
const bcrypt = require("bcrypt");

class UserService {
  UserRepository = new UserRepository();

  // 회원가입 API
  createUser = async (userId, nickname, password, confirmPw, gender, age) => {
    const result = await this.UserRepository.checkUsersIdDup(userId);
    if (result) {
      throw new Error("이미 가입된 아이디입니다.");
    } else {
      const hashedPw = bcrypt.hashSync(password, 10);

      await this.UserRepository.createUser(
        userId,
        nickname,
        hashedPw,
        confirmPw,
        gender,
        age
      );

      return;
    }
  };

  checkDuplicatedId = async (userId) => {
    const fineOneUser = await this.UserRepository.findOneUser(userId);

    if(fineOneUser) {
      return '이미 존재하는 ID입니다';
    } else {
      return '사용 가능한 ID입니다';
    }
  }

  loginUsers = async (userId, password) => {
    const findOneUser = await this.UserRepository.findOneUser(userId);
    const match = bcrypt.compareSync(password, findOneUser.password);

    if (!findOneUser || !match) {
      throw new Error("아이디 또는 패스워드를 확인해주세요.");
    } else {
      return findOneUser;
    }
  };

  getUsersInfo = async (userNum, userId, nickname, password, gender, age) => {
    const getUsersInfo = await this.UserRepository.getUsersInfo(
      userNum);

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
