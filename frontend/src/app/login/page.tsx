"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);
      setError("");

      // After a successful login
      if (data.token) {
        // Set a cookie for the token (accessible on all routes)
        document.cookie = `token=${data.token}; path=/;`;
      }

      // Redirect to home or a protected page
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-blue-300">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-black text-2xl font-semibold text-center mb-4">
            Login
          </h2>

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <Link href="/register">
            <p className="text-blue-500 cursor-pointer hover:text-blue-700">
              Register Account
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
