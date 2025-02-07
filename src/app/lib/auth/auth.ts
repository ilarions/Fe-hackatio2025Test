import apiClient from "../client/client";

export async function loginUser( email: string, password: string) {
    try {
        const response = await apiClient.post("/auth/login", { email, password });

        localStorage.setItem("accessToken", response.data.accessToken);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Ошибка при авторизации:", error);
        throw error;
    }
}

export async function registerUser(name:string, email: string, password: string) {
    try {
        const response = await apiClient.post("/auth/register", { name, email, password });
        console.log(response);

        return response.data;
    } catch (error) {
        console.error("Ошибка при регистрации:", error);
        throw error;
    }
}
