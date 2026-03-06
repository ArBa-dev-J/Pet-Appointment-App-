import { Link } from "react-router";

function Home() {
  return (
    <>
      <main>
      <header className="text-center">
        <Link to="/"><h1 className="pt-10">Pet Clinic</h1></Link>
        </header>
        <section className="flex flex-col justify-center items-center min-h-screen gap-10">
          <Link to="/SignUp"><button type="button">Sign Up</button></Link>

          <button type="button">Log In</button>
        </section>
      </main>
    </>
  );
}

export default Home;
