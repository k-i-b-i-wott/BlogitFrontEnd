import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const WriteBlog = () => {
  return (
    <Container sx={{
        width: "100%",
        overflow:"hidden",
        right:0,
        left:0,
        position:"absolute",
        padding:0,
        margin:0,  
        mt:10,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
        
    }}>
         
      <Paper sx={{textAlign:"center", padding:2, maxWidth:"xl"}} >
            <Typography variant='h2' textAlign={"center"}>
                    Write Your Blog Here
                </Typography>
       
        <Box component="form" sx={{mt:2}}>
            
            <TextField type="file" fullWidth variant='outlined' helperText="Choose an Image for Your Blog" sx={{mb:2}} />
            <TextField  label="Enter the Blog Title" fullWidth variant="outlined" type='text' sx={{mb:2}}/>
            <TextField  label="Enter the blog's  excerpt" fullWidth variant='outlined' type='text' multiline maxRows={4} sx={{mb:2}}/>
            <TextField  label= "Enter the Blog's content here ...." fullWidth variant='outlined' type='text' minRows={8} multiline sx={{mb:3}}/>
            <Button variant='contained' sx={{mt:2}} type='submit' fullWidth >Submit</Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default WriteBlog
