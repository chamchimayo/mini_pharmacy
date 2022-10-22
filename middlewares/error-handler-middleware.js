module.exports = (err, req, res, next) => {

        // 에러핸들러에서 에러가 난 장소를 추적해와서 콘솔로그를 찍을 수 있을것 같은데..
        // 에러의 속성에 따른 구분을 해야한다
     
        return res.status(400).json({ error: err.message });
    }
