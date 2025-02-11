import { Card, CardMedia, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {IconBox} from '../IconBox/index';
import {QuestCompleteList} from '../QuestCompleteList/index';
import {QuizList} from "../QuizList/index";
import RaynGosling from "../../../../public/images/Ryan-Gosling.jpg";


interface UserProfileProps {
    data: {
        iconImg?: string;
        name?: string;
        userRating?: number;
        yourQuiz?: { title?: string }[];
    };
}


export default function UserProfile({ data }: UserProfileProps) {
    return (
        <div className="w-screen h-screen bg-[#C8BAFB] flex justify-center items-center">
            <Card className="w-[90%] h-[80%] flex flex-col gap-6 p-6" sx={{ borderRadius: '40px', backgroundColor: '#EFEFFB' }}>
                <Box display="flex" flexDirection="row" gap={4}>
                    <CardMedia
                        component="img"
                        className="rounded-[50px] bg-[#C8BAFB]"
                        sx={{ height: '200px', width: '200px' }}
                        image={data.iconImg || `${RaynGosling.src}`}
                    />
                    <Box className={`w-full`}>
                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>
                            {data.name || 'User Name'}
                        </Typography>
                        <Box className="flex justify-around w-full" gap={3} mt={2}>
                            <IconBox icon={<StarIcon className="text-[#FFD700]" />} value={data.userRating || 0} label="My Rating" />
                            <IconBox icon={<StarIcon className="text-[#FFD700]" />} value={data.yourQuiz?.length || 0} label="Quiz Rating" />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex flex-row h-full gap-4">
                    <Box className="flex justify-center items-center self-center bg-white w-[60%] h-full" sx={{ borderRadius: '40px' }}>
                        Achievements
                    </Box>
                    <Box className="w-[40%] flex flex-col gap-2">
                        <Box className="bg-white w-full h-[50%] flex flex-col justify-center items-center" sx={{ borderRadius: '40px' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>My Quizzes</Typography>
                            <QuizList quizzes={data.yourQuiz} />
                        </Box>
                        <Box className="bg-white w-full h-[50%] flex flex-col justify-center items-center" sx={{ borderRadius: '40px' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Complete Quizzes</Typography>
                            <QuestCompleteList quizzes={data.yourQuiz} />
                        </Box>
                    </Box>
                </Box>
            </Card>
        </div>
    );
}