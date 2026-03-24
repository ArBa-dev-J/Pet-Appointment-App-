import { Routes, Route } from "react-router";
import { useContext } from "react";
import { SingleAppointmentContext } from "./contexts/SingleAppointment";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import UpdateForm from "./components/forms/UpdateForm";
import UserPage from "./components/user/UserPage";
import PatientApForm from "./components/forms/PatientApForm";

function App() {
  const { appointment } = useContext(SingleAppointmentContext);

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />

        <Route
          path="/user/:userId/apointments"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/:userId/apointments/new"
          element={
            <ProtectedRoute>
              <PatientApForm />
            </ProtectedRoute>
          }
        />

        {appointment && <Route
          path="/user/:userId/apointments/update"
          element={
            <ProtectedRoute>
              <UpdateForm appointmentS={appointment}/>
            </ProtectedRoute>
          }
        />}
      </Routes>
    </>
  )
}

export default App
