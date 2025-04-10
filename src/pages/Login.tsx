import { Paper ,Container, Box, Grid,Typography, IconButton,Avatar, TextField, FormControlLabel, Checkbox, Button} from "@mui/material"
import {Link} from "react-router-dom"
import { HiLockClosed } from "react-icons/hi2";

const Login = () => {
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
            <Box component="form">
            <TextField
             label="Enter your userName or Email"            
            type="text"
            fullWidth
            autoFocus
            required
            sx={{ mb: 2 }}/>
            <TextField 
            label="Enter your password"
            type="password"
            fullWidth
            required
            sx={{mb:2}}
            />
            <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            /> 
            <Button variant="contained" fullWidth sx={{mb:2}}>Sign In</Button>
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
