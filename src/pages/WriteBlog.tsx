import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import {useState} from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const WriteBlog = () => {
  const [blogTitle,setBlogTitle] = useState("")
  const [blogExcerpt,setBlogExcerpt] = useState("")
  const [blogBody,setBlogBody]= useState("")
  const [formError, setFormError]= useState("")
  const navigate =useNavigate()

 const {isPending,mutate}= useMutation({
    mutationKey:["Create-Blog"],
    mutationFn: async ()=>{
     const response= await axios.post(`http://localhost:3000/blog/post`,{
        blogTitle,
        blogExcerpt,
        blogBody
      }, {withCredentials:true})

     return response.data.data

    },
    onSuccess:(data)=>{
      navigate(`/blog/${data.blogId}`)
    },
    onError:(error)=>{
      if(axios.isAxiosError(error)){
        const errorData = error.response?.data.message
        setFormError(errorData)
      }else{
        setFormError("An error occurred")
      }
    }
  })



  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setFormError("")
    if(!blogTitle || !blogExcerpt || !blogBody){
      setFormError("All fields are required")
      return
    }
    
    mutate()
  }
  return (
    <Container sx={{
        width: "100%",
        overflow:"hidden",
        right:0,
        left:0,
        position:"absolute",
        padding:0,
        margin:0,  
        mt:10,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
        
    }}>
         
      <Paper sx={{textAlign:"center", padding:2, maxWidth:"xl"}} >
            <Typography variant='h2' textAlign={"center"}>
                    Write Your Blog Here
                </Typography>
       
        <Box component="form" sx={{mt:2}} onSubmit={handleSubmit}>
            
           {
                formError && (
                  (<Alert severity="error"sx={{ m: 1,  }}>{formError}</Alert>)
                )
              }
            {/* <TextField type="file" fullWidth variant='outlined' helperText="Choose an Image for Your Blog" sx={{mb:2}}/> */}
            <TextField 
             label="Enter the Blog Title" 
             fullWidth
              variant="outlined" 
              type='text'
              value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} 
              sx={{mb:2}}/>
            <TextField
              label="Enter the blog's  excerpt" 
              fullWidth 
              variant='outlined' 
              type='text'
               multiline
                maxRows={4} 
                value={blogExcerpt} 
                onChange={(e)=>setBlogExcerpt(e.target.value)}
                sx={{mb:2}}
                />
            <TextField  label= "Enter the Blog's content here ...." 
            fullWidth variant='outlined' 
            type='text' 
            minRows={8} 
            multiline 
            value={blogBody} onChange={(e)=>setBlogBody(e.target.value)}
            sx={{mb:3}}/>
            <Button variant='contained'
             sx={{mt:2}} type='submit' 
             fullWidth disabled={isPending}>
              {
                isPending ? "Submitting..." : "Submit"
              }
             </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default WriteBlog
