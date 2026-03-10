import { Link } from "react-router";

function Home() {
  return (
    <>
      <main>
      <header className="text-center">
        <Link to="/"><h1 className="pt-10">Pet Clinic</h1></Link>
        </header>
        <section className="flex flex-col justify-center items-center min-h-screen gap-10">
          <Link to="/SignUp"><button type="button" className="border">Sign Up</button></Link>

         <Link to="Login"><button type="button" className="border p-2">Login</button></Link>
        </section>
      </main>
    </>
  );
}

export default Home;
