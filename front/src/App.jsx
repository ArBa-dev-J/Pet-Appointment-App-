import { Routes, Route } from "react-router";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUpForm/>}/>
    </Routes>
   </>
  )
}

export default App
