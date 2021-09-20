import  React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function CustomizedRating({rating}) {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Rating</Typography>
            <Rating name="customized-10" defaultValue={rating} max={10} />
        </Box>
    );
}