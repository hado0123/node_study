const express = require('express')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
   res.send('환영합니다')
})

app.get('/error', (req, res, next) => {
   const err = new Error('에러 발생') // 강제로 에러 발생(에러가 발생했다고 가정)
   err.status = 500 // http 상태코드
   next(err) // 에러객체를 넘기고 있으므로 에러처리 미들웨어로 이동
})

// 에러처리 미들웨어
app.use((err, req, res, next) => {
   console.error('Error: ', err.message) // 에러메시지

   // 상태코드와 에러메세지를 json 객체로 클라이언트에게 전달
   res.status(err.status).json({
      error: {
         message: err.message,
      },
   })
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
