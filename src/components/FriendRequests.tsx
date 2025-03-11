import React, { useState } from "react";

interface FriendRequestsListProps {
  friendRequests: {
    friendName: string;
    classes: { classId: string; className: string; professor: string }[];
  }[];
}

export default function FriendRequestsList({
  friendRequests,
}: FriendRequestsListProps) {
  const [acceptedRequests, setAcceptedRequests] = useState<Set<string>>(
    new Set()
  );

  const handleAcceptRequest = (friendName: string) => {
    setAcceptedRequests((prev) => new Set(prev).add(friendName));
  };

  return (
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl">
      <h1 className="text-3xl text-center font-bold text-black font-roboto m-2">
        Friend Requests
      </h1>
      <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2">
        <ul className="list-none space-y-4">
          {friendRequests.length > 0 ? (
            friendRequests.map((friend, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-md">
                {/* Friend Name */}
                <h3 className="font-bold text-2xl mb-2">{friend.friendName}</h3>

                {/* Friend's Classes */}
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

                {/* Accept Request Button */}
                <button
                  className={`mt-3 w-full px-3 py-2 rounded-lg transition ${
                    acceptedRequests.has(friend.friendName)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={() => handleAcceptRequest(friend.friendName)}
                  disabled={acceptedRequests.has(friend.friendName)}
                >
                  {acceptedRequests.has(friend.friendName)
                    ? "Accepted"
                    : "Accept Request"}
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">
              No pending friend requests.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
