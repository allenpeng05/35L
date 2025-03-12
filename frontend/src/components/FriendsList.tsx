import React, { useState, useEffect } from "react";
import ClassCard from "@/components/ClassCard";
import SearchBar from "@/components/SearchBar";

interface Class {
  classId: string;
  className: string;
  professor: string;
}

interface Friend {
  friendName: string;
  classes: Class[];
}

interface FriendsListProps {
  currentUserId: string;
}

export default function FriendsList({ currentUserId }: FriendsListProps) {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
    
  useEffect(() => {
    if (!currentUserId) return;
    // Fetch the user document, assuming it returns a 'friends' field that is populated.
    fetch(`http://localhost:3001/api/users/${currentUserId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.friends) {
          // Map each friend to our Friend type.
          const mappedFriends: Friend[] = data.friends.map((friend: any) => ({
            friendName: friend.name,
            classes: friend.coursesInterested
              ? friend.coursesInterested.map((course: any) => ({
                  classId: course.courseNumber,
                  className: course.name,
                  professor: course.professor,
                }))
              : [],
          }));
          setFriends(mappedFriends);
        }
      })
      .catch((err) => console.error("Error fetching friends:", err));

  }, [currentUserId]);

  const filteredFriends = friends
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
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-300 m-[1%] rounded-2xl">
      <h1 className="text-3xl text-center font-bold font-roboto text-black m-2">
        Friend's Classes
      </h1>
      <div className="relative mt-3 mb-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {searchQuery === "" ? (
        friends.map((friend, friendIndex) => (
          <div
            key={friendIndex}
            className="mt-6 p-3 bg-gray-100 shadow-md rounded-lg w-full"
          >
            <h2 className="text-2xl font-semibold text-center text-gray-700 font-roboto">
              {friend.friendName}
            </h2>
            <ul className="list-none space-y-2">
              {friend.classes.map((course, index) => (
                <ClassCard
                  key={index}
                  classId={course.classId}
                  className={course.className}
                  professor={course.professor}
                  removable={false}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="absolute bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto">
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend, friendIndex) => (
              <div key={friendIndex} className="p-3 hover:bg-gray-100">
                <h2 className="text-xl font-semibold text-gray-700">
                  {friend.friendName}
                </h2>
                <ul className="list-none">
                  {friend.classes.map((course, index) => (
                    <li key={index} className="text-gray-600">
                      <span className="font-bold">{course.classId}</span>:{" "}
                      {course.className}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="p-3 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
