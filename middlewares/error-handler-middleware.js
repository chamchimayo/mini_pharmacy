module.exports = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    if (err.message === '"review" is not allowed to be empty') {
      res.status(400).json({ errormessage: "댓글 내용을 적어주세요" });
    }
    if (err.message === '"pharmacyNum" is not allowed to be empty') {
      res
        .status(400)
        .json({ errormessage: "해당 약국의 정보를 받지못했습니다" });
    }
  }
  // 에러핸들러에서 에러가 난 장소를 추적해와서 콘솔로그를 찍을 수 있을것 같은데..
  // 에러의 속성에 따른 구분을 해야한다
  return res.status(400).json({ type: err.name, error: err.message });
};
