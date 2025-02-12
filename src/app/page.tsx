'use client'

import { QuizCard, IQuiz } from "./components/quizCard";
import { Stack } from "@mui/material";
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
    <Stack sx={{ margin: "110px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "1090px" }}>
      {quizzes.map((el: IQuiz) => <QuizCard img={el.img} description={el.description} title={el.title} rating={el.rating} key={el.id} />)}
    </Stack>
  )
}