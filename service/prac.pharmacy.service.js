const axios = require("axios");

const apiUrl = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire'; // 전국 약국 정보찾기 API 주소
const SERVICE_KEY = 'mOk9mEF6Sksn9c8fyHGP/9cv1uUCR2UvKS8TCxg2yFoI2szGva6EdeQ3vFApAWBCRRMjYEDKEj/vvXELm1geNA==' // 인증 디코딩 키

class PharmacyService {

  getPharmacyList = async (Q0, Q1, QT, QN, ORD, pageNo, numOfRows) => {
    let response = null;
    try {
      response = await axios.get(apiUrl, {
          params: {
            "serviceKey": SERVICE_KEY,
            Q0: Q0, // 시
            Q1: Q1, // 구
            QT: QT, // 영업 시간 월~일 공휴일
            QN: QN, // 약국 이름
            ORD: ORD, // 정렬 순서
            pageNo: pageNo, // 페이지 갯수
            numOfRows: numOfRows, // 페이지에 띄울 최대 갯수
          },
        }
      );
    } catch (err) {
      console.log(err.message);
    }
    return response;
  };
}

module.exports = PharmacyService;
