import React from 'react'
import { Quest } from '@/type/quiz';
import { CardHeader, Card, Box, Typography, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
export default function QuestRedactor({ quest }: { quest: Quest[] | null }) {
  console.log(quest)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>()
  const onSubmit = (data) => { }
  return (
    <Box>
      <Button variant='contained' sx={{ bgcolor: "#362989", color: "white", padding: "10px 110px", marginTop: "10px", fontSize: "14px", fontWeight: "800" }}>add Item</Button>
      <Card sx={{ display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center", width: "750px", background: "rgba(0, 0, 0, 0.1)", }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h4' fontWeight={700}>
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "20px", marginBottom: "20px", }}>
            <Box sx={{ borderRadius: "8px", width: "370px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <TextField {...register(`description`)} label="Description" multiline rows={3} variant="outlined" required />
            </Box>
          </Box>
        </form>
      </Card>
      {quest?.map((elem) => (
        <Card key={elem.id} sx={{ display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center", width: "750px", background: "rgba(0, 0, 0, 0.1)", }}>
          <Typography variant='h4' fontWeight={700}>
            {elem.title}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "20px", marginBottom: "20px", }}>
            {elem?.answers.map((answer) => (
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

