

function UserApointments({ appointment }) {
    const getConfirmColor = () => {
        if (appointment.isConfirmed === true) return "green";
        else return "red";
    }
    return (
        <>
            <div className="border">
                <h1 className="p-2">{appointment.name}</h1>
                <p className="p-2">{appointment.date}</p>
                <p className="p-2">
                    {appointment.description}
                </p>
                {appointment.isConfirmed ? <p style={{ color: getConfirmColor() }} className="p-2">Is confiormed</p> : <p style={{ color: getConfirmColor() }} className="p-2">Is not confirmed</p>}
            </div>
        </>
    );
}

export default UserApointments;
