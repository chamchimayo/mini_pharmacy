const UserRepository = require("../repository/users.repository");
const bcrypt = require("bcrypt");

class UserService {
  userRepository = new UserRepository();

  // 회원가입 API
  createUser = async (userId, nickname, password, confirmPw, gender, age) => {
    const result = await this.userRepository.checkUsersIdDup(userId);
    if (result) {
      throw new Error("이미 가입된 아이디입니다.");
    } else {
      const hashedPw = bcrypt.hashSync(password, 10);

      await this.userRepository.createUser(
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

    const fineOneUser = await this.userRepository.findOneUser(userId);


    if(fineOneUser) {
      throw new Error('이미 존재하는 ID입니다');
    } else {
      return '사용 가능한 ID입니다';
    }
  }

  loginUsers = async (userId, password) => {
    const findOneUser = await this.userRepository.findOneUser(userId);
    if(findOneUser){
      const match = bcrypt.compareSync(password, findOneUser.password);

      if (!match) {
        throw new Error("아이디 또는 패스워드를 확인해주세요.");
      } else {
        return findOneUser;
      }
    } else {
      throw new Error("아이디 또는 패스워드를 다시 확인해주세요.");
    }
  };

    


    

  getUsersInfo = async (userId) => {
    const findOneUserById = await this.userRepository.findOneUser(userId);
    const getUsersInfo = await this.userRepository.getUsersInfo(
      findOneUserById.userNum);

    return {
      userNum: getUsersInfo.userNum,
      userId: getUsersInfo.userId,
      nickname: getUsersInfo.nickname,
      password: getUsersInfo.password,
      gender: getUsersInfo.gender,
      age: getUsersInfo.age,
    };
  };

  updateUser = async (userNum,userId,nickname) => {

    const findOneUserById = await this.userRepository.findOneUser(userId);
    if(findOneUserById){
      if(findOneUserById.userNum === userNum) {
        const [User] = await this.userRepository.updateUser(
          userNum,
            userId,
            nickname
        );
        if(User){
          return "닉네임 수정 완료";
        } else {
          throw new Error("에러로 인해 수정 실패")
        }        
      } else {
        throw new Error("수정 권한이 없습니다")
      }
    } else {
      throw new Error("권한이 없습니다")
    }  
  };

  deleteUser = async (userNum,userId) => {
    const findOneUserById = await this.userRepository.findOneUser(userId);
    if(findOneUserById) {
      if(findOneUserById.userNum === userNum){
        const deleteUsers = await this.userRepository.deleteUser(userNum,userId);
        if(deleteUsers){
          return "회원탈퇴를 완료 하였습니다"
        } else {
          throw new Error("에러로 인해 삭제 실패")
        }
      } else {
        throw new Error("삭제 권한이 없습니다")
      }
    } else {
      throw new Error("권한이 없습니다")
    }
  };
}

module.exports = UserService;
