import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Stack, Pagination, Select, MenuItem, FormControl, InputLabel, IconButton, Typography, Link } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import dayjs from 'dayjs'

import { Link as RouterLink, useNavigate } from 'react-router-dom'

function ItemList() {
   return (
      <Box sx={{ p: 4 }}>
         {/* 등록버튼 */}
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <RouterLink to="/items/create">
               <Button variant="contained">상품등록</Button>
            </RouterLink>
         </Box>

         {/* 테이블 */}

         {/* 페이징 */}

         {/* 검색 및 필터 */}
      </Box>
   )
}

export default ItemList
