import { AccountCircle } from "@mui/icons-material"
import { Alert, Box, Button, Grid,SvgIcon, Typography} from "@mui/material"
import axios from "axios"
import apiUrl  from '../utils/apiUrl'


import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import {useMutation }from "@tanstack/react-query"


import { useNavigate } from "react-router-dom"
import { useState } from "react"



const MyProfile = () => {
  const navigate=useNavigate()
  const [error, setError]=useState("")

 const {isPending,mutate}= useMutation({
    mutationKey: ["delete profile"],
    mutationFn: async () => {
      const response =await axios.delete(`${apiUrl}/auth/profile`,{withCredentials:true})
      console.log(response.data)
      return response.data

    },
    onSuccess:()=>{
      navigate("/login")
    },
    onError:(error)=>{
      if(axios.isAxiosError(error)){
        const errorData = error.response?.data.message
        setError(errorData);
        
      }else{
          setError("An error occurred")
      }
    }
  })

  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    mutate()
  }
  
 
 

const {data}=useQuery({
    queryKey: ["profile"],
    queryFn: async () =>{
     const response =  await axios.get(`${apiUrl}/auth/profile`,{withCredentials:true})
     console.log(response.data)     
     return response.data.data
    }
  })

  return (
    <Box sx={{mt:12,  width: "100%",
      overflow:"hidden",
      right:0,
      left:0,
    position:"absolute",
      padding:0,
      margin:0, }}>
          
                   {
                        error && (
                          (<Alert severity="error"sx={{ m: 1,  }}>{error}</Alert>)
                        )
                      }
        <Box  sx={{mt:10,display:"flex", gap:2}} flexDirection={{lg:"row", sm:"column", xs:"column"}} justifyContent={"center"} maxWidth={"md"}>
          <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid>
             <SvgIcon component={AccountCircle} sx={{fontSize:"10rem"}} />
          </Grid>
          <Grid>
            <Button variant="contained">
              Update Photo
            </Button>
          </Grid>
          </Grid>      
       

       <Box  sx={{maxWidth:"sm", margin:"auto", gap:2, justifyContent:"flex-start"}}>          
          
            <Typography variant='h5' component="h4" gutterBottom sx={{m:2}}>
              FirstName :  {data && data.firstName}
            </Typography>  
         
            <Typography variant="h5" component={"h4"} gutterBottom sx={{m:2}}>
               LastName :  {data && data.lastName}  
            </Typography>  
        
          <Typography variant="h5" component={"h4"} gutterBottom sx={{m:2}}>
            Email :  {data && data.emailAddress}
          </Typography>
         
          <Typography variant="h5" component={"h4"} gutterBottom sx={{m:2}}>
            UserName :  {data && data.userName}
          </Typography>
         
        
        
        <Button variant="contained" component={Link} to='/updateprofile' fullWidth sx={{m:2}}>
         Update My profile
        </Button> 
        <Button variant="contained" component={Link} to='/updatepassword' fullWidth sx={{m:2}}>
          Update Password
        </Button>
        <Button variant="contained" onSubmit={handleClick} type="submit" fullWidth sx={{m:2}} color="error" disabled={isPending}>
          {
            isPending ? "Deleting your account": "Delete Account"
          }
        </Button>
                        
              
      </Box>
        
      </Box> 
    </Box>
  )
}

export default MyProfile
