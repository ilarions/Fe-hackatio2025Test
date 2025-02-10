"use client"
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import socketService from '../../../../socket'
import { useRouter } from 'next/router'
export default function Page() {

  useEffect(() => {
    socketService.connect();
    console.log('aa')
    socketService.sendMessage("start_question", { playerId: "1234" });
    socketService.onMessage("gameUpdate", (data) => {
      console.log("Received game update:", data);
    });

    return () => {
      socketService.disconnect();
    };
  }, [])
  return (
    <Box className='w-full h-screen flex flex-col p-10 items-center justify-between bg-blue-400'>
      <Box
        sx={{ borderRadius: '5px' }}
        className='bg-white w-2/3 flex flex-col items-start gap-2 justify-start p-10'>
        <h1 className='text-6xl text-black font-bold flex items-center justify-center'>Lets get started!</h1>
      </Box>
    </Box>
  )
}
