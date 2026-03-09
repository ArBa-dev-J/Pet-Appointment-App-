import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function LoginForm() {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, data, {
        withCredentials: true
      });

     
      // user
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      reset();
      navigate(`/user/${response.data.data.userId}/apointments`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <main>
        <header className="text-center ">
          <Link to="/">
            <h1 className="pt-10">Pet Clinic</h1>
          </Link>
        </header>
        <section>
          <h1 className="pt-50 text-center">Login form</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center pt-10 gap-2"
          >
            <label>Your Email</label>
            <input
              type="text"
              {...register("emailAddress", {
                required: true,
                minLength: 5,
                maxLength: 30,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="border block"
              placeholder="example@email.com"
            />
            {errors.emailAddress && (
              <span>
                Must contain your email and must be from 5 to 30 characters long
              </span>
            )}

            <label>Your password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 2,
                maxLength: 100,
              })}
              className="border block"
            />
            {errors.emailAddress && (
              <span>
                Must contain your password and must be from 2 to 100 characters
                long
              </span>
            )}
            <input type="submit" value="Login" />
            {error && <p>{error}</p>}
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginForm;
