import UserApointments from "./UserApointments";
import UserApointmentSearch from "./UserApointmentSearch";

function UserPatients() {
    return (
        <>
            <main>
                <header>
                    <h1 className="text-center">Pet Clinic</h1>
                </header>
                <UserApointmentSearch />
                <section>
                    <UserApointments />
                </section>
            </main>
        </>
    );
}

export default UserPatients;