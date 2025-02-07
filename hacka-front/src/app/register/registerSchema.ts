// import { useMutation } from "@tanstack/react-query";

// const registerUser = async (credentials: { email: string; password: string }) => {
//     const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//     });
//     if (!response.ok) {
//         throw new Error('Ошибка при регистрации');
//     }
//     return response.json();
// };

// export const useRegister = () => {
//     return useMutation(registerUser, {
//         onSuccess: (data) => {
//             console.log('Успешная регистрация:', data);
//                 },
//         onError: (error) => {
//             console.error('Ошибка регистрации:', error);
//         },
//     });
// };