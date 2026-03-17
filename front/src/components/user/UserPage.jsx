import { Link } from "react-router";
import UserApointments from "./UserApointments";
import UserApointmentSearch from "./UserApointmentSearch";
import LogOut from "./UserLogout";
import { UserContext } from "../../contexts/UserContext";
import { AppointmentsContext } from "../../contexts/AppointmetsContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function UserPage() {
  const user = useContext(UserContext);
  const { setAppointments } = useContext(AppointmentsContext);
  const appointmentsU = useContext(AppointmentsContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  // useState for sort and filters

  const [sort, setSort] = useState(``);

  const changeSortASC = () => {
    setSort(`ASC`);
  };

  const changeSortDESC = () => {
    setSort(`DESC`);
  };

  const changeSortDATEDESC = () => {
    setSort(`DATEDESC`);
  };

  const changeSortDATEASC = () => {
    setSort(`DATEASC`);
  };

  // search by name

  const [name, setName] = useState();

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const toShow = () => setShow(true);
  const notToShow = () => setShow(false);

  // get user appointments

  const userFetch = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/user/${user.user.data.data.userId}/patients`,
        {
          withCredentials: true,
          params: {
            name: name,
            sort: sort,
          },
        },
      );

      setAppointments(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      // testing error messages from back
      const match = error.response.data.match(/<pre>([\s\S]*?)<\/pre>/);
      let errorText = match ? match[1] : null;

      // Clean HTML entities and <br>
      if (errorText) {
        errorText = errorText
          .replace(/<br\s*\/?>/g, "\n")
          .replace(/&nbsp;/g, " ")
          .trim();
      }

      const firstLine = errorText.split("\n")[0];
      const message = firstLine.replace(/^Error:\s*/, "");

      setError(message);
    }
  };

  useEffect(() => {
    userFetch();
  }, [sort, name]);

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
        <UserApointmentSearch
          changeSortASC={changeSortASC}
          changeSortDESC={changeSortDESC}
          changeSortDATEDESC={changeSortDATEDESC}
          changeSortDATEASC={changeSortDATEASC}
          nameChange={nameChange}
        />
        <section className="p-5">
          <p className="text-center">{error}</p>
          {appointmentsU.appointments.map((appointment) => (
            <UserApointments
              userFetch={userFetch}
              key={appointment.id}
              appointment={appointment}
            />
          ))}

          {/* <UserApointments key={appointment.id} appointment={appointments} /> */}
        </section>
      </main>
    </>
  );
}

export default UserPage;
