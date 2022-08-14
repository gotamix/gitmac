// express 라이브러리 불러오기
const express = require('express');
const app = express();

//8080포트로 서버 띄우기 : 6만개 포트 중 8080 으로 들어오는 것 여기로.
app.listen(8080, function(){
    console.log('listening on 8080')
});

