'use client'

import { QuizCard, IQuiz } from "./components/quizCard";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getQuizes } from "./lib/quizes";

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

  return (
    <Stack sx={{ margin: "110px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "fit-content", gap: "50px" }}>
      {quizzes.map((el: IQuiz) => <QuizCard img={el.img} description={el.description} title={el.title} rating={el.rating} key={el.id} id={el.id}/>)}
    </Stack>
  )
}

