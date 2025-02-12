"use client"
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Stack } from "@mui/material";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useState, useEffect } from "react";
import { QuizCardSkeleton } from "./quizCardSkeleton";

export interface IQuiz {
  img: string,
  description: string,
  title: string,
  rating: number,
  id?: string
}

export const QuizCard: React.FC<IQuiz> = ({ img, description, title, rating }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2000) }, []);
  if (loading) { return <QuizCardSkeleton /> }

  return (
    <Card sx={{ width: "300px", '&:hover': { boxShadow: "0 5px 1px 5px rgba(0,0,0,0.2)", transform: "translateY(-5px)", transition: ".3s ease-in-out" } }}>














    </Card>
  )
}
