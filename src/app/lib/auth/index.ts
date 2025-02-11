import apiClient from "../client";

export async function loginUser(email: string, password: string) {
    try {
        const response = await apiClient.post("/auth/login", { email, password });

        localStorage.setItem("accessToken", response.data.accessToken);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function registerUser(name: string, email: string, password: string) {
    try {
        console.log(name, email, password);

        const response = await apiClient.post("/auth/register", { name, email, password });
        console.log("Response", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function sendEmail() {
    try {
        const response = await apiClient.get('/auth/sendemail');
        console.log('Ответ сервера:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при отправке email:', error);
        throw error;
    }
}

export async function confirmEmail() {
    const response = await apiClient.post("auth/endregister");
    return response.data;
}

export async function logWithGoogle() {
    try {
        const response = await apiClient.get("/auth/google/login");
        console.log(response);

        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
