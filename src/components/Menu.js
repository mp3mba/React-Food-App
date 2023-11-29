import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpaIcon from '@mui/icons-material/Spa';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';

function Menu(){
    return (
        <Box style={{marginTop:'40px'}}>
            <Box sx={{width: '50%'}}>
                <Typography variant='h4' sx={{display:'flex', alignItems:'center'}}>
                    <SummarizeIcon style={{fontSize:'43px', color: '#15038a'}}/>
                    <span style={{fontSize:'28px', fontWeight:'800', textTransform:'capitalize'}}>Try our health menu.</span>
                </Typography>
                <Typography variant='subtitle1' sx={{fontSize: '18px'}}>
                    We provide a variety of healthy recipes that has been accurate by our best nutritionist for you.
                </Typography>
            </Box>
            <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box style={{borderRadius: '10px', padding: '10px', width: '70%', boxShadow: '0px 0px 10px rgba(0,0,0,.4)', margin:'15px 0px'}}>
                        <Typography sx={{display:'flex', alignItems:'center'}}>
                            <AccessTimeIcon style={{fontSize: '35px', marginRight:'10px', color: '#15038a'}} />
                            <span style={{fontWeight: 800}}>Breakfast Recipes.</span>
                        </Typography>
                    </Box>
                    <Box style={{borderRadius: '10px', padding: '10px', width: '70%', boxShadow: '0px 0px 10px rgba(0,0,0,.4)', margin:'15px 0px'}}>
                        <Typography sx={{display:'flex', alignItems:'center'}}>
                            <SpaIcon style={{fontSize: '35px', marginRight:'10px', color: '#15038a'}} />
                            <span style={{fontWeight: 800}}>Low Carolie Recipes.</span>
                        </Typography>
                    </Box>
                    <Box style={{borderRadius: '10px', padding: '10px', width: '70%', boxShadow: '0px 0px 10px rgba(0,0,0,.4)', margin:'15px 0px'}}>
                        <Typography sx={{display:'flex', alignItems:'center'}}>
                            <HolidayVillageIcon style={{fontSize: '35px', marginRight:'10px', color: '#15038a'}} />
                            <span style={{fontWeight: 800}}>Holiday Recipes.</span>
                        </Typography>
                    </Box>
                    <Box style={{borderRadius: '10px', padding: '10px', width: '70%', boxShadow: '0px 0px 10px rgba(0,0,0,.4)', margin:'15px 0px'}}>
                        <Typography sx={{display:'flex', alignItems:'center'}}>
                            <LockIcon style={{fontSize: '35px', marginRight:'10px', color: '#15038a'}} />
                            <span style={{fontWeight: 800}}>Restriction Recipes.</span>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box 
                                    style={{display: 'flex', flexDirection:'column', alignItems:'center', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', boxShadow: '0px 0px 10px rgba(0,0,0,.7)', paddingBottom: '30px'}}
                                >
                                    <Box 
                                        style={{borderTopLeftRadius: '50%', borderTopRightRadius: '50%', boxShadow: '0px 0px 10px rgba(0,0,0,.3)'}}
                                    >
                                        <img 
                                            src='./plate2.jpg' 
                                            alt='plate' 
                                            style={{borderTopLeftRadius: '50%', borderTopRightRadius: '50%'}}
                                        >
                                        </img>
                                    </Box>
                                    <Typography 
                                        variant='subtitle1' 
                                        style={{textAlign:'center'}}
                                    >
                                        Red onions with chopped Cabbage.
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        sx={{backgroundColor:'yellow', color:'black', textTransform:'capitalize', fontWeight:'900', marginTop:'17px'}}
                                    >
                                        try now
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    style={{display: 'flex', flexDirection:'column', alignItems:'center', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', boxShadow: '0px 0px 10px rgba(0,0,0,.7)', paddingBottom: '40px'}}
                                >
                                    <Box
                                        style={{borderTopLeftRadius: '50%', borderTopRightRadius: '50%', boxShadow: '0px 0px 10px rgba(0,0,0,.3)'}}
                                    >
                                        <img 
                                            src='./plate1.jpg' 
                                            alt='plate'
                                            style={{borderTopLeftRadius: '50%', borderTopRightRadius: '50%'}}
                                            >
                                            </img>
                                    </Box>
                                    <Typography 
                                        variant='subtitle1' 
                                        style={{textAlign:'center'}}
                                    >
                                        Low fat apple cake with white cream.
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        sx={{backgroundColor:'yellow', color:'black', textTransform:'capitalize', fontWeight:'900', marginTop:'17px'}}
                                    >
                                        try now
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}
export default Menu;