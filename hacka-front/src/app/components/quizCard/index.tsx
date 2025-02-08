import { Card, CardContent, CardMedia, Typography, CardActions, Button, IconButton, Stack } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const QuizCard = () => {
    return (
        <Card sx={{ width: "300px" }}>
            <CardMedia image="images/school.jpg" sx={{ width: "full", height: "200px" }} />
            <CardContent sx={{ gap: "40px", padding:"10px"}}>
                <Stack sx={{gap:"10px", marginBottom:"20px"}}>
                    <Typography variant="h5" sx={{ color: "#080614", fontWeight: "600" }}>Very cool quiz</Typography>
                    <Typography sx={{ color: "#A69DE2", fontWeight: "100", fontSize: "12px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to 
                    </Typography>
                </Stack>
                <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding:"0px" }}>
                    <IconButton><FavoriteBorderOutlinedIcon sx={{color:"#4635B1"}}/></IconButton>
                    <Button variant="contained" sx={{ bgcolor: "#362989" }}>Start</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}