import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function LogOut({ notToShow }) {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();
  const [error, setError] = useState(null);

  const logOutU = async () => {
    try {
      await axios.get(`${API_URL}/user/logout`, {
        withCredentials: true,
      });

      setUser(null);
      navigate(`/`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-50">
        <h2 className="text-white text-center pb-5">Do you want to log out?</h2>
        <div className="flex gap-22">
          <div>
            <button onClick={logOutU} className="text-white border p-2">
              Yes
            </button>
          </div>

          <div>
            <button onClick={notToShow()} className="text-white border p-2">
              No
            </button>
          </div>
        </div>
        <p className="text-red">{error}</p>
      </section>
    </>
  );
}

export default LogOut;
