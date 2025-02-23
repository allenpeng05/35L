"use client";

import Link from "next/link";
import { useState } from "react";
import ClassCard from "@/components/ClassCard";
import { Search } from "lucide-react";

export default function Home() {
  const [classes, setClasses] = useState([
    {
      classId: "CS143",
      className: "Database Systems",
      professor: "Ryan Rosario",
    },
    {
      classId: "CS35L",
      className: "Software Construction",
      professor: "Paul Eggert",
    },
    {
      classId: "Math 115A",
      className: "Linear Algebra",
      professor: "Wern Yeong",
    },
  ]);

  const [friendsClasses, setFriendsClasses] = useState([
    {
      friendName: "Alex",
      classes: [
        {
          classId: "CS118",
          className: "Computer Network Fundamentals",
          professor: "Lixia Zhang",
        },
        {
          classId: "CS35L",
          className: "Software Construction",
          professor: "Paul Eggert",
        },
        {
          classId: "MATH 151A",
          className: "Applied Numerical Methods",
          professor: "Deanna Needell",
        },
      ],
    },
    {
      friendName: "Sam",
      classes: [
        {
          classId: "CS180",
          className: "Introduction to Algorithms",
          professor: "Amit Sahai",
        },
        {
          classId: "CS33",
          className: "Computer Organization",
          professor: "Miryung Kim",
        },
        {
          classId: "MATH 170A",
          className: "Probability Theory",
          professor: "Wesley Perkins",
        },
      ],
    },
  ]);

  return (
    <div className="flex h-screen">
      {/* Planned Classes Container */}
      <div className="w-1/2 bg-gray-200 p-4">
        <h1 className="text-3xl text-center font-bold">Your Planned Classes</h1>
        {/* List Container */}
        <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg">
          <ul className="list-none space-y-2">
            {classes.map((course, index) => (
              <ClassCard
                key={index}
                classId={course.classId}
                className={course.className}
                professor={course.professor}
              />
            ))}
          </ul>
          {/* Button to Add/Remove a class*/}
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add / Remove Class
          </button>
        </div>
      </div>

      {/* Friend's Side */}
      <div className="w-1/2 h-full max-h-screen overflow-y-auto p-4 bg-gray-300">
        <h1 className="text-3xl text-center font-bold">Friends</h1>
        {/* Search Bar */}
        <div className="relative mt-3 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pr-10 border rounded-md focus:outline-none"
          />
          <Search className="absolute right-3 top-2 w-5 text-gray-500" />
        </div>

        {friendsClasses.map((friend, friendIndex) => (
          <div
            key={friendIndex}
            className="mt-6 p-3 bg-gray-100 shadow-md rounded-lg w-full"
          >
            <h2 className="text-xl font-semibold text-center text-gray-700">
              {friend.friendName}
            </h2>
            <ul className="list-none space-y-2">
              {friend.classes.map((course, index) => (
                <ClassCard
                  key={index}
                  classId={course.classId}
                  className={course.className}
                  professor={course.professor}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
