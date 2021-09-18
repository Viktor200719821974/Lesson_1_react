import  React from 'react';
import './MenNav.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';

export default function SimpleBottomNavigation() {

    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500}}>
            <BottomNavigation
                className={'root'}
                showLabels
                value={value}
                style={{backgroundColor: '#2d313a'}}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}

            >
                <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{color: "white"}} label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction style={{color: "white"}} label="Favorites" icon={<FavoriteIcon />} />

            </BottomNavigation>
        </Box>
    );
}