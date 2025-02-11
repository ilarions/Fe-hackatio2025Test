<<<<<<< HEAD
'use client'
=======

>>>>>>> ae8e4378df3d907b3bf216c5666098277a9902aa
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

<<<<<<< HEAD
  return (
    <Stack sx={{ margin: "110px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "1090px" }}>
      {quizzes.map((el: IQuiz) => <QuizCard img={el.img} description={el.description} title={el.title} rating={el.rating} key={el.id} />)}
    </Stack>
=======


export default async function Home() {
  const res = getQuizes()
  console.log("RES: ", res)
  const {data} = res
  return (
      <div>
        <Stack sx={{ margin: "110px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "1090px" }}>
          {data?.map((el: IQuiz) => <QuizCard img={el.img} description={el.description} title={el.title} rating={el.rating} key={el.id}/>)}
        </Stack>
      </div>
>>>>>>> ae8e4378df3d907b3bf216c5666098277a9902aa
  );
}
