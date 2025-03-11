"use client";
import { useState } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

const Login = () => {
  const [classID, setClassID] = useState("");
  const [title, setTitle] = useState("");
  const [prof, setProf] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock add class logic (replace with actual API call)
    if (!classID || !title || !prof) {
        setError("Please enter something in each field");
    }
    else if (confirm("Are you sure you added the correct course information?")) {
        console.log("Adding class with:", { classID, title, prof });
        setError("");
        setProf("");
        setTitle("");
        setClassID("");
        setSuccessMessage("Class Added!");
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-blue-300">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-black text-2xl font-semibold text-center mb-4">Add Class</h2>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {successMessage && <p className="text-green-500 text-sm mb-3">{successMessage}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ClassID Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Class
              </label>
              <input
                type="classID"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={classID}
                onChange={(e) => setClassID(e.target.value)}
                placeholder="Department + Number (ex: MATH 115A)"
              />
            </div>

            {/* Title Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                type="title"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Class Title"
              />
            </div>

            {/* Prof Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Professor
              </label>
              <input
                type="prof"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={prof}
                onChange={(e) => setProf(e.target.value)}
                placeholder="Professor"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
          <Link href="/"><p className="text-blue-500 cursor-pointer hover:text-blue-700">Back to homepage</p></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;