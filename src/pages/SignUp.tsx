import {Avatar, Box, Container, Paper, Typography,TextField, FormControlLabel, Button,Checkbox, Grid} from "@mui/material"
import {LockOpen } from "@mui/icons-material";
import {Link} from "react-router-dom"

const SignUp = () => {
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

            <Box component="form" sx={{p:2}}> 
              <TextField
             label="Enter firstName"
             
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 1 }}/>
             <TextField
             label="Enter LastName"
            
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 1 }}/>
              <TextField
             label="Enter your Email Address"             
            type="email"
            fullWidth
            autoFocus
            required
            sx={{ mb: 1 }}/>
             <TextField
             label="Enter your UserName"             
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 1 }}/>
             <TextField
             label="Enter password"             
            type="password"
            fullWidth
            autoFocus
            required
            sx={{ mb: 1 }}/>
             <TextField
             label="Confirm Password"             
            type="password"
            fullWidth
            autoFocus
            required
            sx={{ mb: 1 }}/>
             <FormControlLabel
            control={<Checkbox value="agree" color="primary" />}
            label="I agree to terms and conditions" required
          />
          <Button type="submit" variant="contained" fullWidth>Register</Button>
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
