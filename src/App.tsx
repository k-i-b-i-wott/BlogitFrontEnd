import { Container } from "@mui/material"
import NavBar from "./components/NavBar"
import{Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Blogs from "./pages/Blogs"


const App = () => {
  return (
    <Container>
      <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<SignUp />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/blogs" element={<Blogs />}/>
    </Routes>
    </Container>
   
  )
}

export default App
