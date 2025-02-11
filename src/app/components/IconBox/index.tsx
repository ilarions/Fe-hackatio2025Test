import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface StatBoxProps {
    icon: ReactNode;
    value: number;
    label: string;
}

export const IconBox = ({ icon, value, label }: StatBoxProps) => {
    return (
        <Box display="flex" flexDirection="row"  gap={3}>
            <Box sx={{
                backgroundColor: '#FFFFFF',
                width: '60px',
                height: '60px',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                padding: '1px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {icon}
            </Box>
            <Box className="flex flex-col">
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{value}</Typography>
                <Typography sx={{ fontSize: '15px' }}>{label}</Typography>
            </Box>
        </Box>
    );
}