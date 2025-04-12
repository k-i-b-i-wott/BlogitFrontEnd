import { Stack, Typography } from "@mui/material"


const MoreInfo = () => {
  return (
    <Stack sx={{gap:3,textAlign:"center"}}> 
      <Typography variant="h3" component={"h2"}  gutterBottom>
        Why writers choose BlogIt
      </Typography>
      <Typography variant="body1" component={"p"}>
            A modern platform with everything you need to share your ideas with the world.
      </Typography>
    </Stack>
  )
}

export default MoreInfo
