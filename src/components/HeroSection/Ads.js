import Box from '@mui/material/Box';

function Ad (){
    return(
        <Box
            sx={{display: 'flex', justifyContent: 'space-between'}}
        >
            <Box 
                style={{width:'200px', height: '100px'}}
            >
                <img 
                    src='em.png' 
                    alt='emerson' 
                    style={{objectFit:'cover', height: '100%', width:'100%'}}
                ></img>
            </Box>
            <Box 
                style={{width:'200px', height: '100px'}}
            >
                <img 
                    src='em.png' 
                    alt='emerson' 
                    style={{objectFit:'cover', height: '100%', width:'100%'}}
                ></img>
            </Box>
            <Box 
                style={{width:'200px', height: '100px'}}
            >
                <img 
                    src='em.png' 
                    alt='emerson' 
                    style={{objectFit:'cover', height: '100%', width:'100%'}}
                ></img>
            </Box>
            {/* <Box  
                style={{width:'200px', height: '100px'}}
            >
                <img 
                    src='herb.png' 
                    alt='herbfood' 
                    style={{objectFit:'cover', height: '100%', width:'100%'}}
                ></img>
            </Box>
            <Box  style={{width:'200px', height: '100px'}}>
                <img src='colgate.png' alt='colgate' style={{objectFit:'cover', height: '100%', width:'100%'}}></img>
            </Box> */}
        </Box>
    )
}
export default Ad; 