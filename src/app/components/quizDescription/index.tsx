"use client"

import { Stack, Typography, List, ListItem, Paper, Button } from '@mui/material'
import Image from 'next/image';

interface IQuiz {
    title: string,
    description: string,
    rating: number,
    time: number,
}

export const QuizDecription:React.FC<IQuiz> = ({title, description, rating, time }) => {
    return(
    <Paper sx={{ width: "1300px", margin: "140px auto", padding: "30px", display: "flex", justifyContent: "center", alignItems: "end" }} elevation={12}>
      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "row", gap: "40px" }}>
        <Image src="/images/school.jpg" alt="Quiz image" width={400} height={400} />
        <Stack sx={{ gap: "20px" }}>
          <Typography variant='h3' fontWeight={700}>{title}</Typography>
          <Typography variant='h6' lineHeight={1.45}>{description}</Typography>
          <List>
            <ListItem>Rating: {rating}</ListItem>
            <ListItem>Time: {time}</ListItem>
          </List>
        </Stack>
      </Stack>
      <Button variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", fontSize: "14px", fontWeight: "800" }}>Start</Button>
    </Paper>
    )
}