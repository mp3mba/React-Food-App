import * as React from 'react';
import Ad from './Ads'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HeroSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant='h1' gutterBottom sx={{color:'white', fontWeight: 500, textTransform:'capitalize'}}>
                changing your <span style={{ color: 'yellow' }}>eating</span> habits
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color: 'white', fontSize: '26px'}}>
                Always take care of your health starting from the food menu that you consume everyday
            </Typography>
            <Box width='100%' sx={{display: 'flex', justifyContent: 'space-between'}}>   
            <Box>
                <Button variant="contained" sx={{backgroundColor: 'yellow', color: 'black'}}>Explore Menu</Button>
            </Box>     
            <Box>            
                <Typography color ='white' sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <PlayCircleFilledWhiteIcon sx={{fontSize: '50px'}}/> <span style={{fontSize: '20px'}}>watch video</span>
                </Typography>
            </Box>        
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', borderRadius: '10px'}}>
            <Box sx={{borderRadius:'30%', height:'91%', display: {xs: 'none', md: 'block'} }}>
                <img 
                  src='https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww' 
                  alt='picture'
                  style={{width: '100%', height: '100%', borderRadius: '30%', objectFit:'cover', objectPosition:'center'}} /
                >
            </Box>
            <Box sx={{height:'100%', width: '100%', display: {xs: 'block', md: 'none'} }}>
                <img 
                  src='https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww' 
                  alt='picture'
                  style={{width: '100%', height: '100%', objectFit:'cover', objectPosition:'center'}} /
                >
            </Box>
        </Grid>
      </Grid>
      <Box marginTop='20px'>
        <Ad></Ad>
      </Box>
    </Box>
  );
}
