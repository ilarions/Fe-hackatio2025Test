"use client"
import { Box, Button } from '@mui/material'
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
    socketService.onMessage("gameUpdate", (data) => {
      console.log("Received game update:", data);
    });

    return () => {
      socketService.disconnect();
    };
  }, [])
  const sendNextQuestion = (id) => {
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
    <Box className='w-full h-screen flex flex-col p-10 items-center justify-between bg-blue-400'>
      <Box
        sx={{ borderRadius: '5px' }}
        className='bg-white w-2/3 flex flex-col items-start gap-2 justify-start p-10'>
        {quest ?
          <div>
            <h1 className='text-6xl text-black font-bold flex items-center justify-center mt-[50px]'>{quest?.title}</h1>
            {quest.answers?.map((elem: any) => (
              <Button onClick={() => sendNextQuestion(elem.id)} variant="contained" color="success" key={elem.id}>
                {elem.text}
              </Button>

            ))}
          </div>

          : <h1>oops somethinggs wrong</h1>}
      </Box>
    </Box>
  )
}
