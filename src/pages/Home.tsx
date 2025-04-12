import { Box, Container, Stack, Typography } from '@mui/material'

import LandingPage from '../components/LandingPage'
import './styles/landingpage.css'


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
    <Box sx={{padding:{sm:2, xs:2}}}>
      <LandingPage />
    </Box>
  </Box>
  )
}

export default Home
