import { Box, CircularProgress, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
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
