function UserApointments({ appointment }) {
    return (
        <>
            <div className="border">
                <h1 className="p-2">{appointment.name}</h1>
                <p className="p-2">{appointment.date}</p>
                <p className="p-2">
                    {appointment.description}
                </p>
                {appointment.isConfirmed ? <p className="p-2">Is confiormed</p> : <p className="p-2">Is not confirmed</p>}
            </div>
        </>
    );
}

export default UserApointments;
