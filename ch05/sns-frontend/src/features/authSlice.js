import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUser } from '../api/snsApi'

// 회원가입
export const registerUserThunk = createAsyncThunk('auth/registerUser', async (userData) => {
   // userData: 회원가입 정보
   const response = await registerUser(userData)
   return response.data.user
})

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: null, // 사용자 정보 객체
      isAuthenticated: false, // 로그인 상태(true: 로그인, false: 로그아웃)
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {},
})

export default authSlice.reducer
