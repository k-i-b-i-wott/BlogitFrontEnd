import { AppBar,Toolbar, Button, Typography, IconButton, Stack } from "@mui/material"
import{Subject} from '@mui/icons-material';



const NavBar = () => {
 

  return (
   <AppBar   sx={{b:3}} >
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
               <Subject /> 
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                Blogit
            </Typography>
            <Stack flexDirection="row" sx={{gap:2 ,m:2}} >             
              <Button color="inherit">About Us</Button>
              <Button color="inherit">MY Blogs</Button>
              <Button color="inherit">New Blog</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
              <Button color="inherit">LogOut</Button>
            </Stack>
        </Toolbar>
   </AppBar>
  )
}

export default NavBar
