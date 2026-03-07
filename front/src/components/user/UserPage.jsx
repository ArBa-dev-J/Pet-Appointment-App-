import { Link } from "react-router";
import UserApointments from "./UserApointments";
import UserApointmentSearch from "./UserApointmentSearch";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

function UserPatients() {
    const user = useContext(UserContext);

    return (
        <>
            <main>
                <header className="p-5">
                    <h1 className="text-center">Pet Clinic</h1>
                </header>

                <div className="flex justify-center p-5">
                    <Link to={`/user/${user.user.data.data.userId}/apointments/new`}><button className="border">New appointment</button></Link>
                </div>

                <UserApointmentSearch />

                <section>
                    <UserApointments />
                </section>
            </main>
        </>
    );
}

export default UserPatients;