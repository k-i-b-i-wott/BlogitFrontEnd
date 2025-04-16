import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'

import { useMutation } from '@tanstack/react-query' 

import axios from 'axios'
import apiUrl  from '../utils/apiUrl'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import useUserStore from '../Store/userStore'

const Changepassword = () => {
  const user = useUserStore((state) => state.user);
  console.log(user)

  const [oldPassword, setPassword] = useState("")
  const [newPassword, setNewPassword]= useState("")
  const [confirmPassword , setConfirmPassword]=useState("")
  const [error, setError]= useState("")
  const navigate = useNavigate()



  const {isPending, mutate} = useMutation({
    mutationKey:["changepassword"],
    mutationFn: async () => {
            const response = await axios.patch(`${apiUrl}/auth/updatepassword`,{oldPassword,newPassword}, {withCredentials:true})
      
            return response.data.data
    },
    onSuccess: () => {
      navigate("/profile")            
    },
    onError: ()=>{
      if(axios.isAxiosError(error)){
        const errorData = error.response?.data.message
        setError(errorData)
    }else{
      setError("An error occurred")
    }
    }
  })

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setError("")
  mutate();
}
  return (
 <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{mt:12}}>
  {
    error && (
      <Typography variant='h4' component="h4" gutterBottom sx={{mb:2, textAlign:"center"}} >
        {error}
      </Typography>
    )
  }
       <Grid container maxWidth={"xs"}>
        <Grid  maxWidth={"sm"}>
          <Typography variant='h4' component="h4" gutterBottom sx={{mb:2, textAlign:"center"}} >

            Change Password
          </Typography>
            <Paper component ="form" onSubmit={handleSubmit}>
                <TextField type='password'
                label="Old Password"    
                variant="outlined"
                fullWidth
                sx={{mb:2}}
                value={oldPassword}
                onChange={(e) => setPassword(e.target.value)}
                />
                <TextField type='password'
                label="New Password"    
                variant="outlined"
                fullWidth
                sx={{mb:2}}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
                <TextField type='password'
                label="Confirm Password"    
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{mb:2}} />
                <Button variant="contained" disabled={isPending} type='submit' fullWidth >
                  {
                    isPending ? "submitting ....":"Update password"
                  }
                </Button>
            </Paper>
        </Grid>      
      </Grid>
 </Box>
  )
}

export default Changepassword
