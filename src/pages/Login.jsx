import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-4">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to Smart Campus Hub
        </p>


        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
        />


        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
        />


        <div className="flex justify-between mb-5 text-sm">

          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>

          <span className="text-blue-600 cursor-pointer">
            Forgot Password?
          </span>

        </div>


        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>


        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link 
            to="/register"
            className="text-blue-600 font-bold"
          >
            Register
          </Link>
        </p>


      </div>

    </div>
  );
}

export default Login;