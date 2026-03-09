import { Link } from "react-router";
import UserApointments from "./UserApointments";
import UserApointmentSearch from "./UserApointmentSearch";
import LogOut from "./UserLogout";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";

function UserPatients() {
  const user = useContext(UserContext);
  const [show, setShow] = useState(false);

  const toShow = () => setShow(true);
  const notToShow = () => setShow(false);

  return (
    <>
      <main>
        <header className="p-5">
          <h1 className="text-center">Pet Clinic</h1>
        </header>

        <div className="text-right pr-50 ">
          <button onClick={toShow} className="border">
            Log Out
          </button>
        </div>

        {show ? <LogOut notToShow={() => notToShow}/> : null}

        <div className="flex justify-center p-5">
          <Link to={`/user/${user.user.data.data.userId}/apointments/new`}>
            <button className="border">New appointment</button>
          </Link>
        </div>
``
        <UserApointmentSearch />

        <section className="p-5">
          <UserApointments />
        </section>
      </main>
    </>
  );
}

export default UserPatients;
