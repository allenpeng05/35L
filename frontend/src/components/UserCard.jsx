import React from "react";
import { Mail } from "lucide-react";
import "../styles/UserCard.css"; 

export default function UserCard({ user }) {
  console.log("User is:",user)
  return (
    <li className="userCard">
      <img
        src={user.profilePicture || "https://via.placeholder.com/100"}
        alt={user.name}
        className="profilePicture"
      />

      <h2 className="userName">{user.name}</h2>
      <p className="major">{user.major}</p>
      <p className="grade">{user.grade}</p>

      <p className="bio">{user.bio || "No bio available."}</p>

      <p className="contactInfo">
        <Mail className="contactIcon" />
        {user.email || "No contact info provided"}
      </p>

      {/* Interested Courses */}
      <div className="coursesContainer">
        <span className="coursesTitle">Courses:</span>
        <ul>
          {user.coursesInterested.length > 0 ? (
            user.coursesInterested.map((course, index) => (
              <li key={index} className="courseBadge">
                {course.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No courses selected</li>
          )}
        </ul>
      </div>
    </li>
  );
}
