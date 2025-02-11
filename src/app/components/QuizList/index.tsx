import { Box, Typography, Paper, CardMedia } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import deadpool from '../../../../public/images/Sigma.jpg'

interface QuizListProps {
    quizzes?: { id: string; title?: string; description?: string; img?: string; rating?: number; time?: number }[];
}

export const QuizList=({ quizzes }: QuizListProps)=> {

    return (
        <Box
            className="flex flex-col w-full px-4 overflow-auto"
            sx={{
                maxHeight: '300px',
                borderRadius: '10px',
                padding: '8px',
                backgroundColor: '#F5F5F5',
                boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            {quizzes?.length ? (
                quizzes.map((quiz) => (
                    <Paper
                        key={quiz.id}
                        elevation={3}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            marginY: '6px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '10px',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#EFEFEF',
                                transform: 'scale(1.02)',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={quiz.img || `${deadpool.src}`}
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '8px',
                                marginRight: '10px',
                            }}
                        />
                        <Box>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{quiz.title || 'Untitled Quiz'}</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#777' }}>{quiz.description || 'No description'}</Typography>
                            <Box display="flex" alignItems="center" gap={1}>
                                <StarIcon sx={{ fontSize: '16px', color: '#FFD700' }} />
                                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>{quiz.rating || 0}</Typography>
                                <Typography sx={{ fontSize: '14px', color: '#777' }}>{quiz.time} min</Typography>
                            </Box>
                        </Box>
                    </Paper>
                ))
            ) : (
                <Typography sx={{ fontSize: '16px', color: '#777', textAlign: 'center', padding: '10px' }}>
                    No quizzes available
                </Typography>
            )}
        </Box>
    );
}
