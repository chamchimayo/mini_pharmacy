
const axios = require('axios')

const url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire'; // 전국 약국 정보찾기 API 주소
const SERVICE_KEY = "2c+Qenc7UQrjG9FeoBlJ69w3NXPIY097LOLn3sIDiTj3bRR9zW0TAcrP0fHKn4P8q12rZ2tV71o9JlYsVVEwwQ==" // 인증 디코딩 키

class PhService {

    api = async(Q0,  Q1, QT, QN, ORD, pageNo, numOfRows) => {
        let response = null;
        try {
        response = await axios.get(url,{
            params : {
                "servicekey":SERVICE_KEY,
                "Q0":Q0, // 시
                "Q1":Q1, // 구 
                "QT":QT, // 영업 시간 월~일 공휴
                "QN":QN, // 약국 이름
                "ORD":ORD, // 정렬 순서
                "pageNo": pageNo, // 페이지 갯수 
                "numOfRows": numOfRows // 페이지에 띄울 최대 갯수 
            }
        })
    } catch (err) {
        console.log(err.message)
    }
    return response;                           
} 

}
module.exports = PhService