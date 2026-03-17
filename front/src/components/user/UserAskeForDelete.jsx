import axios from "axios"
import errorHandler from "../../utlis/errorHandler";
import { AppointmentsContext } from "../../contexts/AppointmetsContext";
import { useContext } from "react";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;


function UserAskForDelete({ notToShow, userFetch, appointment }) {

    const [error, setError] = useState("");
    const { setAppointments } = useContext(AppointmentsContext);

    // delete data

    const deleteData = async (id) => {
        try {
            await axios.delete(`${API_URL}/user/${id}/patients/delete`, {
                withCredentials: true
            });

            setAppointments(prev =>
                prev.filter(appointment => appointment.pacientId !== appointment.pacientId)
            );
            notToShow();
            userFetch();
        } catch (error) {
            setError(errorHandler(error));
        }
    }


    return (
        <>
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-50">
                <h2 className="text-white text-center pb-5">Do you want to delete this?</h2>
                <div className="flex gap-22">
                    <div>
                        <button onClick={() => deleteData(appointment.pacientId)} className="text-white border p-2">
                            Yes
                        </button>
                    </div>

                    <div>
                        <button onClick={notToShow()} className="text-white border p-2">
                            No
                        </button>
                    </div>
                </div>
                <p className="text-white">{error}</p>
            </section>
        </>
    );
}

export default UserAskForDelete;