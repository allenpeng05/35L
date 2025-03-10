"use client";
import { useState } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password1) {
      setError("Email and password are required.");
      return;
    }

    // Check that email ends in '.edu'
    if (email.slice(-4) !== ".edu") {
      setError("Email must end in '.edu'");
      return;
    }

    // Check that passwords match
    if (password1 !== password2) {
      setError("Passwords do not match");
      return;
    }

    // Mock account register (replace with actual API call)
    console.log("Making account with", { email, password1 });

    setError(""); // Clear errors on successful submit
  };

  return (
    <div className="flex flex-col max-h-screen h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-blue-300">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-black text-2xl font-semibold text-center mb-4">Register Account</h2>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="Enter a password"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
          <p className="text-blue-500 cursor-pointer hover:text-blue-700">Already have an account? <Link href="/login">Go to login</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;