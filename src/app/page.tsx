"use client";

import Link from "next/link";
import { useState } from "react";
import ClassCard from "@/components/ClassCard";
import ClassList from "@/components/ClassList";
import SearchBar from "@/components/SearchBar";
import FriendsList from "@/components/FriendsList";
import { Search } from "lucide-react";

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

  return (
    <div className="flex h-screen w-full">
      <ClassList classes={classes} />

      {/* search bar is inlcuded internally in the FriendsList component */}
      <FriendsList
        friendsClasses={friendsClasses}
        filteredFriends={filteredFriends}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}
