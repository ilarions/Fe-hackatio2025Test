'use client'
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Button, TextField, Box } from "@mui/material";

export default function QuizForm() {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("type", data.type);
    formData.append("title", data.title);
    formData.append("description", data.description);

    if (file) {
      formData.append("mainImg", file);
    }

    data.answers.forEach((answer: string, index: number) => {
      formData.append(`answer[${index}]`, answer);
    });

    try {
      const response = await axios.post("http://localhost:9000/quiz/createquiz", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Success:", response.data);
      reset();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-6 p-10 bg-gray-100 w-full rounded-lg">
      <h2 className="text-lg font-bold">Create Quiz</h2>

      <TextField {...register("id")} label="Quiz ID" variant="outlined" required />
      <TextField {...register("type")} label="Type" variant="outlined" required />
      <TextField {...register("title")} label="Title" variant="outlined" required />
      <TextField {...register("description")} label="Description" multiline rows={3} variant="outlined" required />

      <input type="file" onChange={handleFileChange} accept="image/*" />

      <TextField {...register("answers.0")} label="Answer 1" variant="outlined" required />
      <TextField {...register("answers.1")} label="Answer 2" variant="outlined" required />
      <TextField {...register("answers.2")} label="Answer 3" variant="outlined" required />
      <TextField {...register("answers.3")} label="Answer 4" variant="outlined" required />

      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? "Creating..." : "Create Quiz"}
      </Button>
    </Box>
  );
}
