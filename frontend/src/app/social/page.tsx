"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecFriendsList from "@/components/RecFriendsList";
import FriendRequestsList from "@/components/FriendRequests";
import jwt from "jsonwebtoken";


const getUserIdFromToken = (): string | null => {
try {
    const cookies = document.cookie.split(";");
    const tokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("token=")
    );

    if (!tokenCookie) return null;

    const token = tokenCookie.split("=")[1];
    const decoded = jwt.decode(token) as { userId: string } | null;
    return decoded?.userId || null;
} catch (error) {
    console.error("Error parsing JWT token:", error);
    return null;
}
};

const currentUserId = getUserIdFromToken(); 

export default function SocialPage() {
  const [recommendedFriends, setRecommendedFriends] = useState([]);

  useEffect(() => {
    // Fetch recommended friends from the backend
    fetch(`http://localhost:3001/api/users/${currentUserId}/recommended-friends`)
      .then((res) => res.json())
      .then((data) => {
        if (data.recommendedFriends) {
          setRecommendedFriends(data.recommendedFriends);
        }
      })
      .catch((err) =>
        console.error("Error fetching recommended friends:", err)
      );
  }, [currentUserId]);

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex-1 flex w-full overflow-auto bg-blue-300">
        <RecFriendsList
          recommendedFriends={recommendedFriends}
          currentUserId={currentUserId}
        />
        <FriendRequestsList currentUserId={currentUserId} />
      </div>
      <Footer />
    </div>
  );
}
