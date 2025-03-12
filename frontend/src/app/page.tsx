"use client";

import Link from "next/link";
import { getUserIdFromToken } from "@/utils/auth";
import { useState, useEffect } from "react";
import ClassList from "@/components/ClassList";
import FriendsList from "@/components/FriendsList";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import jwt from "jsonwebtoken";

// Type Definitions
interface Course {
  _id: string;
  courseNumber: string;
  name: string;
  professor: string;
}

interface ClassItem {
  _id: string;
  classId: string;
  className: string;
  professor: string;
}

interface Friend {
  friendName: string;
  classes: ClassItem[];
}

export default function Home() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [friendsClasses, setFriendsClasses] = useState<Friend[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Callback to update state immediately after removal
  const handleRemoveSuccess = (removedCourseId: string) => {
    setClasses((prevClasses) =>
      prevClasses.filter((course) => course._id !== removedCourseId)
    );
  };

  const userId = getUserIdFromToken();
  // On mount, fetch the user document (with coursesInterested populated)
  useEffect(() => {
    const fetchUserWithCourses = async () => {
      try {
        
        if (!userId) return;

        const response = await fetch(`http://localhost:3001/api/users/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const userData: { coursesInterested?: Course[] } = await response.json();
        console.log("Fetched user:", userData);

        if (userData.coursesInterested) {
          const mapped = userData.coursesInterested.map((course) => ({
            _id: course._id,
            classId: course.courseNumber,
            className: course.name,
            professor: course.professor,
          }));

          setClasses(mapped);
          console.log("Fetched classes:", mapped);
        }
      } catch (error) {
        console.error("Error fetching user/courses:", error);
      }
    };

    fetchUserWithCourses();
  }, []);

  // Filter friends' classes based on search query
  const filteredFriends = friendsClasses
    .map((friend) => ({
      ...friend,
      classes: friend.classes.filter(
        (course) =>
          friend.friendName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.className.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((friend) => friend.classes.length > 0);

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex-1 flex w-full overflow-auto bg-blue-300">
        <ClassList classes={classes} onRemoveSuccess={handleRemoveSuccess} />
        <FriendsList currentUserId={userId}
        />
      </div>
      <Footer />
    </div>
  );
}
