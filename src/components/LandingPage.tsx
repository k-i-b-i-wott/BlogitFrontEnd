import { Box, Button, Container, Stack, Typography } from "@mui/material"
import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LandingPage = () => {
  return (
    <Box maxWidth={"xl"}  bgcolor="seagreen" sx={{marginInline: 0}}>
        <Container   >
            <Stack direction={{xs:"column"}}  textAlign="center">
               <Box>    
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Share Your Story with the World
                </Typography>
                <Typography variant="body1" paragraph>
                    Join a vibrant community of readers and writers. Publish your thoughts, experiences,
                    and insights on a platform designed for storytellers
                </Typography>
               </Box>
               <Stack sx={{mt:{xs:4}, gap:3 ,px:2}} direction={"row"} >
                <Button 
                variant="contained"
                
                component={Link}
                to="/register" 
                endIcon={<ArrowForwardIcon/> }                      
                >
                    Start Writing
                </Button>
                <Button 
                variant="outlined" 
                component={Link} 
                to="/register"
                >
                    Explore stories
                </Button>
               </Stack>
            </Stack>
            <Box>
                
            </Box>

        </Container>
      
    </Box>
  )
}

export default LandingPage
