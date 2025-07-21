const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const router = express.Router()

// 회원가입
router.post('/join', async (req, res, next) => {
   try {
      const { email, name, address, password } = req.body

      // 이메일로 기존 사용자 검색
      // select * from users where email = ? LIMIT 1;
      const exUser = await User.findOne({
         where: { email },
      })

      // 이미 사용자가 존재할 경우 409 상태코드와 메세지를 json 객체로 전달
      if (exUser) {
         const error = new Error('이미 존재하는 사용자입니다.')
         error.status = 409 // Conflict
         return next(error) // 에러 미들웨어로 이동
      }

      // 이메일 중복 확인을 통과시 새로운 사용자 계정 생성

      // 비밀번호 암호화
      const hash = await bcrypt.hash(password, 12) // 12: salt(해시 암호화를 진행시 추가되는 임의의 데이터 주로 10 ~ 12 정도의 값이 권장됨)

      // 새로운 사용자 생성
      const newUser = await User.create({
         email,
         name,
         password: hash,
         role: 'USER',
         address,
      })

      res.status(201).json({
         success: true,
         message: '사용자가 성공적으로 등록되었습니다.',
         user: {
            id: newUser.id,
            name: newUser.name,
            role: newUser.role,
         },
      })
   } catch (error) {
      // 에러발생시 미들웨어로 전달
      error.status = 500
      error.message = '회원가입 중 오류가 발생했습니다.'
      next(error)
   }
})

module.exports = router
