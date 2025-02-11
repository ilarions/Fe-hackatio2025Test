import { QuizCard, IQuiz } from "./components/quizCard";
import { Stack } from "@mui/material";
import { getQuizes } from "./lib/quizes";

export default async function Home() {
  const res = await getQuizes()
  console.log("RES: ", res) 
  const {data} = res 
  return (
    <Stack sx={{ margin: "110px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "1090px" }}>
        {data.map((el: IQuiz) => <QuizCard img={el.img} description={el.description} title={el.title} rating={el.rating} key={el.id} id={el.id}/>)}
    </Stack>
  );
}
