import { Paper ,Container, Box, Grid,Typography,Avatar,Alert, TextField, FormControlLabel, Checkbox, Button} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import { HiLockClosed } from "react-icons/hi2";
import {useState} from 'react'
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import  useUserStore  from "../Store/userStore";




const Login = () => {
  const [identifier, setIdentifier]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState("")
  const navigate = useNavigate()
  const setUserInformation = useUserStore((state) => state.setUserInformation);

const {isPending,mutate}=useMutation({
  mutationKey:["user-login"],
  mutationFn: async ()=>{
    const response= await axios.post(`http://localhost:3000/auth/login`,{
      identifier,
      password
    }, {withCredentials:true})
    console.log(response.data)    
    return response.data.data;
  },
  onSuccess:(data)=>{
    setUserInformation(data)    
    navigate('/blogs')
  },
  onError:(error)=>{
    if(axios.isAxiosError(error)){
      const errorData = error.response?.data.message
      setError(errorData)
    }
    else{
      setError("An error occured")
    }
  }
})

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    
    setError("")

    e.preventDefault()
    
    if(!identifier || !password){
      setError("All fields are required")
      return
    }

    mutate();
  
  }
  return (
    <Container maxWidth={"sm"} sx={{mt:4, gap:4}}>
        <Paper elevation={10} sx={{ mt:12, p:2}}>
            <Avatar sx={{
                mx:"auto",
                mt:1,
                bgcolor:"secondary.main",
                mb:2
            }}>
                <HiLockClosed />                
            </Avatar>
            <Typography variant="h5" component="h1" sx={{textAlign:"center", mb:4}} >Sign In</Typography>

          <Box component="form"   onSubmit={handleSubmit} >
            {
              error && 
                ((
                  <Alert severity="error"  sx={{m:1}}>{error}</Alert>
                ))
              
            }
            <TextField
             label="Enter your userName or Email"            
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 2 }}
            value={identifier}
            onChange={(e)=>setIdentifier(e.target.value)}
            />
            <TextField 
            label="Enter your password"
            type="password"
            fullWidth
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            sx={{mb:2}}
            />
            <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            /> 
            <Button variant="contained" type="submit" fullWidth sx={{mb:2}} disabled={isPending}>
              {
                isPending ? "Please wait....": "Login"
              }
            </Button>
          </Box>

          <Grid container sx={{gap:2}}>
            <Grid>
              <Typography>Don't have an account ?</Typography>
            </Grid>
            <Grid component={Link} to="/register">SignUp</Grid>
          </Grid>
        </Paper>
    </Container>
  )
}

export default Login
