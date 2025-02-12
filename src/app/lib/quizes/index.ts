import apiClient from "../client";

export async function getQuizes() {
    try {
      const response = await apiClient.get("/quiz/get");  
      return response.data;
    } catch (error) {
      console.error("ERROR", error);
      throw error;
    }
  }
  