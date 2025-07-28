import { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import { TextField, Button, Box } from '@mui/material'

function Chat() {
   return (
      <Box
         sx={{
            width: 400,
            margin: '0 auto',
            border: '1px solid #ccc',
            borderRadius: 2,
            padding: 2,
         }}
      >
         <h2>채팅</h2>
         <Box
            sx={{
               height: 300,
               overflowY: 'auto',
               border: '1px solid #ccc',
               borderRadius: 1,
               padding: 1,
               marginBottom: 2,
            }}
         ></Box>
         <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
               fullWidth
               variant="outlined"
               placeholder="메시지를 입력하세요"
               sx={{
                  marginRight: 1,
                  '& .MuiInputBase-input': {
                     padding: '8px', // 원하는 패딩 값
                  },
               }}
            />
            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
               전송
            </Button>
         </Box>
      </Box>
   )
}

export default Chat
