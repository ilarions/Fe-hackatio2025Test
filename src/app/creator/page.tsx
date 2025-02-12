'use client'
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Button, TextField, Box, MenuItem, Select, } from "@mui/material";
import { useParams, useRouter, useSearchParams } from 'next/navigation'

export default function QuizForm() {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("time", data.time)

    if (file) {
      formData.append("mainImg", file);
    }

    console.log(data)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}quiz/createquiz`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });
      if (response.data.id) {
        router.push(`/redactor/${response.data.id}`)
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-6 p-10 bg-gray-100 w-full  h-[100%] rounded-lg">
      <h2 className="text-lg font-bold">Create Quiz</h2>

      <TextField {...register("title")} label="Title" variant="outlined" required />
      <TextField {...register("description")} label="Description" multiline rows={3} variant="outlined" required />
      <Select {...register("time")} defaultValue="20">
        <MenuItem value="20">20 секунд</MenuItem>
        <MenuItem value="30">30 секунд</MenuItem>
        <MenuItem value="60">1 хвилина</MenuItem>
      </Select>

      <input type="file" onChange={handleFileChange} accept="image/*" />

      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? "Creating..." : "Create Quiz"}
      </Button>
    </Box>
  );
}
