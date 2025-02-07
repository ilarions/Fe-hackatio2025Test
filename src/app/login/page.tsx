'use client'
import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from '@mui/material/Link';
import { LogButtons } from '@/components/LogButtons';
import { loginUser } from '../lib/auth/auth';
import { loginYup } from '@/app/schema/loginYup';
// import { useLogin } from './loginSchema';
import { useForm } from 'react-hook-form';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import FolderSharedIcon from "@mui/icons-material/FolderShared";


interface IProps {
  placeholder: string;
  icon: ReactNode;
  field: string;
}

export default function Page() {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: ""});

  const validateEmail = (val: string) => {
    const emailCheck = /@/;
    return emailCheck.test(val);
  };
  const validatePassword = (val: string) => {
    const passwordCheck = /^[A-Za-z0-9]+$/;
    return passwordCheck.test(val);
  };

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case "email":
        setEmail(value);
        setErrors((prev) => ({
          ...prev,
          email: validateEmail(value) ? "" : "Invalid email address",
        }));
        break;
      case "password":
        setPassword(value);
        setErrors((prev) => ({
          ...prev,
          password: validatePassword(value)
            ? ""
            : "Inccorect passwort",
        }));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      alert("Please fix the errors before submitting");
      return;
    }
    alert("Login successful");
  };
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await loginUser('email', 'password');
    } catch (error) {
      console.error('Ошибка входа:', error);
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
      <Box className='w-1/2 h-3/4 flex flex-col items-center justify-center p-10 gap-5 rounded-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
          <div className='flex flex-col items-start gap-2 justify-start mb-8'>
            <h1 className='text-4xl text-black'>Log in to your Account</h1>
            <p className='text-gray-500'>Welcome back! Choose login method:</p>
          </div>
          <LogButtons />
          <p className='text-gray-500'>-------------------- or continue with email --------------------</p>
          <TextField
            sx={{ width: '410px', borderRadius: '5px' }}
            className='margin-top-10 flex font-bold border-2 border-black'
            id="demo-helper-text-aligned outlined-basic"
            onChange={(e) => handleChange("email", e.target.value)}
            label="Email"
          />
          <FormControl sx={{ width: '410px', borderRadius: '5px' }} variant="outlined" className='bg-blue-50'>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => handleChange("password", e.target.value)}
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
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </FormControl>
          <Link underline="none" href={'/nahyi'} className='flex justify-center items-center'>Forgot Password?</Link>

          <Button onClick={() => handleLogin()}
            href='#'
            sx={{ width: '410px', borderRadius: '5px', height: '50px' }}
            className='flex font-bold bg-blue-600'
            variant="contained"
            disabled={isLoading}>
            {isLoading ? (
              "Entering..."
            ) : (
              "Log in"
            )}</Button>
        </form>


        <div className='flex flex-row justify-center gap-2'>
          <p className='text-gray-500'>Dont have an account?</p>
          <Link underline="none" href={'/register'}>Create an account</Link>
        </div>
      </Box>
      <Box className='flex w-1/2 h-screen justify-center items-center bg-blue-600'></Box>
    </div>
  )
}
