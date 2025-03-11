"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecFriendsList from "@/components/RecFriendsList";
import FriendRequestsList from "@/components/FriendRequests";
import { useRouter } from "next/navigation";

export default function SocialPage() {
  /* Shared friendsClasses array needs hooking*/
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

  const router = useRouter();
  let loggedIn = true;
  if (!loggedIn) {
    router.push("/login");
  }

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex-1 flex w-full overflow-auto bg-blue-300">
        <RecFriendsList recommendedFriends={friendsClasses} />
        <FriendRequestsList friendRequests={friendsClasses} />
      </div>
      <Footer />
    </div>
  );
}
