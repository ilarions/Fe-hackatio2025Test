'use client'

import { QuizCard, IQuiz } from "./components/quizCard";
import { Box, Stack } from "@mui/material";
import { getQuizes } from "./lib/quiz";
import { useEffect, useState } from "react";

export default function Home() {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getQuizes();
        setQuizzes(res.data);
      } catch (error) {
        console.error("Помилка отримання квізів:", error);
      }
    }

    fetchData();
  }, [])

  // const { data } = res

  return (
    <Box sx={{
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    }}>

      <Stack
        sx={{
          paddingTop: "110px",
          justifyContent: "center",
          alignItems: "center",
          width: "90vw",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {quizzes.map((el: IQuiz) => <QuizCard img={el.img} description={el.description} title={el.title} rating={el.rating} key={el.id} />)}
      </Stack>
    </Box>

  )
}
