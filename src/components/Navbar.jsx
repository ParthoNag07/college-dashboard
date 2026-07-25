import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-5 flex justify-between items-center">

      <Link to="/">
        <h1 className="text-2xl font-bold">
          Smart Campus Hub
        </h1>
      </Link>

      <div>
        <Link to="/" className="mx-3">
          Home
        </Link>

        <Link to="/login" className="mx-3">
          Login
        </Link>

        <Link to="/register" className="mx-3">
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;