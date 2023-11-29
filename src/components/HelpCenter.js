import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import StarsIcon from '@mui/icons-material/Stars';
import Paper from '@mui/material/Paper';

function HelpCenter(){
    return (
        <Box sx={{marginTop: '30px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ height: '480px', width: '100%', overflow: 'hidden' }}>
                        <img
                            src='eat.avif'  // Replace with the correct path to your image
                            alt='eating food'
                            style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box marginBottom='20px'>
                        <Typography variant='h5' sx={{textTransform: 'capitalize', display: 'flex', justifyContent:'start', alignItems:'center', fontWeight: '700'}}>
                            <DiamondIcon style={{fontSize:'46px', marginRight:'10px'}}/>
                            <span style={{fontSize:'35px'}}>Our value to help you.</span>
                        </Typography>
                        <Typography variant='subtitle1' sx={{textAlign:'start', fontSize:'19px'}}>
                            We always want to provide the best value for you and you health . Join us to maximize the benefits .
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Paper elevation={2}>
                                    <Box sx={{padding:'10px 16px', borderRadius:'15px'}}>
                                        <FavoriteIcon style={{fontSize:'46px'}}/>
                                        <Typography variant='h6' sx={{fontSize: '22px', fontWeight:'700'}}>
                                            Become healthier
                                        </Typography>
                                        <Typography variant='body1' sx={{fontSize:'18px'}}>
                                            Immune will stronger if the body is healthier.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper elevation={2}>
                                    <Box sx={{padding:'10px 16px', borderRadius:'15px'}}>
                                        <EnergySavingsLeafIcon style={{fontSize:'46px'}}/>
                                        <Typography variant='h6' sx={{fontSize: '22px', fontWeight:'700'}}>
                                            Increase Energy
                                        </Typography>
                                        <Typography variant='body1' sx={{fontSize:'18px'}}>
                                            Having enough energy can help carry out a routine.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper elevation={2}>
                                    <Box sx={{padding:'10px 16px', borderRadius:'15px'}}>
                                        <LocalPoliceIcon style={{fontSize:'46px'}}/>
                                        <Typography variant='h6' sx={{fontSize: '22px', fontWeight:'700'}}>
                                            Controlling Weight
                                        </Typography>
                                        <Typography variant='body1' sx={{fontSize:'18px'}}>
                                            Body will feel lighter and will not be easily tired.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper elevation={2}>
                                    <Box sx={{padding:'10px 16px', borderRadius:'15px'}}>
                                        <StarsIcon style={{fontSize:'46px'}}/>
                                        <Typography variant='h6' sx={{fontSize: '22px', fontWeight:'700'}}>
                                            Become Happier
                                        </Typography>
                                        <Typography variant='body1' sx={{fontSize:'18px'}}>
                                            Living a healthy life also increase self-confidence.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default HelpCenter;