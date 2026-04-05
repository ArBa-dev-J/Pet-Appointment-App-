import { createContext, useState, useEffect } from "react";


export const SingleAppointmentContext = createContext();

export const SignleAppointmentContextProvider = ({ children }) => {
    const [appointment, setAppointment] = useState(() => {
        const stored = localStorage.getItem("appointment");
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        if (appointment) {
            localStorage.setItem("appointment", JSON.stringify(appointment));
        } else {
            localStorage.removeItem("appointment");
        }
    }, [appointment]);

    return (
        <SingleAppointmentContext value={{ appointment, setAppointment }}>
            {children}
        </SingleAppointmentContext>
    )
}