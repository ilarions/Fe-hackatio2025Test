// import axios from "axios";
// import { useParams, useRouter } from 'next/navigation'
import { QuizDecription } from '@/app/components/quizDescription';
import { getQuiz } from '@/app/lib/quiz';

export default async function Page({ params }: { params: any }) {
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

  return <QuizDecription title={quiz.title} description={quiz.description} rating={quiz.rating} time={quiz.time} img={quiz.img}/>
}
