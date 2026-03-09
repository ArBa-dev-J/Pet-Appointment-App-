import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function PatientApForm() {
  let navigate = useNavigate();
  //   const [error, setError] = useState(null);
  const user = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isConfirmed: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <main>
        <header className="text-center">
          <Link to={`/user/${user.user.data.data.userId}/apointments`}>
            <h1 className="pt-10">Pet Clinic</h1>
          </Link>
        </header>
        <section>
          <h1 className="text-center pt-50">New Appointment</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center pt-10 gap-2"
          >
            <label>Appoitment title</label>
            <input
              type="text"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 50,
              })}
              className="block border"
            />

            <label>Appointment date</label>
            <input
              type="datetime-local"
              {...register("date", {
                required: true,
              })}
              className="block border"
            />

            <label>Appointment description</label>
            <input
              type="text"
              {...register("description", {
                required: true,
                minLength: 2,
                maxLength: 1000,
              })}
              className="block border"
            />

            <input type="submit" value="Put new appointment" />
          </form>
        </section>
      </main>
    </>
  );
}

export default PatientApForm;
