import { Link } from "react-router";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
    reset();
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
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginForm;
