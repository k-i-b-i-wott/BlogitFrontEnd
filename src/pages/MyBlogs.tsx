import { Box, Button, Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material'
import { GoArrowUpRight } from "react-icons/go";

import{ Link} from 'react-router-dom'
const MyBlogs = () => {
  return (
    <Box sx={{mt:12, display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Card sx={{maxWidth:"md", maxHeight:"sm"}}>
          <CardContent sx={{display:"flex", flexDirection:"column",gap:3, px:2}}>
            <Grid container sx={{display:"flex", flexDirection:"column", gap:1}}>
              <Grid sx={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography variant='h4' >Title blog</Typography>
              </Grid>
              <Grid sx={{display:"flex", flexDirection:"column"}}>
                <Typography variant='body1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae!</Typography>
              </Grid>
              <CardActions sx={{display:"flex", justifyContent:"flex-end"}}>
              
            </CardActions>              
            </Grid>
           
            <CardActions sx={{display:"flex", justifyContent:"flex-end", gap:3}}>
            <Button component={Link} to="/myblogs" endIcon={<GoArrowUpRight /> }  sx={{color:"primary.main"}}>
                More
              </Button>
              <Button variant='contained' sx={{bgcolor:"primary.main"}}>
                Update
              </Button>
              <Button variant='contained' sx={{bgcolor:"error.main"}}>
                Delete
              </Button>
            </CardActions>
         </CardContent>        
        </Card>  
    </Box>
  )
}

export default MyBlogs
