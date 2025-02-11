'use client'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import { LogButtons } from '@/app/components/LogButtons';
import { registerUser } from '../lib/auth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface IRegister {
  data: any;
  name: string;
  email: string;
  password: string;
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors: formErrors }, } = useForm<IRegister>({
  });
  const router = useRouter()

  // const handleConsole = (data:any) => {
  //   registerUser(data,data.email, data.password)
  //   console.log("data");
  // }

  const handleRegister = async (data: IRegister) => {
    console.log(data);

    setIsLoading(true);
    try {
      await registerUser(data.name, data.email, data.password);
      console.log(data)
      console.log("gfgfdgdf");

      router.push('/auth/sendemail');
    } catch (error) {
      console.error('Ошибка регистрации:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className='flex flex-row items-center justify-center w-screen h-screen bg-blue-50'>
      <form onSubmit={handleSubmit(handleRegister)} className='w-1/2 h-3/4 flex flex-col items-center justify-center p-10 gap-5 rounded-lg'>
        <div className='flex flex-col items-start gap-2 justify-start mb-8'>
          <h1 className='text-4xl text-black'>Register your Account</h1>
          <p className='text-gray-500'>Welcome! Choose register method</p>
        </div>
        <LogButtons />
        <TextField
          {...register("email")}
          sx={{ width: '410px', borderRadius: '5px' }}
          className='margin-top-10 flex font-bold border-2 border-black'
          id="demo-helper-text-aligned outlined-basic"
          label="Email"
        />
        <TextField
          {...register("name")}
          sx={{ width: '410px', borderRadius: '5px' }}
          className='margin-top-10 flex font-bold border-2 border-black'
          id="demo-helper-text-aligned outlined-basic"
          label="Name"
        />
        <FormControl
          {...register("password")}
          sx={{ width: '410px', borderRadius: '5px' }} variant="outlined" className='bg-blue-50'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Link underline="none" href={'/login'} className='flex justify-center items-center'>Already have account?</Link>

        <Button
          type='submit'
          sx={{ width: '410px', borderRadius: '5px', height: '50px' }}
          className='flex font-bold bg-blue-600'
          variant="contained"
          disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}</Button>

      </form>
      <Box className='flex w-1/2 h-screen justify-center items-center bg-blue-600'></Box>
    </div>
  )
}
