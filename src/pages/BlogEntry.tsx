import { Box, CircularProgress, Typography,Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import {  useParams } from 'react-router-dom'
import{useEffect, useState} from 'react'

import { Link } from 'react-router-dom'


const BlogEntry = () => {

  const{blogId}=useParams()

  const [blogError, setBlogError] = useState<string | null>(null);
  

    const {isLoading,data, isError,error}= useQuery({
      queryKey:['Fetching-blog'],
      queryFn:async()=>{
        const response = await axios.get(`https://blogitbackend2.onrender.com/blog/post/${blogId}`,
          {withCredentials:true}
        ) 
        console.log(response.data)
        return response.data.data
        
      }
    })   
   useEffect(()=>{
    if(isError){
      if(axios.isAxiosError(error)){
        const errorData = error.response?.data.message
        setBlogError(errorData);
      }else{
        setBlogError("Blog not found")
      }
    }
   },[error])
    if(blogError){
      return(
        <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
              <Typography variant='h2'component={'h1' } sx={{textAlign:"center",mt:12}}>
                {blogError}                
            </Typography>
            <Button variant='contained' component={Link} to="/writeblogs">  
               Start Writing
          </Button>
        </Box>
      )
      
    }

    if(isLoading){
      return <CircularProgress/>
    }
  

  
return (
   <Box sx={{alignContent:"center"}}>
      <Box sx={{mt:12, textAlign:"left", maxWidth:"md"}}>
     <Typography variant='h4' gutterBottom>{data &&data.blogTitle}</Typography>
     <Typography variant='subtitle1' component='h6'>{data &&data.blogExcerpt}</Typography>
     <ReactMarkdown >{data &&data.blogBody}</ReactMarkdown>
   </Box>
   </Box>
  )
}

export default BlogEntry
