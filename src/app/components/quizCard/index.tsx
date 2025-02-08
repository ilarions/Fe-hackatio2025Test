import { Card, CardContent, CardMedia, Typography, CardActions, Button, Stack } from "@mui/material"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

export const QuizCard = () => {
    return (
        <Card sx={{ width: "300px" }}>
            <CardMedia image="images/school.jpg" sx={{ width: "full", height: "200px" }} />
            <CardContent sx={{ gap: "40px", padding: "10px" }}>
                <Stack sx={{ gap: "10px", marginBottom: "20px" }}>
                    <Typography variant="h5" sx={{ color: "#080614", fontWeight: "600" }}>Very cool quiz</Typography>
                    <Typography sx={{ color: "#A69DE2", fontWeight: "100", fontSize: "12px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </Typography>
                </Stack>
                <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px" }}>
                    <Stack sx={{ color: "#4635B1", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "3px" }}>
                        <StarOutlinedIcon />
                        <Typography sx={{ fontSize: "15px", fontWeight:"600" }}>4.5</Typography>
                    </Stack>
                    <Button variant="contained" sx={{ bgcolor: "#362989" }}>Start</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}