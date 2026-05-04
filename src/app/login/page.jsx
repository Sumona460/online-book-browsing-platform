"use client";

import { useRouter } from "next/navigation";
import GoggleLogin from "../components/GoggleLogin";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    
    let newErrors = {};

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Write a valid email";
    }

    // Password validation ..
    if (password.length < 8) {
      newErrors.password = "Password at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "need 1 uppercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "need minimum 1 number";
    }

    setErrors(newErrors);

    // No error hole all books page a niye jabe
    if (Object.keys(newErrors).length === 0) {
      console.log(email, password);
      router.push("/allBooks");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-xl w-[90%] md:w-[500px] my-9">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-900"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-900"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be 8+ characters, 1 uppercase & 1 number
            </p>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* image */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
             placeholder="Your image url"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-900"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
          </div>


          {/* Buttons */}
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-pink-900 text-white py-2 rounded-lg w-full"
            >
              Submit
            </button>

            <button
              type="reset"
              className="border py-2 rounded-lg w-full"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Register */}
        <div className="text-center mt-4 text-sm">
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-pink-900 cursor-pointer font-medium"
            >
              Register
            </span>
          </p>
        </div>
    
        <GoggleLogin />
      </div>
    </div>
  );
};

export default LoginPage;