import { Link } from "react-router";

function LoginForm() {
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
          <form className="flex flex-col justify-center items-center pt-10 gap-2">
            <label>Your Email</label>
            <input
              type="text"
              className="border block"
              placeholder="example@email.com"
            />

            <label>Your password</label>
            <input type="password" className="border block" />

            <input type="submit" value="Login" />
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginForm;
