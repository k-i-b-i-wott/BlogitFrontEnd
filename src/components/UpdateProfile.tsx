import { Box, Button, Grid,TextField} from "@mui/material"


import {useMutation, useQuery} from "@tanstack/react-query"
import axios from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import apiUrl  from '../utils/apiUrl'

const UpdateProfile = () => {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [userName, setUserName] = useState("")
const [emailAddress, setEmail] = useState("")
// const [error , setError]= useState("")
const navigate = useNavigate();



 const { data}=useQuery({
      queryKey: ["profile"],
      queryFn: async () =>{
       const response =  await axios.get(`${apiUrl}/auth/profile`,{withCredentials:true})
       console.log(response.data)
       return response.data.data
      }
    })

  const {isPending,mutate} = useMutation({
      mutationKey:["Update-profile"],
      mutationFn: async () => {
        const response = await axios.patch(`${apiUrl}/auth/updateprofile`,
          {firstName,lastName,userName,emailAddress},
          {withCredentials:true});
        return response.data;
      },
      onSuccess:() => {
        
        navigate("/profile")    
      },
      onError:() => {
        console.log("Error")
      }

      })

      const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(firstName,lastName,userName,emailAddress)
        if(!firstName || !lastName || !userName || !emailAddress){
          alert("All fields are required")
          return
      }

      console.log({
        firstName,
        lastName,
        userName,
        emailAddress
      });
      
        mutate();
      }


   useEffect(()=>{
    if(data){
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setUserName(data.userName);
    setEmail(data.emailAddress)
  }},[data])


  return (
    <Box sx={{mt:12, alignItems:"center", justifyContent:"center"}} >

     <Grid container sx={{justifyContent:"center", alignItems:"center"}}>
     <Box component="form" maxWidth={"sm"} onSubmit={handleSubmit}  > 
     <TextField
                label="Update your FirstName"            
               type="text"
               fullWidth
               autoFocus
               required
               sx={{ mb: 2 }}
               value={firstName}
               onChange={(e)=>setFirstName(e.target.value)}
               />
               <TextField
                label="Update Your LastName"            
               type="text"
               fullWidth
               autoFocus
               required
               sx={{ mb: 2 }}
               value={lastName}
               onChange={(e)=>setLastName(e.target.value)}
               
               />
               <TextField
                label="Update Your User Name"            
               type="text"
               fullWidth
               autoFocus
               required
               sx={{ mb: 2 }}
               value={userName}
               onChange={(e)=>setUserName(e.target.value)}
               
               />           
               <TextField
                label="Update Your Email"            
               type="email"
               fullWidth
               autoFocus
               required
               sx={{ mb: 2 }}
               value={emailAddress}
               onChange={(e)=>setEmail(e.target.value)}               
               />
              
               
               <Button variant="contained" type="submit" fullWidth sx={{mb:2}} disabled={isPending} >
                {
                  isPending ? "Updating..." : "Update Profile"
                }
               </Button>
          </Box>
     </Grid>

    </Box>
  )
}

export default UpdateProfile
