import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import UserPatients from "./components/user/UserPage";
import PatientApForm from "./components/forms/PatientApForm";

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUpForm/>}/>
      <Route path="/Login" element={<LoginForm/>}/>
      <Route
        path="/user/:userId/apointments"
        element={
          <ProtectedRoute>
            <UserPatients/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/:userId/apointments/new"
        element={
          <ProtectedRoute>
            <PatientApForm/>
          </ProtectedRoute>
        }
      />
    </Routes>
   </>
  )
}

export default App
