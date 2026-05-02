"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ButtonToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="btn btn-outline">
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="btn bg-pink-900 text-white"
        >
          Login
        </button>
      )}
    </>
  );
};

export default ButtonToggle;