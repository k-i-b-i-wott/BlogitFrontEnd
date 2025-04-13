import { AppBar,Toolbar, Button, Typography, IconButton, Stack,useMediaQuery,useTheme, Menu,MenuItem  } from "@mui/material"
import{Label, Subject} from '@mui/icons-material';
import { useState , MouseEvent  } from 'react'
import { Link } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
    const theme= useTheme()
    const isMobile= useMediaQuery(theme.breakpoints.down('sm'))
    const [anchorElement, setAnchorEl]= useState<null |HTMLElement>(null);

    const handleOnClose = (): void=>{
        setAnchorEl(null);
    }
    const handleMenuOpen = (event: MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
      }
    

    const navElements= [
        {label:"Home" , path:"/"},
        {label:"Signup" , path:"/register"},
        {label:"SignIn" , path:"/login"},
        {label:"Blogs" , path:"/blogs"},
        {label: "Write ", path:"/writeblogs"},
        {label: "MyBlogs", path:"/myblogs"}
    ] 

  return (
   <AppBar   sx={{b:3}} >
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo" >
               <Subject /> 
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                BlogIt
            </Typography>
            {
                isMobile?(<>
                <IconButton onClick={handleMenuOpen}>
                    <IoMdMenu />
                </IconButton>
                <Menu
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleOnClose}
                aria-label="menu"
                >
                    {
                        navElements.map((item)=>(
                            <MenuItem key={item.label} component={Link} to={item.path}>{item.label}</MenuItem>
                        ))
                    }
                </Menu>                
                </>
                 ):(
                    <Stack flexDirection="row" sx={{gap:2, m:2}} >             
                    {
                       navElements.map((item)=>(
                           <Button key={item.label} component={Link} to={item.path} color="inherit">{item.label}</Button>
                       ))
                     }
                   </Stack>
                )        }
            
           
        </Toolbar>
   </AppBar>
  )
}

export default NavBar
