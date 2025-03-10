"use client";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      // Adjust the URL if your backend is hosted elsewhere
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password: password1,
          name: email.split("@")[0], // Optional default username based on email prefix
          major: "",
          bio: ""
        }),
      });      

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration success:", data);
      setError("");

      window.location.href = "/";
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-black text-2xl font-semibold text-center mb-4">Register Account</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Enter a password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-blue-500 cursor-pointer hover:text-blue-700">
          Already have an account? <Link href="/">Go to login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
