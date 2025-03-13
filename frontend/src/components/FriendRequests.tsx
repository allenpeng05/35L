import React, { useState, useEffect } from "react";

interface FriendRequest {
  _id: string;
  sender: {
    _id: string;
    name: string;
    email?: string;
  };
  classes: { classId: string; className: string; professor: string }[];
}

interface FriendRequestsListProps {
  currentUserId: string;
}

export default function FriendRequestsList({ currentUserId }: FriendRequestsListProps) {
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);

  useEffect(() => {
    // Fetch pending friend requests for the current user
    fetch(`http://localhost:3001/api/users/${currentUserId}/friend-requests`)
      .then((res) => res.json())
      .then((data) => {
        if (data.friendRequests) {
          setFriendRequests(data.friendRequests);
        }
      })
      .catch((err) => console.error("Error fetching friend requests:", err));
  }, [currentUserId]);

  const handleAccept = async (requestId: string) => {
    try {
      const response = await fetch("http://localhost:3001/api/users/friend-request/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId }),
      });
      const data = await response.json();
      if (response.ok) {
        // Remove the accepted request from the list
        setFriendRequests((prev) => prev.filter((req) => req._id !== requestId));
      } else {
        console.error("Error accepting friend request:", data.message);
      }
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  return (
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl">
      <div className="m-2">
        <h1 className="text-3xl font-bold text-black font-roboto mb-2 text-center">Friend Requests</h1>
      </div>

      <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2">
        <ul className="list-none space-y-4">
          {friendRequests.length > 0 ? (
            friendRequests.map((request) => (
              <li key={request._id} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-2xl mb-2">{request.sender.name}</h3>
                {request.classes && request.classes.length > 0 ? (
                  <ul className="space-y-1">
                    {request.classes.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-gray-800 text-sm">
                        <span className="font-bold text-lg">{course.classId}</span>
                        : <span className="text-lg">{course.className}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm">No shared classes information.</p>
                )}
                <button
                  className="mt-3 w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => handleAccept(request._id)}
                >
                  Accept Request
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No friend requests.</p>
          )}
        </ul>
      </div>
    </div>
  );
}