import { Avatar,Card,CardActions,CardContent, Container, Grid, IconButton, Typography } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

import { IoChatbubbleOutline } from "react-icons/io5";
import { ReadMore } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import {format} from 'date-fns'
import  apiUrl  from '../utils/apiUrl';
import { Link } from 'react-router-dom';


const Blogs = () => {
    const [error , isError] =  useState();
   const { isLoading, data}=useQuery({
        queryKey:["blogs"],
        queryFn:async()=>{
            const response= await axios.get(`${apiUrl}/blog/latest`,{withCredentials:true})
            console.log(response.data)
            return response.data.data
        },
        
    
        
    })
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
        {
            data && data.map((blog:any)=>(
                <Card key={blog.blogId} elevation={12}  sx={{mb:4,mt:4,maxWidth:"30rem"}}>
            <CardContent component={"div"} sx={{padding:2}}>
                <Grid container gap={2} justifyContent={"flex-start"}> 
                    <Grid>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </Grid>
                    <Grid>
                        <Typography variant='h6'>
                            {blog.user.userName}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container gap={2} mt={2}>
                    <Grid>
                        <Typography variant='h4'>
                            {blog.blogTitle}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                           {blog.blogExcerpt}
                        </Typography>
                    </Grid>
                </Grid>
                              
            </CardContent>
           <CardActions >
                <Grid container sx={{justifyContent:"space-between", fontSize:2}}>
                        <Grid>
                            <Typography variant='body2'>
                                <IconButton>
                                    {
                                    format(new Date(blog.createdAt), "do MMM yy")
                                    }
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
                            <IconButton component={Link} to={`/blog/${blog.blogId}`} >
                                <ReadMore /> 
                            </IconButton>                
                    </Grid>          

           </CardActions>
         </Card>  
            ))
        }
             
               
    </Container>
  )
}

export default Blogs
