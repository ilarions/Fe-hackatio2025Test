import { logWithGoogle } from '@/app/lib/auth'
import { Box, Button } from '@mui/material'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { redirect } from 'next/navigation'

export const LogButtons = () => {

  const handelLogin = () => {
    redirect("http://localhost:9000/auth/google/login")
  }
  return (
    <Box
      className="flex flex-row gap-3 mb-3">
      <Button
        onClick={() => handelLogin()}
        variant="outlined"
        className="w-full flex items-center justify-center gap-2 border-black border-2 bg-clue"
        sx={{
          textTransform: "none",
          color: "#333",
          fontWeight: "bold",
          width: '200px',
          height: '50px',
          borderRadius: '5px'
        }}
      >
        <FcGoogle className="text-xl" />
        Google
      </Button>
    </Box>
  )
}
