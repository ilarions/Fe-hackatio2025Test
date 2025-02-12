import { IRegister } from '@/app/register/page';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const ConfirmCom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<IRegister>({
  });
  const router = useRouter();
  const handleConfirm = () => {
    setIsLoading(true);
    try {
      router.push("./login")
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <form onSubmit={handleSubmit(handleConfirm)} className='w-1/2 h-3/4 flex flex-col items-center justify-center p-10 gap-5 rounded-lg'>
      <TextField
        {...register("name")}
        sx={{ width: '250px', borderRadius: '5px' }}
        className='margin-top-10 flex font-bold border-2 border-black'
        id="demo-helper-text-aligned outlined-basic"
        label="Confirm"
      />
      <Button
        type='submit'
        sx={{ width: '410px', borderRadius: '5px', height: '50px' }}
        className='flex font-bold bg-blue-600'
        variant="contained"
        disabled={isLoading}>
        {isLoading ? "Loading..." : "Confirm"}
      </Button>
    </form>
  )
}
