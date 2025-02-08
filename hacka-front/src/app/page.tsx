import { QuizCard } from "./components/quizCard";
import { List, ListItem } from "@mui/material";
export default function Home() {
  return (
    <List sx={{ margin: "50px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "1090px" }}>
      <ListItem><QuizCard /></ListItem>
      <ListItem><QuizCard /></ListItem>
      <ListItem><QuizCard /></ListItem>
    </List>
  );
}
