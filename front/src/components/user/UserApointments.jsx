import axios from "axios";
import { useState } from "react";
import UserAskForDelete from "./UserAskeForDelete";
const API_URL = import.meta.env.VITE_API_URL;

function UserApointments({ appointment, userFetch }) {

    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    const toShow = () => setShow(true);
    const notToShow = () => setShow(false);
    // delete data

    const deleteData = async (id) => {
        try {
            await axios.delete(`${API_URL}/user/${id}/patients/delete`, {
                withCredentials: true
            });

            userFetch();
        } catch (error) {
            setError(error.message)
        }
    }

    // colors based if confirmed or not
    const getConfirmColor = () => {
        if (appointment.isConfirmed === true) return "green";
        else return "red";
    }

    return (
        <>
            <div className="border mt-5">
                <div className="text-right pr-5 pt-2">
                    <button onClick={() => toShow()} type="button">X</button>
                    {show ? <UserAskForDelete notToShow={() => notToShow}/> : null}
                </div>

                <div className="relative bottom-3">
                    <h1 className="p-2">{appointment.name}</h1>
                    <p className="p-2">{appointment.date}</p>
                    <p className="p-2">
                        {appointment.description}
                    </p>
                    {appointment.isConfirmed ? <p style={{ color: getConfirmColor() }} className="p-2">Is confiormed</p> : <p style={{ color: getConfirmColor() }} className="p-2">Is not confirmed</p>}
                </div>
                <p className="text-center pb-2 ">{error}</p>
            </div>
        </>
    );
}

export default UserApointments;
