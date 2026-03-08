import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";


function PatientApForm(){
    const user = useContext(UserContext);
return(
    <>
    <main>
        <header className="text-center">
           <Link to={`/user/${user.user.data.data.userId}/apointments`}><h1 className="pt-10">Pet Clinic</h1></Link>
        </header>
    </main>
    </>
);
}

export default PatientApForm;