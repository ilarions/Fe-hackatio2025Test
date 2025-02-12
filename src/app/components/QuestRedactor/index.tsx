import React, { useState } from 'react'
import { Quest } from '@/type/quiz';
import { CardHeader, Card, Box, Typography, Button, TextField, Select, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function QuestRedactor({ quest, id_quiz }: { quest: Quest[] | null, id_quiz: any }) {
  const [stateCreate, setStateCreate] = useState<boolean>(false)
  console.log(quest)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>()
  const handlerChangerStateCreate = () => setStateCreate(!stateCreate)
  const onSubmit = async (data: any) => {
    console.log(data)
    const formData = new FormData()
    formData.append("title", data.title);
    formData.append("type", "");
    formData.append("id", id_quiz);

    const obj1 = {
      text: data.answer1,
      isCorrect: JSON.parse(data.correct1)
    }
    const obj2 = {
      text: data.answer2,
      isCorrect: JSON.parse(data.correct2)
    }
    const obj3 = {
      text: data.answer3,
      isCorrect: JSON.parse(data.correct3)
    }
    formData.append("answer[]", JSON.stringify((obj1)));
    formData.append("answer[]", JSON.stringify((obj2)));
    formData.append("answer[]", JSON.stringify((obj3)));

    if (file) {
      formData.append("mainImg", file);
    }
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}quest/createquest `, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });
    } catch (e) {
      console.log(e)
    }
  }
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <Box>
      <Button onClick={handlerChangerStateCreate} variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", marginTop: "10px", fontSize: "14px", fontWeight: "800" }}>add Item</Button>
      {stateCreate ? <Card sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "20px", alignItems: "center", width: "750px", height: "auto", background: "rgba(0, 0, 0, 0.1)", }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="file" onChange={handleFileChange} accept="image/*" />
          <TextField {...register("title")} label="Title" variant="outlined" required />

          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "start", gap: "10px", marginTop: "20px", marginBottom: "20px", width: "750px", height: "auto" }}>
            <Box sx={{ borderRadius: "8px", width: "370px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <TextField {...register("answer1")} label="Title" variant="outlined" required />
              <Select {...register("correct1")} defaultValue="false">
                <MenuItem value='true'>true</MenuItem>
                <MenuItem value="false`">false</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "start", gap: "10px", marginTop: "20px", marginBottom: "20px", width: "750px", height: "auto" }}>
            <Box sx={{ borderRadius: "8px", width: "370px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <TextField {...register("answer2")} label="Title" variant="outlined" required />
              <Select {...register("correct2")} defaultValue="false">
                <MenuItem value='true'>true</MenuItem>
                <MenuItem value="false`">false</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "start", gap: "10px", marginTop: "20px", marginBottom: "20px", width: "750px", height: "auto" }}>
            <Box sx={{ borderRadius: "8px", width: "370px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <TextField {...register("answer3")} label="Title" variant="outlined" required />
              <Select {...register("correct3")} defaultValue="false">
                <MenuItem value='true'>true</MenuItem>
                <MenuItem value="false`">false</MenuItem>
              </Select>
            </Box>
          </Box>
          <Button type='submit' variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", marginTop: "10px", fontSize: "14px", fontWeight: "800" }}>add Item</Button>

        </form>
      </Card> : null}
      {quest?.map((elem) => (
        <Card key={elem.id} sx={{ display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center", width: "750px", background: "rgba(0, 0, 0, 0.1)", }}>
          <Typography variant='h4' fontWeight={700}>
            {elem.title}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "20px", marginBottom: "20px", }}>
            {elem?.answers?.map((answer: any) => (
              <Box key={answer.id} sx={{ borderRadius: "8px", background: answer.isCorrect ? "#5ce65c" : "#ff7081", width: "370px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Typography variant='h5' color='white' fontWeight={700}>
                  {answer.text}
                </Typography>

              </Box>
            ))}
          </Box>
        </Card>))}

    </Box>

  )
}

