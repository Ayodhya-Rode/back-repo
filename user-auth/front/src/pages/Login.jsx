import { useForm } from "react-hook-form";
import axios from "axios"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {
    register,
    handleSubmit, 
    formState: { errors, isSubmitting },
    
  } = useForm();
  
const navigate = useNavigate();

async function submitClick(data) {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      data,
      { withCredentials: true } 
    );

    console.log("Login success:", res.data);
    navigate("/dashboard");

  } catch (err) {
    if (err.response) {
      console.log("Backend error:", err.response.data);
      alert(err.response.data.message || "Login failed");
    } else {
      console.log("Network error:", err.message);
      alert("Server not reachable");
    }
  }
}


  return (
    <form
  onSubmit={handleSubmit(submitClick)}
  className="min-h-screen flex items-center justify-center bg-black"
>
  <div className="w-full max-w-sm bg-zinc-900 p-6 rounded-xl shadow-lg space-y-4">

    <h2 className="text-white text-xl font-semibold text-center">Login</h2>

    <div>
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true })}
        className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {errors.username && (
        <p className="text-red-500 text-sm mt-1">Username is required</p>
      )}
    </div>

    <div>
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
        className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">Password is required</p>
      )}
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isSubmitting ? "Logging in..." : "Login"}
    </button>

    <div className="text-center text-sm text-zinc-400">
      Already have an account?{" "}
      <Link
        to="/"
        className="text-indigo-500 hover:underline hover:text-indigo-400"
      >
        Register
      </Link>
    </div>
  </div>
</form>

  )
}

export default Login
