export type Quiz = {
  id: string;
  title: string;
  description: string;
  img: string;
  time: number;
  rating: number;
  authorId: string;
  quests: Quest[];
  questComplete: QuestComplete[];
};

export type Quest = {
  id: string;
  title: string;
  type: string;
  img: string;
  quizId: string;
  answers: any
  quizInRoomId: string[];
};

export type QuestComplete = {
  id: string;
  correctAnswer: number;
  timeStart: string;
  time: number;
  userId: string;
  quizId: string;
};
