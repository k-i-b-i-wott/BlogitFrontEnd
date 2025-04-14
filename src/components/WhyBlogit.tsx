import { Container, Paper,Box, Typography, Avatar } from '@mui/material'

import { FiFeather } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";


const WhyBlogit = () => {
  return (
    <Container sx={{display:"flex",flexWrap:"wrap", gap:2, justifyContent:'space-between'}}>
        <Paper elevation={10} sx={{maxWidth:"20rem"}} >
            <Box component={"div"} sx={{display:"flex", flexDirection:"column",gap:2, padding:2}}>
                <Avatar
                    
                >
                    <FiFeather />
                </Avatar>
                <Typography variant='h6'sx={{fontWeight:"bold", }} >Easy to use</Typography>
                <Typography component='p'>
                    Simple and intuitive interface designed for writers to focus on creating content.
                </Typography>
            </Box>                    
        </Paper>  
        <Paper elevation={10} sx={{maxWidth:"20rem"}} >
            <Box component={"div"} sx={{display:"flex", flexDirection:"column",gap:2, padding:2}}>
                <Avatar
                    
                >
                    <IoIosPeople />
                </Avatar>
                <Typography variant='h6'sx={{fontWeight:"bold", }} >Community</Typography>
                <Typography component='p'>
                     Connect with other writers and readers who share your interests and passions.
                </Typography>
            </Box>                    
        </Paper>  
        <Paper elevation={10} sx={{maxWidth:"20rem"}} >
            <Box component={"div"} sx={{display:"flex", flexDirection:"column",gap:2, padding:2}}>
                <Avatar
                    
                >
                    <FaBookOpen />
                </Avatar>
                <Typography variant='h6'sx={{fontWeight:"bold", }} >Discover Content</Typography>
                <Typography component='p'>
                        Explore a wide variety of topics and perspectives from writers around the world.
                </Typography>
            </Box>                    
        </Paper>  
        <Paper elevation={10} sx={{maxWidth:"20rem"}} >
            <Box component={"div"} sx={{display:"flex", flexDirection:"column",gap:2, padding:2}}>
                <Avatar
                    
                >
                    <IoChatbubblesOutline />
                </Avatar>
                <Typography variant='h6'sx={{fontWeight:"bold", }} >Engage Readers</Typography>
                <Typography component='p'>
                Build an audience and receive feedback from readers who value your work.
                </Typography>
            </Box>                    
        </Paper>  
        
         
    </Container>
  )
}

export default WhyBlogit
