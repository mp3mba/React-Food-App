import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EggIcon from '@mui/icons-material/Egg';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Container from '@mui/material/Container';

function Program() {
    return (
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
            <Box marginBottom='20px' sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h4" gutterBottom style={{textTransform: 'capitalize', fontWeight: 700}}>
                    our best programs
                </Typography>
            </Box>
            
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Grid container alignItems='center' justifyContent="center" spacing={2} sx={{borderRadius: '15px', padding: '30px 0px', backgroundColor: '#15038a'}}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', color:'white'}}>
                            <EggIcon style={{textAlign: 'center', width: '100%', fontSize: '40px'}}/>
                            <Typography variant='h5' sx={{textAlign: 'center', textTransform:'capitalize'}}>
                                health recipe
                            </Typography>
                            <Typography variant='subtitle1' sx={{textAlign: 'center'}}>
                                Healthier recipes, from & nutrition experts.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', color:'#e1e3e1'}}>
                            <FastfoodIcon style={{textAlign: 'center', width: '100%', fontSize: '40px'}}/>
                            <Typography variant='h5' sx={{textTransform:'capitalize', textAlign: 'center'}}>
                                health meals
                            </Typography>
                            <Typography variant='subtitle1' sx={{textAlign: 'center'}}>
                                Learn how to become a meal-planning pro.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', color:'#e1e3e1'}}>
                            <RestaurantIcon style={{textAlign: 'center', width: '100%', fontSize: '40px'}}/>
                            <Typography variant='h5' sx={{textTransform:'capitalize', textAlign: 'center'}}>
                                healthy eating
                            </Typography>
                            <Typography variant='subtitle1' sx={{textAlign: 'center'}}>
                                Eat healthy with our expert & inspiration tips.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', color:'#e1e3e1'}}>
                            <HealthAndSafetyIcon style={{textAlign: 'center', width: '100%', fontSize: '40px'}}/>
                            <Typography variant='h5' sx={{textTransform:'capitalize', textAlign: 'center'}}>
                                healthy life
                            </Typography>
                            <Typography variant='subtitle1' sx={{textAlign: 'center'}}>
                                Your life is in your choice. Make your life healthier.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        
    )
}
export default Program;