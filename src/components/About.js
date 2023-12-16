import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import happy from '../media/happy1.avif';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';

function About(){
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

    const CustomBoxTwo = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: 'column',
        flex: '1',
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
    }));

    return(
        <Box>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1.25" }}>
                        <img 
                            src={happy} 
                            alt='pic' 
                            style={{objectFit:'cover', objectPosition: 'center', width:'100%', height:'100%', borderTopRightRadius:'50%', borderTopLeftRadius:'50%'}}
                        >
                        </img>
                    </Box>
                    <CustomBoxTwo>
                        <Box 
                            style={{
                                boxShadow: '0px 0px 10px rgba(0,0,0,.4)',
                                marginBottom:'20px',
                                padding:'35px 15px',
                                borderRadius:'10px'
                            }}
                        >
                            <Typography variant='h6' style={{display:'flex', alignItems:'center'}}>
                                <DraftsIcon style={{fontSize:'40px', color:'#15038a'}}/>
                                <span style={{textTransform:'capitalize', fontWeight:'900', marginLeft:'10px'}}>testimonials about us</span>.
                            </Typography>
                            <Typography variant='subtitle1'>
                                in the smallest case we always give your best, find out what other users have to say about us.
                            </Typography>
                        </Box>
                        <Box
                            style={{boxShadow: '0px 0px 10px rgba(0,0,0,.4)', marginBottom:'20px', padding:'35px 15px', borderRadius:'10px'}}
                        >
                            <MapsUgcIcon style={{fontSize:'40px', color:'#15038a'}}/>
                            <Typography variant='subtitle1'>
                                'eatly real help me to maintain food intake, is perfect for those of you who want diet or just wan make body more healthy, in addition eatly helped me to create menu that is suitable for my family'.
                            </Typography>
                            <Typography variant='subtitle1' style={{marginTop:'10px'}}>
                                <span style={{fontWeight:900, color: 'purple', fontSize:'17px'}}>godfrey mpemba</span>
                                <span style={{fontSize:'15px', display:'block'}}>developer</span>
                            </Typography>
                        </Box>
                    </CustomBoxTwo>
                </CustomBox>
            </Container>
        </Box>
    )
}
export default About;