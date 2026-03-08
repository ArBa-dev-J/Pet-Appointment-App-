import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";


function PatientApForm() {
    const user = useContext(UserContext);
    return (
        <>
            <main>
                <header className="text-center">
                    <Link to={`/user/${user.user.data.data.userId}/apointments`}><h1 className="pt-10">Pet Clinic</h1></Link>
                </header>
                <section>
                    <h1 className="text-center pt-50">New Appointment</h1>
                    <form className="flex flex-col justify-center items-center pt-10 gap-2">
                        <label>Appoitment title</label>
                        <input type="text" className="block border" />

                        <label>Appointment date</label>
                        <input type="datetime-local" className="block border" />

                        <label>Appointment description</label>
                        <input type="text" className="block border" />

                        <input type="submit" value="Put new appointment" />
                    </form>
                </section>
            </main>
        </>
    );
}

export default PatientApForm;