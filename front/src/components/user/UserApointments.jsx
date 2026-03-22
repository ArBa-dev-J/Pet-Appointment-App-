import { useState } from "react";
import close from "../../assets/close(1).png";
import refresh from "../../assets/refresh.png";
import UserAskForDelete from "./UserAskeForDelete";


function UserApointments({ appointments, userFetch }) {


    const [show, setShow] = useState(false);

    const toShow = () => setShow(true);
    const notToShow = () => setShow(false);

    // colors based if confirmed or not
    const getConfirmColor = () => {
        if (appointments.isConfirmed === true) return "green";
        else return "red";
    }

    return (
        <>
            <div className="border mt-5 pb-5">
                <div className="flex justify-end pr-5 pt-5 gap-5">
                    <button className="block" onClick={() => toShow()} type="button"><img src={close} alt="close" /></button>
                    <button className="block" type="button"><img src={refresh} alt="update" /></button>
                    {show ? <UserAskForDelete notToShow={() => notToShow} appointment={appointments} userFetch={() => userFetch()} toShow={() => toShow} /> : null}
                </div>

                <div className="relative bottom-3">
                    <h1 className="p-2">{appointments.name}</h1>

                    <div className="flex items-center">
                        <p className="p-2">{appointments.date}</p>
                        <p>{appointments.time}</p>
                    </div>

                    <p className="p-2">
                        {appointments.description}
                    </p>

                    {appointments.isConfirmed ? <p style={{ color: getConfirmColor() }} className="p-2">Is confiormed</p> : <p style={{ color: getConfirmColor() }} className="p-2">Is not confirmed</p>}
                </div>

            </div>
        </>
    );
}

export default UserApointments;
