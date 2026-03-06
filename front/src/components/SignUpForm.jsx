import { Link } from "react-router";
function SignUpForm() {
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
          <form className="flex flex-col justify-center items-center pt-10 gap-2">
            <label>Your full name</label>
            <input type="text"className="border block"  />

            <label>Your username</label>
            <input type="text"className="border block"  />

            <label>Create a password</label>
            <input type="password"className="border block" />

            <label>Your Email</label>
            <input type="text"className="border block" placeholder="example@email.com" />

            <input type="submit"  value="Sign Up"/>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignUpForm;
