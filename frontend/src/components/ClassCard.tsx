import { User } from "lucide-react";
import { useState } from "react";
import jwt from "jsonwebtoken";

interface ClassCardProps {
  classId: string;
  className: string;
  professor: string;
  courseId: string;
  removable: boolean;
  onRemoveSuccess?: (removedCourseId: string) => void;
}

export default function ClassCard({
  classId,
  className,
  professor,
  courseId,
  removable,
  onRemoveSuccess,
}: ClassCardProps) {
  const [isRemoving, setIsRemoving] = useState(false);

  const getUserIdFromToken = (): string | null => {
    try {
      const cookies = document.cookie.split(";");
      const tokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("token=")
      );

      if (!tokenCookie) {
        return null;
      }

      const token = tokenCookie.split("=")[1];
      const decoded = jwt.decode(token) as { userId: string } | null;
      return decoded?.userId || null;
    } catch (error) {
      console.error("Error parsing JWT token:", error);
      return null;
    }
  };

  const userId = getUserIdFromToken();

  const removeClass = async () => {
    if (!userId) {
      console.error("User ID is required to remove a course");
      return;
    }

    setIsRemoving(true);
    try {
      const response = await fetch("http://localhost:3001/api/courses/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          courseId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to remove course");
      }

      // Update the UI immediately by calling the callback with the removed courseId
      if (onRemoveSuccess) {
        onRemoveSuccess(courseId);
      }
    } catch (error) {
      console.error("Error removing course:", error);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <li className="bg-white shadow-md rounded-lg p-4 w-full flex">
      <div>
        <span className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
          {classId}
        </span>
        <h2 className="text-xl font-bold mt-2 text-black font-roboto">{className}</h2>
        <p className="text-blue-600 font-medium mt-2 flex items-center">
          <User className="w-5 h-5 mr-2 text-blue-600" />
          Professor: {professor}
        </p>
      </div>
      {removable && (
        <button 
          className="ml-auto text-red-500 font-bold text-2xl"
          onClick={removeClass}
          disabled={isRemoving}
        >
          {isRemoving ? "..." : "X"}
        </button>
      )}
    </li>
  );
}
