import { Link } from "react-router";
import { useForm } from "react-hook-form";

function SignUpForm() {
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
          <h1 className="pt-50 text-center">Sign Up form</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center pt-10 gap-2"
          >
            <label>Your full name</label>
            <input
              {...register("fullName", {
                required: true,
                minLength: 2,
                maxLength: 100,
                pattern: /^[A-Za-z]+(?:\s+[A-Za-z]+)$/,
              })}
              type="text"
              className="border block"
            />
            {errors.fullName && (
              <span>
                Must contain you name and surname nd must be from 2 to 100
                characters long
              </span>
            )}

            <label>Your username</label>
            <input
              {...register("userName", { required: true, minLength: 2, maxLength: 100 })}
              type="text"
              className="border block"
            />
            {errors.userName && (
              <span>
                Must contain your username and must be from 2 to 100 characters
                long
              </span>
            )}

            <label>Create a password</label>
            <input
              {...register("password", { required: true, minLength: 2, maxLength: 100 })}
              type="password"
              className="border block"
            />
            {errors.password && (
              <span>
                Must contain your password and must be from 2 to 100 characters
                long
              </span>
            )}

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

            <input type="submit" value="Sign Up" />
          </form>
        </section>
      </main>
    </>
  );
}

export default SignUpForm;
