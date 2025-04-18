import { Container } from "@mui/material"
import NavBar from "./components/NavBar"
import{Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Blogs from "./pages/Blogs"
import WriteBlog from "./pages/WriteBlog"
import BlogEntry from "./pages/BlogEntry"
import MyBlogs from "./pages/MyBlogs"
import UpdateBlog from "./pages/UpdateBlog"
import Protected from "./components/Protected"
import MyProfile from "./pages/MyProfile"
import UpdateProfile from "./components/UpdateProfile"
import Changepassword from "./components/Changepassword"


const App = () => {
  return (
   <div
   style={{
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column"
   }}
   
   >
    <NavBar />
     <Container sx={{flexGrow:1}}>      
          <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/register"   element={<SignUp />}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/blogs"  element= {<Protected><Blogs /></Protected>}/>
          
          <Route path="/writeblogs"   element={<Protected><WriteBlog /></Protected>}/>
          <Route path="/blog/:blogId"   element={<BlogEntry />}/>
          <Route path="/myblogs"  element={<Protected><MyBlogs /></Protected>}/>
          <Route path="/updateblog/:blogId" element={<UpdateBlog />}/>
          <Route path ="/profile" element={<Protected><MyProfile /></Protected>}/>
          <Route path="/updateprofile" element={<Protected><UpdateProfile  /></Protected>}/>
          <Route path="/updatepassword" element={<Protected><Changepassword /></Protected>}/>
          </Routes>   
  </Container>
    
   </div>
   
  )
}

export default App
