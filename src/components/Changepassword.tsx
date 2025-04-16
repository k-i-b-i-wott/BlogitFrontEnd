import { Box, Button, Grid, Paper, TextField } from '@mui/material'


const Changepassword = () => {
  return (
 <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
       <Grid container maxWidth={"xs"}>
        <Grid  maxWidth={"sm"}>
            <Paper component ="form">
                <TextField type='password'
                label="Old Password"    
                variant="outlined"
                fullWidth
                sx={{mb:2}}
                />
                <TextField type='password'
                label="New Password"    
                variant="outlined"
                fullWidth
                sx={{mb:2}} />
                <TextField type='password'
                label="Confirm Password"    
                variant="outlined"
                fullWidth
                sx={{mb:2}} />
                <Button variant="contained" >
                    Update password
                </Button>
            </Paper>
        </Grid>      
      </Grid>
 </Box>
  )
}

export default Changepassword
