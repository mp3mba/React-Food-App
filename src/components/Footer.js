import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Footer(){
    return(
        <Box style={{marginTop:'60px', paddingBottom:'30px'}}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Box style={{width:'60%'}}>
                        <Typography variant='h4' style={{fontWeight:900, color:'#15038a'}}>
                            Eatly
                        </Typography>
                        <Typography variant='subtitle1' style={{fontSize:'18px'}}>
                            We have a mission to make people around the world better through a healthier diet.
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} style={{marginLeft: '17px', marginTop: '10px'}}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={3}>
                            <Typography variant='h5' style={{color:'#15038a', fontWeight:900}}>
                                About
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                About Us
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Features
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                News & blog
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Typography variant='h5' style={{color:'#15038a', fontWeight:900}}>
                                Movement
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                What Eatly
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Support Us
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Typography variant='h5' style={{color:'#15038a', fontWeight:900}}>
                                Company
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Why Eatly
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Capital
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Security
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Typography variant='h5' style={{color:'#15038a', fontWeight:900}}>
                                Support
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                FAQs
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Support Center
                            </Typography>
                            <Typography variant='h6' style={{fontSize:'14px'}}>
                                Contact Us
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Footer;