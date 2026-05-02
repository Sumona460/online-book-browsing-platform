"use client";

import { useRouter } from "next/navigation";
import GoggleLogin from "../components/GoggleLogin";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login (later auth add korba)
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Center Card */}
      <div className="bg-white p-8 rounded-xl shadow-xl w-[90%] md:w-[500px] h-screen my-9">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
            required
          />

          <button className="btn bg-pink-900 text-white w-full">
            Submit
          </button>
        </form>

        
        <div className="text-center mt-4 text-sm">
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-pink-900 cursor-pointer font-medium"
            >
              Register
            </span>
          </p>
        </div>
<GoggleLogin></GoggleLogin>
      </div>

    </div>
  );
};

export default LoginPage;