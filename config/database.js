/* database.js */
//Module Require
const mysql = require("mysql"),
  //DB 정보 선언
  dbInfo = {
    host: "210.90.136.10", //DB 주소
    port: "3306", //DB Port
    user: "pino", //DB 계정 ID
    password: "qwer1596@!", //DB 계정 PW
    database: "hyerim", //DB 내 사용 database
  },
  //pool에 DB 정보를 담아 연결한 Pool 저장
  pool = mysql.createPool(dbInfo)

//모듈화
module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn)
    }
  })
}

//npm install --save-devnodemon