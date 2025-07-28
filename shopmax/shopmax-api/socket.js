const { Server } = require('socket.io')
const passport = require('passport')

module.exports = (server, sessionMiddleware) => {
   // Socket.IO 서버 생성
   const io = new Server(server, {
      // 소켓에서 별도로 cors 설정: Socket.IO와 Express의 cors 설정방식이 다르므로
      cors: {
         origin: process.env.FRONTEND_APP_URL, // 클라이언트의 허용 url
         methods: ['GET', 'POST'], // 허용된 http 메서드, 다른 메서드(put, delete, patch)는 차단(클라이언트가 delete 요청을 보내 데이터가 삭제되는 상황을 방지)
         credentials: true, // 세션 사용을 위해 인증 정보(쿠키 등) 허용
      },
   })

   // 소켓의 연결
   io.on('connection', (socket) => {
      const user = {
         id: 1,
         name: '김철수',
         email: 'test@test.com',
      }

      console.log('사용자 연결됨: ', user?.id) // 연결된 사용자의 id 출력

      // 클라이언트에서 'user info' 이벤트 요청시 사용자 정보를 모든 클라이언트에게 전송
      socket.on('user info', (msg) => {
         if (msg) {
            socket.emit('user info', user) // 모든 클라이언트로 사용자 정보 전송
         }
      })

      // 클라이언트에서 'chat messge' 이벤트 요청시 사용자 정보를 모든 클라이언트에게 전송
      socket.on('chat message', (msg) => {
         io.emit('chat message', { user: user?.name, message: msg })
      })

      // 클라이언트가 연결 해제 요청시 소켓과의 연결 해제
      socket.on('disconnect', () => {
         console.log('사용자 연결 해제:', user?.id) // 연결 해제된 사용자의 id출력
         return socket.disconnect()
      })
   })

   return io
}
