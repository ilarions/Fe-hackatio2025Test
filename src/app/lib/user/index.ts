import apiClient from "../client";

export async function getProfile() {
    try {

        const response = await apiClient.get("/user/get");
        console.log(response);

        return response.data;
    } catch (error) {
        console.error("ERROR", error);
        throw error;
    }
}
