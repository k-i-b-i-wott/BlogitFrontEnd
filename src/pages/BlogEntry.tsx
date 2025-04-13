import { Box, CircularProgress, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'

const BlogEntry = () => {

  const{blogId}=useParams()
  

    const {isLoading,data}= useQuery({
      queryKey:['Fetching-entry'],
      queryFn:async()=>{
        const response = await axios.get(`http://localhost:3000/blog/post/${blogId}`,
          {withCredentials:true}
        ) 
        console.log(response.data)
        return response.data.data
        
      }
    })   

    if(isLoading){
      return <CircularProgress/>
    }
  

  
return (
   <Box sx={{mt:12}}>
     <Typography variant='h2' component='h2'>{data &&data.blogTitle}</Typography>
     <Typography variant='subtitle1' component='h6'>{data &&data.blogExcerpt}</Typography>
     <Typography variant='body2' component='p'>{data &&data.blogBody}</Typography>
   </Box>
  )
}

export default BlogEntry
