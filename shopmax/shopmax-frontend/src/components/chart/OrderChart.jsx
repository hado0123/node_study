import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChartOrdersThunk } from '../../features/orderSlice'

const data = [
   {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
   },
   {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
   },
   {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
   },
   {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
   },
   {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
   },
   {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
   },
   {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
   },
]

function OrderChart() {
   const dispatch = useDispatch()
   const { loading, error } = useSelector((state) => state.order)
   const [chartData, setChartData] = useState([])

   useEffect(() => {
      dispatch(getChartOrdersThunk())
         .unwrap()
         // thunk 함수를 실행후엔 무조건 then을 실행하고 result를 통해 값이 있는 state를 가져올 수 있다
         .then((result) => {
            // result는 thunk 함수에서 return해주는 response.data
            console.log(result.orders) // order 슬라이스의 orders state값 가져옴
         })
   }, [dispatch])

   if (loading) {
      return null
   }

   if (error) {
      return (
         <Typography variant="body1" align="center" color="error" mt={2}>
            에러 발생: {error}
         </Typography>
      )
   }

   return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
               top: 30,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
         </LineChart>
      </ResponsiveContainer>
   )
}

export default OrderChart
