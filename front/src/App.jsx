import { Routes, Route } from "react-router";
import Home from "./components/Home";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUpForm/>}/>
      <Route path="/Login" element={<LoginForm/>}/>
    </Routes>
   </>
  )
}

export default App
