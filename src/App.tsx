import { Container } from "@mui/material"
import NavBar from "./components/NavBar"
import{Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"


const App = () => {
  return (
    <Container>
      <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<SignUp />}/>
    <Route path="/login" element={<Login />}/>
    </Routes>
    </Container>
   
  )
}

export default App
