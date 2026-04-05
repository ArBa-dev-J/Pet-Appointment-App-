import { createContext, useState } from "react";


export const AppointmentsContext = createContext();

export const AppointmentContextProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);

    return (
        <AppointmentsContext value={{ appointments, setAppointments }}>
            {children}
        </AppointmentsContext>
    )
}