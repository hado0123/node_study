import { Box, Card, CardMedia, CardContent, Typography, Button, Pagination, CircularProgress } from '@mui/material'
import Grid from '@mui/material/Grid'

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs' //날짜 시간 포맷해주는 패키지
import 'dayjs/locale/ko' // 한글 로케일 불러오기
import { useState } from 'react'

function OrderList() {
   const [startDate, setStartDate] = useState(null) // 시작날짜(포맷전)
   const [endDate, setEndDate] = useState(null) // 끝 날짜(포맷전)
   const [formattedStartDate, setFormattedStartDate] = useState('') // 시작날짜(포맷후)
   const [formattedEndDate, setFormattedEndDate] = useState('') // 끝날짜(포맷후)

   //날짜 데이터를 포맷
   const handleDateFilter = () => {
      // 시작일 또는 종료일 값이 null일 경우
      if (!startDate || !endDate) {
         alert('시작일과 종료일을 지정하세요!')
         return
      }

      console.log(`startDate: ${startDate}, endDate: ${endDate}`)

      // YYYY-MM-DD 포맷으로 변환
      setFormattedStartDate(dayjs(startDate).format('YYYY-MM-DD'))
      setFormattedEndDate(dayjs(endDate).format('YYYY-MM-DD'))
   }

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
         <Box p={2}>
            {/* 날짜 검색 */}
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap', // 화면 크기에 따라 줄바꿈
                  mb: 7,
                  mt: 5,
               }}
            >
               <DatePicker label="시작일" value={startDate} onChange={(newValue) => setStartDate(newValue)} sx={{ width: '35%' }} />
               <DatePicker label="종료일" value={endDate} onChange={(newValue) => setEndDate(newValue)} sx={{ width: '35%' }} />
               <Button variant="contained" onClick={handleDateFilter}>
                  날짜 검색
               </Button>
            </Box>
         </Box>
      </LocalizationProvider>
   )
}

export default OrderList
