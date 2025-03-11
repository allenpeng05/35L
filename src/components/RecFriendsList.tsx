import React, { useState } from "react";

interface RecFriendsListProps {
  recommendedFriends: {
    friendName: string;
    classes: { classId: string; className: string; professor: string }[];
  }[];
}

export default function RecFriendsList({
  recommendedFriends,
}: RecFriendsListProps) {
  const [requestedFriends, setRequestedFriends] = useState<Set<string>>(
    new Set()
  );

  const handleAddFriend = (friendName: string) => {
    setRequestedFriends((prev) => new Set(prev).add(friendName));
  };

  return (
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl">
      <div className="m-2">
        <h1 className="text-3xl font-bold text-black font-roboto mb-2">
          Recommended Friends
        </h1>
        <input
          type="text"
          placeholder="Search for friends..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2">
        <ul className="list-none space-y-4">
          {recommendedFriends.length > 0 ? (
            recommendedFriends.map((friend, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-2xl mb-2">{friend.friendName}</h3>
                <ul className="space-y-1">
                  {friend.classes.map((course, courseIndex) => (
                    <li key={courseIndex} className="text-gray-800 text-sm">
                      <span className="font-bold text-lg">
                        {course.classId}
                      </span>
                      : <span className="text-lg">{course.className}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-3 w-full px-3 py-2 rounded-lg transition ${
                    requestedFriends.has(friend.friendName)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                  onClick={() => handleAddFriend(friend.friendName)}
                  disabled={requestedFriends.has(friend.friendName)}
                >
                  {requestedFriends.has(friend.friendName)
                    ? "Requested"
                    : "Add Friend"}
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No recommended friends.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
