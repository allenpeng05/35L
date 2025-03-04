import React from "react";
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
  friendsClasses: Friend[];
  filteredFriends: Friend[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function FriendsList({
  friendsClasses,
  filteredFriends,
  searchQuery,
  setSearchQuery,
}: FriendsListProps) {
  return (
    <div className="w-1/2 h-full max-h-screen overflow-y-auto p-4 bg-gray-300">
      <h1 className="text-3xl text-center font-bold">Friends</h1>
      <div className="relative mt-3 mb-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {searchQuery === "" ? (
        friendsClasses.map((friend, friendIndex) => (
          <div
            key={friendIndex}
            className="mt-6 p-3 bg-gray-100 shadow-md rounded-lg w-full"
          >
            <h2 className="text-xl font-semibold text-center text-gray-700">
              {friend.friendName}
            </h2>
            <ul className="list-none space-y-2">
              {friend.classes.map((course, index) => (
                <ClassCard
                  key={index}
                  classId={course.classId}
                  className={course.className}
                  professor={course.professor}
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
