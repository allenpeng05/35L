'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from "jsonwebtoken";


interface Course {
  _id: string;
  name: string;
  courseNumber: string;
  department: string;
  professor: string;
}

export default function AddClass() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [userId, setUserId] = useState<string | null>(null); // Fetch the user ID dynamically
  const router = useRouter();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('http://localhost:3001/api/courses/');
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    const getUserIdFromToken = (): string | null => {
      try {
        const cookies = document.cookie.split(";");
        const tokenCookie = cookies.find((cookie) =>
          cookie.trim().startsWith("token=")
        );
    
        if (!tokenCookie) {
          return null;
        }
    
        const token = tokenCookie.split("=")[1];
        const decoded = jwt.decode(token) as { userId: string } | null;
        return decoded?.userId || null;
      } catch (error) {
        console.error("Error parsing JWT token:", error);
        return null;
      }
    };

    setUserId(getUserIdFromToken());
    fetchCourses();
  }, []);

  console.log('Course selected:', selectedCourse);
  console.log('User:', userId);

  const handleAddClass = async () => {
    if (!selectedCourse || !userId) {
      alert("Please select a class and ensure you're logged in.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/courses/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, courseId: selectedCourse }),
      });

      console.log("Response:", response);

      const data = await response.json();
      if (response.ok) {
        alert('Class added successfully!');
        router.push('/');
      } else {
        alert(data.message || 'Failed to add class.');
      }
    } catch (error) {
      console.error('Error adding class:', error);
      alert('Error adding class. Please try again.');
    }
  };

  return (
  <div className="flex justify-center items-center h-screen w-full">
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl">
      <h1 className="text-3xl text-center font-bold text-black font-roboto m-2">
        Add a Class
      </h1>
      <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2">
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select a class</option>
          {courses.map((course) => {
          console.log('Course num:', course.courseNumber);
          return (
            <option key={course._id} value={course._id}>
              {course.department} {course.courseNumber} - {course.name} ({course.professor})
            </option>
          );
        })}
        </select>
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleAddClass}
        >
          Add Class
        </button>
      </div>
    </div>
  </div>
  );
}
