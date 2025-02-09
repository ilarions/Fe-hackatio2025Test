import { cookies } from 'next/headers'
import { Card, CardMedia, Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";

export default async function  Page  (){
const cookieStore = await cookies();
const token = cookieStore.get('token');
console.log(token)
const response = await axios.get('http://localhost:9000/user/get', {
  headers: {
    'Cookie': `token=${token.value}`, 
    'Content-Type': 'application/json'
  },
  withCredentials: true 
});

const data = response.data;
console.log(data);
    return (
        <div className="w-screen h-screen bg-[#C8BAFB] flex  self-center justify-center">
            <Card className=" w-[90%] h-[80%] flex flex-col self-center p-6" sx={{ borderRadius: '40px', backgroundColor: '#EFEFFB' }}>
                <Box  display="flex" flexDirection="row" gap={4}>
                    <CardMedia
                        component="img"
                        className="rounded-[50px] bg-[#C8BAFB]"
                        sx={{ height: '200px', width: "200px" }}

                    />
                    <Box>
                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>
                            User Name
                        </Typography>
                        <Box className={`w-[1500px] flex justify-around ]`} display={`flex`} justifyContent={`space-around`} justifyItems={"center"}  gap={3} mt={2}>
                            <Box display="flex" flexDirection="row" justifyItems="center" gap={3} >
                                <FlagIcon
                                    className="text-[60px] text-[#4A4A4A]"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                                        padding: '1px'
                                    }}
                                />
                                <Box className={`flex flex-col `}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                        1Lev
                                    </Typography>

                                    <Typography sx={{ fontSize: '15px' }}>
                                        average level
                                    </Typography>
                                </Box>

                            </Box>
                            <Box  display="flex" flexDirection="row" gap={3} >
                                <StarIcon
                                    className=" text-[#FFD700]"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                                        padding: '1px'
                                    }}
                                />
                                <Box className={`flex flex-col`}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                        10
                                    </Typography>
                                    <Typography sx={{ fontSize: '15px' }}>
                                        star
                                    </Typography>
                                </Box>
                            </Box>
                            <Box  display="flex" flexDirection="row" gap={3}>
                                <ArrowUpwardIcon
                                    className="text-[60px] text-[#4CAF50]"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                                        padding: '1px'
                                    }}
                                />
                                <Box className={`flex flex-col`}>
                                    <Typography  sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                        8
                                    </Typography>
                                    <Typography  sx={{ fontSize: '15px' }}>
                                        Highest level
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={`flex flex-row h-full gap-4`}>
                    <Box className={`flex justify-center items-center self-center  `}  sx={{ borderRadius: '40px', backgroundColor: 'white', height:'100%', width:"60%" }}>
                        achivments
                    </Box>
                    <Box className={`w-[40%]`}>
                        <Box  sx={{ borderRadius: '40px', backgroundColor: 'white', height:'20%', width:"100%" }}>
                            my quizes
                        </Box>
                        <Box  sx={{ borderRadius: '40px', backgroundColor: 'white', height:'20%', width:"100%" }}>
                            favorite quizes
                        </Box>
                    </Box>
                </Box>
            </Card>
        </div>
    );
}
