"use client"
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import { Quiz } from '@/type/quiz';
import ChangeQuiz from '@/app/components/ChangeQuiz';
import QuestRedactor from '@/app/components/QuestRedactor';

export default function Page() {
  const [change, setChange] = useState<boolean>(false)
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const { id_quiz } = useParams();
  useEffect(() => {
    (async () => {
      const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}quiz/getone?id=${id_quiz}`)
      setQuiz(data.data)
    })()
  }, [])

  return (
    <Box sx={{ color: "black", paddingTop: "140px", display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <ChangeQuiz quiz={quiz} quiz_id={id_quiz} setQuiz={setQuiz} />
      <Box sx={{ height: "100%" }}>
        <QuestRedactor quest={quiz?.quests ?? null} />
      </Box>
    </Box>
  )
}

