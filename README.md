# ILarions Quiz

## Описание
ILarions Quiz — это платформа для прохождения викторин, созданная с использованием современных технологий. Позволяет пользователям участвовать в квизах, получать результаты и анализировать свои знания.

## Стек технологий
- **Backend**: NestJS, Prisma, MongoDB
- **Frontend**: Next.js, React
- **UI**: Tailwind CSS, MUI (Material-UI)
- **Формы**: React Hook Form

## Функционал
- Регистрация и авторизация пользователей
- Создание и прохождение квизов
- Административная панель для управления вопросами и пользователями
- Поддержка различных типов вопросов
- Подсчет результатов и статистика

## Установка и запуск
### Backend
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/username/ilarions-quiz.git
   cd ilarions-quiz
   ```
2. Установите зависимости:
   ```sh
   cd backend
   npm install
   ```
3. Настройте `.env` файл:
   ```env
   DATABASE_URL=mongodb+srv://your_mongo_url
   ```
4. Запустите сервер:
   ```sh
   npm run start
   ```

### Frontend
1. Перейдите в папку с клиентом:
   ```sh
   cd frontend
   ```
2. Установите зависимости:
   ```sh
   npm install
   ```
3. Запустите приложение:
   ```sh
   npm run dev
   ```
