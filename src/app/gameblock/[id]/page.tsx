'use client'
import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import axios from "axios";
import { useParams, useRouter, useSearchParams } from 'next/navigation'


export default function Page() {
  const router = useRouter()
  const { id } = useParams();
  const hanlderStart = async () => {

    try {
      const res = await axios.post("http://localhost:9000/room-quest/createroom",
        { id_quiz: id },
        {
          withCredentials: true,
        },
      )
      console.log(res.data.newRoom.id)

      router.push(`/gameblock/lobby/${res.data.newRoom.id}/${res.data.token}`)
    } catch (error) { }
  }
  return (
    <Box className='w-full h-screen flex flex-col p-10 items-center justify-between bg-blue-400'>
      <Box
        sx={{ borderRadius: '5px' }}
        className='bg-white w-2/3 flex flex-col items-start gap-2 justify-start p-10'>
        <h1 className='text-6xl text-black font-bold flex items-center justify-center'>Lets get started!</h1>
      </Box>
      <Button className='bg-blue-200' onClick={hanlderStart} variant="contained">start</Button>

      <Box className='w-full flex justify-center'>
        <Box className='w-1/2 h-1/3 grid grid-cols-2 gap-5'>
          <Button className='bg-blue-200' variant="contained">Contained</Button>
          <Button className='bg-blue-200' variant="contained">Contained</Button>
          <Button className='bg-blue-200' variant="contained">Contained</Button>
          <Button className='bg-blue-200' variant="contained">Contained</Button>
        </Box>
      </Box>
    </Box>
  )
}
