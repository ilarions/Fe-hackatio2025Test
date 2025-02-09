
import { QuizCard, IQuiz } from "./components/quizCard";
import { Stack } from "@mui/material";
import { getQuizes } from "./lib/quiz";



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
  );
}
