import apiClient from "../client";

export async function getQuiz(id: string) {
  try {
    const response = await apiClient.get(`/quiz/getone?id=${id}`);
    console.log("QUIZ: ", response.data)
    return response.data;
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
}
