import { Box, Button, Container, Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import LandingPage from '../components/LandingPage'

import MoreInfo from '../components/MoreInfo'
import WhyBlogit from '../components/WhyBlogit'


const Home = () => {
  return (
  <Box sx={{
    width: "100%",
    overflow:"hidden",
    right:0,
    left:0,
    position:"absolute",
    padding:0,
    margin:0,     
    
  }} >
    <Box sx={{padding:{sm:2, xs:2},backgroundColor:"#edf0f5"}}>
      <LandingPage />
    </Box>
    <Box sx={{padding:{sm:2, xs:2},textAlign:"center"}}>
      <MoreInfo />
    </Box>
    <Box sx={{padding:{sm:2, xs:2}}}>
      <WhyBlogit />
    </Box>
    <Box sx={{padding:{sm:2, xs:2, backgroundColor:"lightgrey"},textAlign:"center", display:"flex",flexDirection:"column", gap:3 ,justifyContent:"space-between"}}>
      <Typography variant="h2" component={"h1"} sx={{textAlign:"center"}}>
        Ready to share your story?
      </Typography>
      <Typography variant="body1" component={"p"} sx={{textAlign:"center"}}>
          Join our community of storytellers and let your voice be heard.
      </Typography>
      <Button variant="contained" sx={{width:"10rem",alignSelf:"center"}} component={Link} to="/register" >
          Get Started
      </Button>
    </Box>
  </Box>
  )
}

export default Home
