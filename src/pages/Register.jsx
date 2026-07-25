import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 px-4">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Join Smart Campus Hub
        </p>


        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-green-500"
        />


        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-green-500"
        />


        <input
          type="password"
          placeholder="Create Password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-green-500"
        />


        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-lg mb-5 focus:outline-green-500"
        />


        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Register
        </button>


        <p className="text-center mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-bold"
          >
            Login
          </Link>

        </p>


      </div>

    </div>
  );
}

export default Register;