// 'use client'
// import { Stack, Typography, List, ListItem, Paper, Button } from '@mui/material'
// import axios from "axios";
// import { useParams, useRouter } from 'next/navigation'
// import Image from 'next/image';

import {QuizDecription} from "../../components/quizDescription"

import { getQuiz } from '@/app/lib/quiz';

export default async function Page({params}) {
  // const router = useRouter()
  // const { id } = useParams();
  const quiz = await getQuiz(params.id)
  
  // const hanlderStart = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:9000/room-quest/createroom",
  //       { id_quiz: id },
  //       { withCredentials: true },
  //     )
  //     console.log(res.data.newRoom.id)
  //     router.push(`/gameblock/lobby/${res.data.newRoom.id}?token=${res.data.token}`)
  //   } catch (error) { }
  // }
  
  return <QuizDecription title={quiz.title} description={quiz.description} rating={quiz.rating} time={quiz.time}/>
}
