import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';

function Footer(){
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          textAlign: "center",
        },
    }));

    const FooterLink = styled("span")(({ theme }) => ({
        fontSize: "16px",
        color: "#7A7A7E",
        fontWeight: "300",
        display: 'block',
        cursor: "pointer",
        "&:hover": {
        color: "#fff",
        },
    }));

    return(
        <Box sx={{ py: 10, backgroundColor: '#15038a', mt: '20px' }}>
            <CustomContainer>
                <CustomContainer>
                    <Box sx={{
                        color: '#fff'
                    }}>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "700",
                                mb: 2,
                            }}
                        >
                            Food
                        </Typography>
                        <Typography variant='subtitle1' style={{fontSize:'18px'}}>
                            We have a mission to make people around the world better through a healthier diet.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#fff",
                                fontWeight: "700",
                                mb: 2,
                            }}
                        >
                            About
                        </Typography>
                        <FooterLink>
                            About Us
                        </FooterLink>
                        <FooterLink>
                            Features
                        </FooterLink>
                        <FooterLink>
                            News & blog
                        </FooterLink>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#fff",
                                fontWeight: "700",
                                mb: 2,
                            }}
                        >
                            Movement
                        </Typography>
                            <FooterLink>
                                What Food
                            </FooterLink>
                            <FooterLink>
                                Support Us
                            </FooterLink>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#fff",
                                fontWeight: "700",
                                mb: 2,
                            }}
                        >
                            Company
                        </Typography>

                        <FooterLink>
                            Why Food
                        </FooterLink>
                        <FooterLink>
                            Capital
                        </FooterLink>
                        <FooterLink>
                            Security
                        </FooterLink>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#fff",
                                fontWeight: "700",
                                mb: 2,
                            }}
                        >
                            Support
                        </Typography>
                        <FooterLink>
                            FAQs
                        </FooterLink>
                        <FooterLink>
                            Support Center
                        </FooterLink>
                        <FooterLink>
                            Contact Us
                        </FooterLink>
                    </Box>
                </CustomContainer>
            </CustomContainer>
        </Box>
    )
}
export default Footer;