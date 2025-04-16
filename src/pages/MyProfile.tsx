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
        <Box  sx={{mt:10,display:"flex", gap:2, justifyContent:"center"}}>
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

      <Box display={"flex"} sx={{justifyContent:"space-around", p:3}}>
      <Card sx={{maxWidth:"xl"}} >
          <CardContent sx={{maxWidth:"md"}}>
          <Grid container gap={2} display={"flex"} flexDirection={"column"} padding={2}>
          <Grid>
            <Typography variant='h5' component="h4" gutterBottom >
              FirstName :  {data && data.firstName}
            </Typography>  
          </Grid>  
          <Grid>
            <Typography>
               LastName :  {data && data.lastName}  
            </Typography>  
          </Grid>  
          <Grid>
          <Typography>
            Email :  {data && data.emailAddress}
          </Typography>
          </Grid>   
          <Grid>
          <Typography>
            UserName :  {data && data.userName}
          </Typography>
          </Grid>   
        </Grid>
        </CardContent> 
        <CardActions sx={{gap:3, display:"flex", flexDirection:"column"}}>
        <Button variant="contained" component={Link} to='/updateprofile' fullWidth>
         Update My profile
        </Button> 
        <Button variant="contained" component={Link} to='/updatepassword' fullWidth>
          Update Password
        </Button>
        </CardActions>
                 
        </Card>         
      </Box>
        
        
    </Box>
  )
}

export default MyProfile
