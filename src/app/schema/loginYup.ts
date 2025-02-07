import * as yup from 'yup';
export const loginYup = async (credentials: { email: string; password: string }) => {
    const loginSchema = yup.object({
        email: yup.string().email('Некорректный email').required('Email обязателен'),
        password: yup.string().required('Пароль обязателен'),
    });
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        throw new Error('Ошибка при входе');
    }
    return response.json();
};