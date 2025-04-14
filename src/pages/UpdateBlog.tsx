import { Box, Button, Grid, Paper, TextField,Alert, Typography } from "@mui/material"
import axios from "axios"
import { useQuery, useMutation } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"





const UpdateBlog = () => {
    const [title, setTitle]=useState("")
    const [excerpt, setExcerpt]=useState("")
    const [content, setContent]=useState("")
    const [error , setError]=useState("")

    const navigate = useNavigate()
    
    const {blogId} = useParams();    

const {isLoading,data}=useQuery({
    queryKey:["Fetching-blog"],
    queryFn:async()=>{
        const response = await axios.get(`https://blogitbackend2.onrender.com/blog/post/${blogId}`,{withCredentials:true})

        console.log(response.data)
        return response.data.data
        
    },   
})

useEffect(()=>{
    if(data){
        setTitle(data.blogTitle)
        setExcerpt(data.blogExcerpt)
        setContent(data.blogBody)
    }
},[data]);

const {isPending,mutate}=useMutation({
    mutationFn: async()=>{
        const response = await axios.patch(`https://blogitbackend2.onrender.com/blog/post/${blogId}`,{
            blogTitle:title,
            blogExcerpt:excerpt,
            blogBody:content
        }, {withCredentials:true})
        console.log(response.data)
    },
    onSuccess:()=>{navigate(`/blog/${blogId}`)},
   onError:(error)=>{
    
        if(axios.isAxiosError(error)){
            const errorData = error.response?.data.message
            setError(errorData)
        }else{
            setError("An error occured")
        }
    }
   }
)

if(isLoading){
    return <Typography>
        Loading  .....
    </Typography>

}
const handleUpdate=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!title || !excerpt || !content){
        setError("All fields are required")
        return
    }
    mutate();
}

  return (
    <Box sx={{mt:12}}>
        <Grid container justifyContent={"center"}>

            <Grid size={{xl:11, lg:6 , md:10, }}>     
               <Typography variant="h3" component={"h1"} sx={{textAlign:"center", mb:2}}>Update your blog</Typography>         
                <Paper elevation={10} component={"form"} sx={{p:2, gap:2}} onSubmit={handleUpdate}>
                    {
                        error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>
                    }
                    <TextField   
                    label="Update Title"
                    type="text"
                    fullWidth
                    sx={{mb:2}}   

                    value={title}
                    onChange={e=>setTitle(e.target.value)}                            
                    />
                    <TextField
                    label="Update Excerpt"
                    fullWidth
                    type="text"
                    multiline
                    minRows={4}
                    sx={{mb:2}} 

                    value={excerpt}
                    onChange={e=>setExcerpt(e.target.value)}

                    />
                    <TextField
                    label="Update the blog content .. use markdown"
                    type="text"
                    multiline
                    minRows={8}
                    fullWidth
                    sx={{mb:2}} 
                    value={content}
                    onChange={e=>setContent(e.target.value)}
                    />

                    <Button variant="contained" fullWidth  sx={{mb:1}} type="submit" disabled={isPending} >
                        {
                            isPending? "Updating" : "Update Blog"
                        }
                    </Button>

        </Paper>  
            </Grid>

        </Grid>    
    </Box>
  )
}

export default UpdateBlog
