"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";     // from old UI
import Footer from "@/components/Footer";     // from old UI
import UserCard from "@/components/UserCard"; // from old UI
import jwt from "jsonwebtoken";

// ------------------- USER INTERFACE -------------------
interface User {
  _id?: string;
  name?: string;
  email?: string;
  major?: string;
  bio?: string;

  // If your old UI or UserCard expects additional fields such as:
  // profilePicture?: string;
  // grade?: string;
  // contactInfo?: string;
  // etc.
  // Just add them here
}

// ------------------- UTILS: DECODE JWT -------------------
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

// ------------------- MAIN COMPONENT -------------------
const Profile: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data once on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = getUserIdFromToken();
        if (!userId) {
          throw new Error("No userId found in token");
        }

        const res = await fetch(`http://localhost:3001/api/users/${userId}`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user data.");
        }

        const data: User = await res.json();
        setUser(data);
      } catch (err: any) {
        console.error(err);
        setError("Error loading profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  // Render states: loading, error, no user, or loaded
  const renderContent = () => {
    if (loading) {
      return <div className="p-4">Loading user data...</div>;
    }
    if (error) {
      return <div className="p-4 text-red-500">{error}</div>;
    }
    if (!user) {
      return <div className="p-4 text-red-500">User not found.</div>;
    }

    if (editMode) {
      return <EditProfile user={user} setUser={setUser} setEditMode={setEditMode} />;
    } else {
      return <ViewProfile user={user} setEditMode={setEditMode} />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-white">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

// ------------------- VIEW PROFILE COMPONENT -------------------
interface ViewProfileProps {
  user: User;
  setEditMode: (value: boolean) => void;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ user, setEditMode }) => {
  return (
    <div className="justify-center m-4">
      {/* Old UI's UserCard, but passing data from the new "user" object */}
      <UserCard user={user} />

      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-center">
          <button
            className="mx-auto bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

// ------------------- EDIT PROFILE COMPONENT -------------------
interface EditProfileProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setEditMode: (value: boolean) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ user, setUser, setEditMode }) => {
  const [formData, setFormData] = useState<User>({
    name: user.name,
    email: user.email,
    major: user.major,
    bio: user.bio,
  });

  // Helper function for getting token cookie
  const getCookie = (name: string): string => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
    return "";
  };

  // Handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the edited data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user._id) {
      alert("No user ID found. Cannot update user.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to update user profile");
      }

      const data = await res.json();
      // data should contain something like { message, updatedUser }
      setUser(data.updatedUser);
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating profile.");
    }
  };

  return (
    <div className="p-4 border shadow-md max-w-md w-full bg-white">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full p-2 border rounded"
        />

        {/* Email (disabled if you do not want email to be editable) */}
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          disabled
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-100"
        />

        {/* Major */}
        <input
          type="text"
          name="major"
          value={formData.major || ""}
          onChange={handleChange}
          placeholder="Enter your major"
          className="w-full p-2 border rounded"
        />

        {/* Bio */}
        <textarea
          name="bio"
          value={formData.bio || ""}
          onChange={handleChange}
          placeholder="Tell us about yourself"
          className="w-full p-2 border rounded"
        />

        {/* Submit & Cancel */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => setEditMode(false)}
          className="w-full bg-gray-500 text-white p-2 rounded"
        >
          Back to Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
