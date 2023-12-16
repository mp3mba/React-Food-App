import * as React from 'react';
// import Ad from '../Ads'
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Navbar from './Navbar/Navbar';
import { styled } from '@mui/system';
// import { makeStyles } from '@material-ui/cores/styles';
import Container from '@mui/material/Container';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function HeroSection() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to bottom right, purple, yellow)', minHeight: '80vh' }}>
      <Container>
        <Navbar />
        <CustomBox sx={{ paddingBottom: '30px'}}>
            <Box sx={{ flex: '1' }}>
              <Typography 
                variant='h1' 
                sx={{
                  color:'white',
                  fontWeight: 500,
                  textTransform:'capitalize'
                }}>
                  changing your <span style={{ color: 'yellow' }}>eating</span> habits
              </Typography>
              <Typography 
                variant="subtitle1" 
                gutterBottom 
                sx={{color: 'white', fontSize: '26px'}}
              >
                  Always take care of your health starting from the food menu that you consume everyday
              </Typography>
              <Box 
                width='100%' 
                sx={{
                  display: 'flex', 
                  justifyContent: 'space-between'
                  }}
                >   
              <Box>
                  <Button 
                    variant="contained" 
                    sx={{
                      backgroundColor: 'yellow',
                      color: 'black'
                    }}
                  >
                    Explore Menu
                  </Button>
              </Box>     
              <Box>            
                  <Typography 
                    color ='white' 
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                      <PlayCircleFilledWhiteIcon sx={{fontSize: '50px'}}/> <span style={{fontSize: '20px'}}>watch video</span>
                  </Typography>
              </Box>        
              </Box>
            </Box>
            <Box sx={{flex: '1.25', display: {xs: 'none', md: 'block'}}}>
                  <img
                    src='https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww' 
                    alt='foodWithCoke'
                    style={{maxWidth: '100%', objectFit:'cover', objectPosition:'center',  borderRadius: '30%'}}
                  />
              </Box>
              <Box sx={{height:'100%', width: '100%', display: {xs: 'block', md: 'none'} }}>
                  <img 
                    src='https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww' 
                    alt='foodWithCoke'
                    style={{width: '100%', height: '100%', objectFit:'cover', objectPosition:'center', borderRadius: '20%'}} /
                  >
              </Box>
        </CustomBox>
     
      </Container>
    </Box>
  );
}
