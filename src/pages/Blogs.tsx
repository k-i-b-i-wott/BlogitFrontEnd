import { Avatar, Box, Card,CardActions,CardContent, Container, Grid, IconButton, Paper, Typography } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { ReadMore } from '@mui/icons-material';

const Blogs = () => {
  return (
    <Container
        sx={{
            width: "100%",
            overflow:"hidden",
            right:0,
            left:0,
            position:"absolute",
            padding:0,
            mt:8,
            mx:0, 
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:4,
            justifyContent:"center"
        }}
    >
        <Card elevation={12}  sx={{mb:4,mt:4,maxWidth:"30rem"}}>
            <CardContent component={"div"} sx={{padding:2}}>
                <Grid container gap={2} justifyContent={"flex-start"}> 
                    <Grid>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </Grid>
                    <Grid>
                        <Typography variant='h6'>
                            UserName
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container gap={2} mt={2}>
                    <Grid>
                        <Typography variant='h4'>
                            Blog Title
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, veniam?
                        </Typography>
                    </Grid>
                </Grid>
                              
            </CardContent>
           <CardActions >
                <Grid container sx={{justifyContent:"space-between", fontSize:2}}>
                        <Grid>
                            <Typography variant='body2'>
                                <IconButton>
                                    Sept 18
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton color='primary'>
                                <MdOutlineStarBorderPurple500 />
                            </IconButton>
                        </Grid>
                        <Grid>
                            <IconButton>
                                <IoChatbubbleOutline />
                            </IconButton>
                        </Grid>                
                    </Grid>   
                    <Grid container>            
                            <IconButton >
                                <ReadMore /> 
                            </IconButton>                
                    </Grid>          

           </CardActions>
         </Card>  
         <Card elevation={12} sx={{maxWidth:"30rem",mb:4,mt:4}}>
            <CardContent component={"div"} sx={{padding:2}}>
                <Grid container gap={2} justifyContent={"flex-start"}> 
                    <Grid>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </Grid>
                    <Grid>
                        <Typography variant='h6'>
                            UserName
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container gap={2} mt={2}>
                    <Grid>
                        <Typography variant='h4'>
                            Blog Title
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, veniam?
                        </Typography>
                    </Grid>
                </Grid>
                              
            </CardContent>
           <CardActions >
                <Grid container sx={{justifyContent:"space-between", fontSize:2}}>
                        <Grid>
                            <Typography variant='body2'>
                                <IconButton>
                                    Sept 18
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton color='primary'>
                                <MdOutlineStarBorderPurple500 />
                            </IconButton>
                        </Grid>
                        <Grid>
                            <IconButton>
                                <IoChatbubbleOutline />
                            </IconButton>
                        </Grid>                
                    </Grid>   
                    <Grid container>            
                            <IconButton >
                                <ReadMore /> 
                            </IconButton>                
                    </Grid>          

           </CardActions>
         </Card>      
         <Card elevation={12} sx={{maxWidth:"30rem",mb:4,mt:4}}>
            <CardContent component={"div"} sx={{padding:2}}>
                <Grid container gap={2} justifyContent={"flex-start"}> 
                    <Grid>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </Grid>
                    <Grid>
                        <Typography variant='h6'>
                            UserName
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container gap={2} mt={2}>
                    <Grid>
                        <Typography variant='h4'>
                            Blog Title
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, veniam?
                        </Typography>
                    </Grid>
                </Grid>
                              
            </CardContent>
           <CardActions >
                <Grid container sx={{justifyContent:"space-between", fontSize:2}}>
                        <Grid>
                            <Typography variant='body2'>
                                <IconButton>
                                    Sept 18
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton color='primary'>
                                <MdOutlineStarBorderPurple500 />
                            </IconButton>
                        </Grid>
                        <Grid>
                            <IconButton>
                                <IoChatbubbleOutline />
                            </IconButton>
                        </Grid>                
                    </Grid>   
                    <Grid container>            
                            <IconButton >
                                <ReadMore /> 
                            </IconButton>                
                    </Grid>          

           </CardActions>
         </Card>      
         <Card elevation={12} sx={{maxWidth:"30rem",mb:4,mt:4}}>
            <CardContent component={"div"} sx={{padding:2}}>
                <Grid container gap={2} justifyContent={"flex-start"}> 
                    <Grid>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </Grid>
                    <Grid>
                        <Typography variant='h6'>
                            UserName
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container gap={2} mt={2}>
                    <Grid>
                        <Typography variant='h4'>
                            Blog Title
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, veniam?
                        </Typography>
                    </Grid>
                </Grid>
                              
            </CardContent>
           <CardActions >
                <Grid container sx={{justifyContent:"space-between", fontSize:2}}>
                        <Grid>
                            <Typography variant='body2'>
                                <IconButton>
                                    Sept 18
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton color='primary'>
                                <MdOutlineStarBorderPurple500 />
                            </IconButton>
                        </Grid>
                        <Grid>
                            <IconButton>
                                <IoChatbubbleOutline />
                            </IconButton>
                        </Grid>                
                    </Grid>   
                    <Grid container>            
                            <IconButton >
                                <ReadMore /> 
                            </IconButton>                
                    </Grid>          

           </CardActions>
         </Card>          
    </Container>
  )
}

export default Blogs
