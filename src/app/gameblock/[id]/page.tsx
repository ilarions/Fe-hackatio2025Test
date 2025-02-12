import axios from "axios";
import { QuizDecription } from '@/app/components/quizDescription';
import { getQuiz } from '@/app/lib/quiz';

export default async function Page({ params }: { params: any }) {

  const quiz = await getQuiz(params.id)

return <QuizDecription  title={quiz.title} description={quiz.description} time={quiz.time} img={quiz.img} />;

}
