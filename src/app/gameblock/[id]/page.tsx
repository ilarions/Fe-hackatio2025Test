import { Box, Button } from '@mui/material'
import React from 'react'

export default function Page() {
    return (
        <Box className='w-full h-screen flex flex-col p-10 items-center justify-between bg-blue-400'>
            <Box
                sx={{ borderRadius: '5px' }}
                className='bg-white w-2/3 flex flex-col items-start gap-2 justify-start p-10'>
                <h1 className='text-6xl text-black font-bold flex items-center justify-center'>Lets get started!</h1>
            </Box>
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
