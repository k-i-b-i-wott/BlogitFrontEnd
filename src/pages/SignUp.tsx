import {Avatar, Box, Container,Alert, Paper, Typography,TextField, FormControlLabel, Button,Checkbox, Grid} from "@mui/material"
import {LockOpen } from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom"
import {useMutation} from "@tanstack/react-query"
import {useState} from 'react'
import axios from 'axios'
import apiUrl  from '../utils/apiUrl'

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword , setConfirmPassword]=useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

 const {isPending, mutate}= useMutation({
    mutationKey:["user-register"],
    mutationFn: async()=>{
      const response = await axios.post(`${apiUrl}/auth/register`, {
        firstName,
        lastName,
        emailAddress,
        userName,
        password})
        return response.data        
    },

    onSuccess:()=>{

      navigate("/login")
    },
    onError:(error)=>{
      if(axios.isAxiosError(error)){
        const errorData = error.response?.data.message
                setError(errorData)
      }
    }
  })

  const handleSubmit =((e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setError("")

    if(password !== confirmPassword){
      setError("Passwords do not match")
      return
    }

    if(!firstName || !lastName || !emailAddress || !userName || !password || !confirmPassword){
      setError("All fields are required")
      return
    }

    
    mutate();

  }
);

return (
    <Container maxWidth={"sm"} sx={{mt:4, gap:4}}>
        <Paper elevation={10} sx={{mt:12, p:2}}> 
        <Avatar  sx={{
            mx: "auto",
            textAlign: "center",
            mb: 1,
            mt: 2,
            
            backgroundColor: "secondary.main",
          }}>
            <LockOpen />
        </Avatar>
            <Typography variant="h5" component="h1" sx={{textAlign:"center"}} >Sign Up</Typography>
              {
                error && (
                  (<Alert severity="error" sx={{ m: 1,  }}>{error}</Alert>)
                )
              }
            <Box component="form" sx={{p:2}} onSubmit={handleSubmit}> 
              <TextField
             label="Enter firstName"
             
            type="text"
            fullWidth
            autoFocus
            
            sx={{ mb: 1 }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
             <TextField
             label="Enter LastName"
            
            type="text"
            fullWidth
            autoFocus
            
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}

            sx={{ mb: 1 }}/>
              <TextField
             label="Enter your Email Address"             
            type="email"
            fullWidth
            autoFocus
            
            sx={{ mb: 1 }}
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            />
             <TextField
             label="Enter your UserName"             
            type="text"
            fullWidth
            autoFocus
            
            sx={{ mb: 1 }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
             <TextField
             label="Enter password"             
            type="password"
            fullWidth
            autoFocus
            
            sx={{ mb: 1 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
             <TextField
             label="Confirm Password"             
            type="password"
            fullWidth
            autoFocus
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            
            sx={{ mb: 1 }}/>
             <FormControlLabel
            control={<Checkbox value="agree" color="primary" />}
            label="I agree to terms and conditions" 
          />
          <Button type="submit" variant="contained" fullWidth disabled={isPending}>
          {
            isPending? "Please wait...": "Sign Up"
          }
          </Button>
            </Box>
            <Grid container sx={{gap:1}}>
                <Grid >
                    <Typography>Already have an account?</Typography>
                </Grid>
                <Grid >
                    <Typography component={Link} to="/login">Login</Typography>
                </Grid>
            </Grid>          
        </Paper>
    </Container>
  )
}

export default SignUp
