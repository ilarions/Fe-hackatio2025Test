import React, { useState } from 'react'
import { LogButtons } from '../LogButtons'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from '@mui/material'
import { loginUser, registerUser } from '@/app/lib/auth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const PassForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors: formErrors }, reset } = useForm({
    });
    const router = useRouter();
    const handleRegister = async () => {
        setIsLoading(true);
        try {
            await registerUser('name', 'email', 'password');
        } catch (error) {
            console.error('Ошибка входа:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (data: any) => {
        setIsLoading(true);
        try {
            await loginUser(data.email, data.password);
            console.log('Успешный вход:', data);

            router.push('/');
        } catch (error) {
            console.error('Ошибка входа:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmitHandler = (data: any) => {
        console.log(data);

        handleLogin(data);
        reset();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-start gap-2 justify-start mb-8'>
                <h1 className='text-4xl text-black'>Log in to your Account</h1>
                <p className='text-gray-500'>Welcome back! Choose login method:</p>
            </div>
            <LogButtons />
            <p className='text-gray-500'>-------------------- or continue with email --------------------</p>
            <TextField
                {...register("email")}
                sx={{ width: '410px', borderRadius: '5px' }}
                className='margin-top-10 flex font-bold border-2 border-black'
                id="demo-helper-text-aligned outlined-basic"
                label="Email"
            />
            <FormControl sx={{ width: '410px', borderRadius: '5px' }} variant="outlined" className='bg-blue-50'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    {...register("password")}
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
            <Link underline="none" href={'/nahyi'} className='flex justify-center items-center'>Forgot Password?</Link>

            <Button
                type="submit"
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
    )
}
