import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import Cover from "../assets/images/blog-examples-1.jpg"
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <Box maxWidth="xl" flexDirection={ {lg:"row", sm:"column", xs:"column"}   } gap={2} display={"flex"}   sx={{mt:12,mb:4,mx:2}}>
        <Stack direction="column" >
            <Box >
                <Typography variant='h2' component="h4" gutterBottom >
                    Write your Story to the World
                </Typography>
                <Typography>
                    Empower your voice, connect with readers, and join a global community of storytellers. Whether  you're a seasoned writer or just starting out, our platform gives your words the spotlight they deserve.
                </Typography>
              
               
            </Box>
           <Grid container justifyContent={"flex-start"} gap={2} mt={3}>
            <Grid>
                <Button variant='contained' endIcon={<EastIcon />} component={Link} to="/register">
                    Start Writing
                </Button>
            </Grid>
            <Grid>
                <Button variant='outlined' component={Link} to="/register">
                Explore
                </Button>
            </Grid>
           </Grid>
        </Stack>
        <Box
        maxWidth={"40rem"}
        component={"img"}
        src={Cover}
        width="100%"
        sx={{mt:3,b:3}}
        
        />
        
    </Box>
  )
}

export default LandingPage
