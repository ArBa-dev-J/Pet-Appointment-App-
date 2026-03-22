import { createContext, useState } from "react";


export const SingleAppointmentContext = createContext();

export const SignleAppointmentContextProvider = ({ children }) => {
    const [appointment, setAppointment] = useState([]);

    return (
        <SingleAppointmentContext value={{ appointment, setAppointment}}>
            {children}
        </SingleAppointmentContext>
    )
}