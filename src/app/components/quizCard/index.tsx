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
      <CardMedia image={img} sx={{ width: "full", height: "200px" }} />
      <CardContent sx={{}}>
        <Stack sx={{ gap: "10px", marginBottom: "20px" }}>
          <Typography variant="h5" sx={{ color: "#080614", fontWeight: "600" }}>{title}</Typography>
          <Typography sx={{ color: "#A69DE2", fontWeight: "100", fontSize: "12px" }}>{description}</Typography>
        </Stack>
        <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px" }}>
          <Stack sx={{ color: "#4635B1", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "3px" }}>
            <StarOutlinedIcon />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>{rating}</Typography>
          </Stack>
          <Button variant="contained" sx={{ bgcolor: "#362989" }}>Start</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
