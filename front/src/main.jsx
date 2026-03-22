import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { AppointmentContextProvider } from "./contexts/AppointmetsContext.jsx";
import { SignleAppointmentContextProvider } from "./contexts/SingleAppointment.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <AppointmentContextProvider>
        <SignleAppointmentContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SignleAppointmentContextProvider>
      </AppointmentContextProvider>
    </UserContextProvider>
  </StrictMode>,
);
