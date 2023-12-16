import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import Container from '@mui/material/Container';

function Cta(){
    return(
        <Container>
            <Box 
                style={{
                    marginTop: '70px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', padding:'20px 0px', borderRadius:'20px', backgroundColor:'#15038a'}}
            >
                <FlagCircleIcon 
                    sx={{fontSize: '60px', color:'white', margin:'17px 0px'}}
                />
                <Typography 
                    variant='h5'
                    style={{fontWeight:900, fontSize:'35px', textTransform:'capitalize', color:'white', textAlign: 'center'}}
                >
                    get started with <span style={{color:'yellow'}}>eatly</span>.
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    style={{width: '50%', fontSize:'20px', textAlign:'center', color:'white'}}
                >
                    Discover news & tips for your health from experts and get the best discount by getting started.
                </Typography>
                <Button 
                    variant="contained" 
                    sx={{backgroundColor:'yellow', color:'black', textTransform:'capitalize', fontWeight:'900', marginTop:'17px'}}
                >
                    Get started
                </Button>
            </Box>
        </Container>
    )
}
export default Cta;