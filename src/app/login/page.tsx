'use client'
import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import { LogButtons } from '@/components/LogButtons';
import { loginUser } from '../lib/auth';
// import { useLogin } from './loginSchema';
import { useForm } from 'react-hook-form';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { useRouter } from 'next/navigation';
import { PassButton } from '@/components/PassButton';
import { PassForm } from '@/components/PassForm';

interface IProps {
  placeholder: string;
  icon: ReactNode;
  field: string;
}

const inputs: IProps[] = [
  {
    placeholder: "Email Address",
    icon: <LocalPostOfficeOutlinedIcon sx={{ color: "white" }} />,
    field: "email",
  },
  {
    placeholder: "Password",
    icon: <LockOutlinedIcon sx={{ color: "white" }} />,
    field: "password",
  },
];

export default function Page() {
  return (
    <div className='flex flex-row items-center justify-center w-screen h-screen bg-blue-50'>
      <Box className='w-1/2 h-3/4 flex flex-col items-center justify-center p-10 gap-5 rounded-lg'>
        <PassForm />
        <div className='flex flex-row justify-center gap-2'>
          <p className='text-gray-500'>Dont have an account?</p>
          <Link underline="none" href={'/register'}>Create an account</Link>
        </div>
      </Box>
      <Box className='flex w-1/2 h-screen justify-center items-center bg-blue-600'></Box>
    </div>
  )
}
