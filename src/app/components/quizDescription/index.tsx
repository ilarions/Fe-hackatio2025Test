"use client"
 import { useParams, useRouter } from 'next/navigation'
import axios from "axios";


import { Stack, Typography, List, ListItem, Paper, Button } from '@mui/material'
// import Image from 'next/image';

interface IQuiz {
  title: string,
  description: string,
  rating: number,
  time: number,
  img: string

}

export const QuizDecription: React.FC<IQuiz> = ({ title, description, rating, time, img }) => {
      const router = useRouter()
   const { id } = useParams();
   const hanlderStart = async () => {
    console.log("suka")
     try {
       const res = await axios.post("http://localhost:9000/room-quest/createroom",
         { id_quiz: id },
       { withCredentials: true },
       )
       console.log(res.data.newRoom.id)
       router.push(`/gameblock/lobby/${res.data.newRoom.id}?token=${res.data.token}`)
     } catch (error) { }
   }

  return (
    <Paper sx={{ width: "1300px", margin: "140px auto", display: "flex", justifyContent: "space-between", alignItems: "end", padding: "20px" }} elevation={12}>
      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "row", gap: "40px" }}>
        {/* <Image src={img} alt="Quiz image" width={400} height={400} /> */}
        <img src={img} alt="image" className='w-[400px] h-[400px]'/>
        <Stack sx={{ gap: "20px" }}>
          <Typography variant='h3' fontWeight={700}>{title}</Typography>
          <Typography variant='h6' lineHeight={1.45}>{description}</Typography>
          <List>
            <ListItem>Rating: {rating}</ListItem>
            <ListItem>Time: {time}</ListItem>
          </List>
        </Stack>
      </Stack>
      <Button onClick={hanlderStart} variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", fontSize: "14px", fontWeight: "800" }}>Start</Button>
    </Paper>
  )
}
