"use client";

import { useState } from "react";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
        callbackURL: "http://localhost:3000/dashboard",
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Signup successful 🎉");
        console.log(data);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Create Account 🚀
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="label">Profile Image</label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.png"
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`btn btn-primary w-full ${loading && "loading"}`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}