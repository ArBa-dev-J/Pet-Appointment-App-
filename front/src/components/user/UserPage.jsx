import { Link } from "react-router";
import UserApointments from "./UserApointments";
import UserApointmentSearch from "./UserApointmentSearch";
import LogOut from "./UserLogout";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function UserPage() {
  const user = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const toShow = () => setShow(true);
  const notToShow = () => setShow(false);

  // get user appointments

  const userFetch = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/user/${user.user.data.data.userId}/patients`,
        {
          withCredentials: true,
        },
      );

      setAppointments(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    userFetch();
  }, []);

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
        {show ? <LogOut notToShow={() => notToShow} /> : null}
        <div className="flex justify-center p-5">
          <Link to={`/user/${user.user.data.data.userId}/apointments/new`}>
            <button className="border">New appointment</button>
          </Link>
        </div>
        ``
        <UserApointmentSearch />
        <section className="p-5">
          <p className="text-center">{error}</p>
          {appointments.map((appointment) => <UserApointments userFetch={userFetch} key={appointment.id} appointment={appointment} />)}

          {/* <UserApointments key={appointment.id} appointment={appointments} /> */}
        </section>
      </main>
    </>
  );
}

export default UserPage;
