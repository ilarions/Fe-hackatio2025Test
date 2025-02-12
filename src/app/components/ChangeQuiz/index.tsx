"use client"
import { Quiz } from '@/type/quiz'
import React, { useState } from 'react'
import { Stack, Typography, List, ListItem, Paper, Button, TextField, Select, MenuItem } from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ChangeQuiz({ quiz, quiz_id, setQuiz }: { quiz: Quiz | null, quiz_id: any, setQuiz: React.Dispatch<React.SetStateAction<Quiz | null>> }) {
  const [changeState, setChangeState] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
  } = useForm<any>()
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("time", data.time)
    formData.append("id", quiz_id)

    if (file) {
      formData.append("mainImg", file);
    }

    console.log(data)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}quiz/changequiz`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });
      setQuiz(response.data.update_quiz)
      setChangeState(false)

    } catch (error) {
      console.error("Error:", error);
    }
  }
  const handleChanger = () => { console.log("suka"); setChangeState(!changeState) }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Paper sx={{ width: "1300px", display: "flex", justifyContent: "space-between", alignItems: "end" }} elevation={12}>

        <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "row", gap: "40px" }}>
          {changeState ?
            (< input type="file" onChange={handleFileChange} accept="image/*" />)
            :
            <img src={quiz?.img} alt="image" className='w-[400px] h-[400px]' />
          }
          <Stack sx={{ gap: "20px" }}>
            {changeState ?
              <TextField {...register("title")} label="Quiz ID" defaultValue={quiz?.title} variant="outlined" required />
              :
              <Typography variant='h3' fontWeight={700}>
                {quiz?.title}
              </Typography>
            }
            {changeState ?
              <TextField {...register("description")} label="Description" defaultValue={quiz?.description} multiline rows={3} variant="outlined" required />
              :
              <Typography variant='h6' lineHeight={1.45}>{quiz?.description}</Typography>
            }
            <List>
              <ListItem>Rating: {quiz?.rating}</ListItem>
              {changeState ? <Select {...register("time")} defaultValue="20">
                <MenuItem value="20">20 секунд</MenuItem>
                <MenuItem value="30">30 секунд</MenuItem>
                <MenuItem value="60">1 хвилина</MenuItem>
              </Select> : <ListItem>Time: {quiz?.time}</ListItem>}
            </List>
          </Stack>
        </Stack>
        {changeState ?
          <Button type='submit' variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", fontSize: "14px", fontWeight: "800" }}>complete</Button>
          : null}
        <Button onClick={() => handleChanger()} variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", fontSize: "14px", fontWeight: "800" }}>Change</Button>
      </Paper>
    </form>

  )
}

