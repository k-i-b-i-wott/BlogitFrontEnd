import { AccountCircle } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, Grid,SvgIcon, Typography} from "@mui/material"
import axios from "axios"
import apiUrl  from '../utils/apiUrl'


import { useQuery } from "@tanstack/react-query"

const MyProfile = () => {
  // const {userId} = useParams()
 

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
          <Grid container display={"flex"} alignItems={"center"}>
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

        <Card >
          <CardContent>
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
          <CardActions>:
            <Button variant="contained" component="a" href="/updateprofile" sx={{width:"10rem",alignSelf:"center"}}>Update Profile</Button>
           </CardActions>        
        </Card> 
        

    </Box>
  )
}

export default MyProfile
