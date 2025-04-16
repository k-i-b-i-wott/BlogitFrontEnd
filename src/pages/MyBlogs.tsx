import { Box, Button, Card, CardActions, CardContent, Grid,  Typography } from '@mui/material'
import { GoArrowUpRight } from "react-icons/go";
import apiUrl  from '../utils/apiUrl'

import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import axios from 'axios'
import {format} from 'date-fns'



import{ Link} from 'react-router-dom'

const MyBlogs = () => {

  
  const queryClient = useQueryClient()

const {isLoading,data,isError,error} =useQuery({
    queryKey:["myBlogs"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/blog/post`,{withCredentials:true})
      console.log(response.data)
      return response.data
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
        An error occurred
      </Typography>
    }
  }
   
  if(data && data.length === 0){
    return <Typography variant='h1' sx={{mt:12}}>
            You ave no blog yet  <Button variant='contained' component={Link} to="/writeblogs"> Create One</Button>
    </Typography>
  }


const {isPending, mutate}=useMutation({
  mutationKey:["delete-blog"],
  mutationFn:async (blogId: String)=>{
     await axios.delete(`${apiUrl}/blog/post/${blogId}`,{withCredentials:true})
  },
  onSuccess:()=>{
    console.log("Blog deleted successfully");
    queryClient.invalidateQueries({queryKey:['myBlogs']})
  },
  onError:(error)=>{console.log(error)}

})

const handleDelete=(blogId: String, e: React.MouseEvent <HTMLButtonElement>)=>{
  e.preventDefault()
  mutate(blogId)
}

return (
    <Box sx={{mt:12, display:"flex", gap:3, justifyContent:"center", flexDirection:"column"}}>
     
        {
         data && data.map((blog:any)=>{
            return(
        <Card  key={blog.blogId} sx={{maxWidth:"md", height:"fit-content", justifyContent:"center", mb:2}}>
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
              <Button variant='contained' sx={{bgcolor:"primary.main"}} component={Link} to={`/updateblog/${blog.blogId}`}>
                Update
              </Button>
              <Button variant='contained' sx={{bgcolor:"error.main"}} onClick={(e)=>handleDelete(blog.blogId,e)} disabled={isPending}>
                {
                  isPending ? "Deleting..." : "Delete"
                }
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
