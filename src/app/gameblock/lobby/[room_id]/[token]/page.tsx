"use client"
import { Box, Button, Stack, Typography, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import socketService from '../../../../../socket'
import { useParams } from 'next/navigation';

export default function Page() {
  const [quest, setQuest] = useState<any>(null)
  const handleQuestion = (response: any) => {
    setQuest(response)
    console.log(response.answers)
  };

  const next_question = (res: any) => {
    console.log(res)
    setQuest(res.quest)
  }

  const end_quiz = (res: any) => {
    console.log("suka")
    console.log(res)
  }

  const { room_id, token } = useParams();

  useEffect(() => {
    socketService.connect();
    console.log(token)
    let get_quest = {
      token: token,
      id: room_id
    }
    console.log(get_quest)
    socketService.sendMessage("start_question", get_quest);
    socketService.onMessage("start_question", handleQuestion);
    socketService.onMessage("next_question", next_question)
    socketService.onMessage("end_quiz", end_quiz)
    socketService.onMessage("end_quiz", (data) => {
      console.log("Received game update:", data);
    });

    return () => { socketService.disconnect() };
  }, [])

  const sendNextQuestion = (id: any) => {
    console.log(id)
    console.log(token)
    const data = {
      token: token,
      id: room_id,
      answer: id
    };
    socketService.sendMessage("send_answer", data);
  };

  return (
    <Stack sx={{ width: "full", bgcolor: "#C9C4EE" }}>
      <Paper sx={{ borderRadius: '5px', width: "1200px", margin: "120px auto", padding: "20px"}}>
        {quest ?
          <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <img src={quest.img} alt="" style={{ width: "250px", height: "300px" }} />
            <Typography variant='h2'>{quest?.title}</Typography>
            <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "fit-content", gap: "20px" }}>
              {quest.answers?.map((elem: any) => <Button onClick={() => sendNextQuestion(elem.id)} variant="contained" sx={{ bgcolor: "#362989", width: "300px" }} key={elem.id}>{elem.text}</Button>)}
            </Stack>
          </Stack>

          : <h1>oops somethinggs wrong</h1>
        }
      </Paper>
    </Stack>
  )
}
