import axios from "axios"
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;


function UserApointments({ appointment, userFetch }) {
    const [error, setError] = useState("");

    // // delete appointment
    // const deleteAppointment = async (id) => {
    //     try {
    //         await axios.delete(`${API_URL}/user/${id}/patients/delete`);

    //         console.log("Successfully deleted");
    //         userFetch();
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // }

    // colors for isConfirmed
    const getConfirmColor = () => {
        if (appointment.isConfirmed === true) return "green";
        else return "red";
    }
    return (
        <>
            <div className="border mt-5">
                <div className="text-right pr-5 pt-2">
                    {/* <button type="button" onClick={() => deleteAppointment(id)}>X</button> */}
                </div>
                <p>{error}</p>
                <div className="relative bottom-4">
                    <h1 className="p-2">{appointment.name}</h1>
                    <p className="p-2">{appointment.date}</p>
                    <p className="p-2">
                        {appointment.description}
                    </p>
                    {appointment.isConfirmed ? <p style={{ color: getConfirmColor() }} className="p-2">Is confiormed</p> : <p style={{ color: getConfirmColor() }} className="p-2">Is not confirmed</p>}
                </div>
            </div>
        </>
    );
}

export default UserApointments;
