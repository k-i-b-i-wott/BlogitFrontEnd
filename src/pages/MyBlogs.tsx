import { Box, Button, Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material'
import { GoArrowUpRight } from "react-icons/go";

import {useQuery} from "@tanstack/react-query"
import axios from 'axios'
import {format} from 'date-fns'

import{ Link} from 'react-router-dom'
const MyBlogs = () => {

  

const {isLoading,data,isError,error} =useQuery({
    queryKey:["myBlogs"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/blog/post`,{withCredentials:true})
      console.log(response.data)
      return response.data.data
    }
  })
  if(isLoading){
    <Typography variant='h1' sx={{mt:12}}>
      Loading ..... please wait
    </Typography>
  }
  if(isError){
    if(axios.isAxiosError(error)){
      const errorData = error.response?.data.message
      return <Typography variant='h1' sx={{mt:12}}>
        {errorData}
      </Typography>
    }else{
      return <Typography variant='h1' sx={{mt:12}}>
        An error occured
      </Typography>
    }
  }
   


return (
    <Box sx={{mt:12, display:"flex", gap:3, justifyContent:"center", flexDirection:"column"}}>
        {
         data && data.map((blog:any)=>{
            return(
        <Card key={blog.blogId} sx={{maxWidth:"md", height:"fit-content",  mt:.5}}>
          <CardContent sx={{display:"flex", flexDirection:"column",gap:2}}>
            <Grid container sx={{display:"flex", flexDirection:"column", gap:1}}>
              <Grid sx={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography variant='h4' >{blog.blogTitle}</Typography>
              </Grid>
              <Grid sx={{display:"flex", flexDirection:"column",paddingLeft:4 }}>
                <Typography variant='body1'> {blog.blogExcerpt}</Typography>
              </Grid>
              
              <CardActions sx={{display:"flex", justifyContent:"flex-end"}}>
              
            </CardActions>  
                        
            </Grid>
            <Box display={"flex"} flexDirection={{"md":"row","lg":"row","sm":"column","xs":"column"}} sx={{justifyContent:"space-between"}}>
              <CardContent sx={{display:"flex", justifyContent:"flex-start"}}>
                  <Grid container>
                    <Grid sx={{color:"error.main"}}>
                      Created on:
                    </Grid>
                    <Grid sx={{ml:1, fontWeight:"bold"}}>
                        {
                          format(new Date(blog.createdAt), "do MMM yy")
                        }
                    </Grid>
                   
                  </Grid>             
              </CardContent>

            <CardActions sx={{display:"flex", justifyContent:"flex-end", gap:3}}>
               <Button component={Link} to={`/blog/${blog.blogId}`} endIcon={<GoArrowUpRight /> }  sx={{color:"primary.main"}}>
                  More
                </Button>
              <Button variant='contained' sx={{bgcolor:"primary.main"}}>
                Update
              </Button>
              <Button variant='contained' sx={{bgcolor:"error.main"}}>
                Delete
              </Button>
              
            </CardActions>
            </Box>
         </CardContent>        
        </Card>  
            )
          })
        }
    </Box>
  )
}

export default MyBlogs
