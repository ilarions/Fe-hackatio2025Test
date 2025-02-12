# Virtual Quest Platform

## Project Description

A virtual platform for creating, customizing, and completing quests with interactive tasks. The platform is designed for interactive learning, entertainment, and team building. Users can create quests, add multimedia elements (text, photos, videos), complete quests, receive ratings, and use gamification features to earn rewards.

---

## Core Functional Requirements

### Registration and Authorization
- Registration via email or social networks.
- Creating a profile with an avatar, name, and quest history.

### Quest Creation
- Users can create new quests by specifying the title, description, number of tasks, and time limits.
- Adding multimedia elements (text, photos, videos) to tasks.

### Quest Completion
- Interface for completing quests with an interactive task map.
- Timer for tasks with time limits.

### Rating and Feedback System
- Quest authors' rating system.
- Quest evaluation by participants.

---

## Tech Stack

### Backend
- **Nest.js**: Framework for building scalable and efficient server-side applications on Node.js.
- **Prisma**: ORM for database interaction, providing type safety and a convenient API for queries.
- **WebSocket**: Used for real-time interactivity (e.g., chat during quest completion).

### Frontend
- **Next.js**: Framework for building React applications with support for SSR (Server-Side Rendering) and static generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid development of responsive interfaces.
- **Material-UI (MUI)**: Component library for React, providing ready-to-use UI elements in Material Design style.

---

## Local Setup

**Frontend**
```
git clone https://github.com/ilarions/Fe-hackatio2025Test.git
```
```
cd /Fe-hackatio2025Test
```
```
npm install
```
```
npm run dev
```
**Backend**
```
git clone https://github.com/ilarions/BE-hacaktion2025test.git
```
```
cd BE-hacaktion2025test
```
```
npm install
```
```
npx prisma generate
```
```
npm run start:dev
```

## Hosting

### backend
https://be-hacaktion2025test.onrender.com/

*Wait 10 minutes for the backend to function correctly.*

### frontend

https://fe-hackatio2025-test.vercel.app/

---

## Future Plans
**Rewards**:  Users will be able to earn badges displayed on their profiles, as well as other rewards.

---

## Authors

https://github.com/MaxOstapets

https://github.com/talafarael

https://github.com/stasik23

https://github.com/qwertythome