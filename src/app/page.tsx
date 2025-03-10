"use client";

import Link from "next/link";
import { useState } from "react";
import ClassCard from "@/components/ClassCard";
import ClassList from "@/components/ClassList";
import SearchBar from "@/components/SearchBar";
import FriendsList from "@/components/FriendsList";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  /* placeholder array, needs hooking */
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

  /* placeholder array, needs hooking */
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

  const [searchQuery, setSearchQuery] = useState("");

  /* for search bar, case insensitive right now */
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

  const router = useRouter();
  let loggedIn = true;
  if (!loggedIn) {
    router.push('/login');
  }
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex-1 flex w-full overflow-auto bg-blue-300">
        <ClassList classes={classes} />
        <FriendsList
            friendsClasses={friendsClasses}
            filteredFriends={filteredFriends}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
      </div>
      <Footer />
    </div>
  );
}
