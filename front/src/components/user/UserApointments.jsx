import { useState } from "react";
import UserAskForDelete from "./UserAskeForDelete";


function UserApointments({ appointment, userFetch }) {


    const [show, setShow] = useState(false);

    const toShow = () => setShow(true);
    const notToShow = () => setShow(false);

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
                    {show ? <UserAskForDelete notToShow={() => notToShow} appointment={appointment} userFetch={() => userFetch()} toShow={() => toShow} /> : null}
                </div>

                <div className="relative bottom-3">
                    <h1 className="p-2">{appointment.name}</h1>

                    <div className="flex items-center">
                    <p className="p-2">{appointment.date}</p>
                    <p>{appointment.time}</p>
                    </div>

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
