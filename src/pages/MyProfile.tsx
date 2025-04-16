import { AccountCircle } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, Grid,SvgIcon, Typography} from "@mui/material"
import axios from "axios"
import apiUrl  from '../utils/apiUrl'


import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import Changepassword from "../components/Changepassword"

const MyProfile = () => {
  
 

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
        <Box  sx={{mt:10,display:"flex", gap:2}}>
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
        </Box> 

      <Box  sx={{maxWidth:"sm", margin:"auto", gap:2, justifyContent:"flex-start"}}>          
          
            <Typography variant='h5' component="h4" gutterBottom sx={{m:2}}>
              FirstName :  {data && data.firstName}
            </Typography>  
         
            <Typography sx={{m:2}}>
               LastName :  {data && data.lastName}  
            </Typography>  
        
          <Typography sx={{m:2}}>
            Email :  {data && data.emailAddress}
          </Typography>
         
          <Typography sx={{m:2}}>
            UserName :  {data && data.userName}
          </Typography>
         
        
        
        <Button variant="contained" component={Link} to='/updateprofile' fullWidth sx={{m:2}}>
         Update My profile
        </Button> 
        <Button variant="contained" component={Link} to='/updatepassword' fullWidth sx={{m:2}}>
          Update Password
        </Button>
                        
              
      </Box>
        
        
    </Box>
  )
}

export default MyProfile
