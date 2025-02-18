import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to Our Website</h1>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => navigate("/sign-in")}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
