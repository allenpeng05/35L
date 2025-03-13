import React, { useState } from "react";

interface RecFriendsListProps {
  recommendedFriends: {
    _id: string;
    friendName: string;
    classes: { classId: string; className: string; professor: string }[];
  }[];
  currentUserId: string;
}

export default function RecFriendsList({
  recommendedFriends,
  currentUserId,
}: RecFriendsListProps) {
  const [requestedFriends, setRequestedFriends] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddFriend = async (friendId: string) => {
    try {
      const response = await fetch("http://localhost:3001/api/users/friend-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderId: currentUserId, receiverId: friendId }),
      });
      const data = await response.json();
      if (response.ok) {
        setRequestedFriends((prev) => new Set(prev).add(friendId));
      } else {
        console.error("Error sending friend request:", data.message);
      }
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };

  const filteredFriends = recommendedFriends.filter((friend) =>
    [friend.friendName, ...friend.classes.map((c) => `${c.classId} ${c.className}`)]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl">
      <div className="m-2">
        <h1 className="text-3xl font-bold text-black font-roboto mb-2 text-center">Recommended Friends</h1>
        <input
          type="text"
          placeholder="Search for friends..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mt-5"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2">
        <ul className="list-none space-y-4">
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend) => (
              <li key={friend._id} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-2xl mb-2">{friend.friendName}</h3>
                <ul className="space-y-1">
                  {friend.classes.map((course) => (
                    <li key={course.classId} className="text-gray-800 text-sm">
                      <span className="font-bold text-lg">{course.classId}</span>
                      : <span className="text-lg">{course.className}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-3 w-full px-3 py-2 rounded-lg transition ${
                    requestedFriends.has(friend._id)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                  onClick={() => handleAddFriend(friend._id)}
                  disabled={requestedFriends.has(friend._id)}
                >
                  {requestedFriends.has(friend._id) ? "Requested" : "Add Friend"}
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No matching friends found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
