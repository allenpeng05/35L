"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";     
import Footer from "@/components/Footer";    
import UserCard from "@/components/UserCard"; 
import { getUserIdFromToken } from "@/utils/auth";

interface User {
  _id?: string;
  name?: string;
  email?: string;
  major?: string;
  bio?: string;
  year?: string;  
  profilePic?: string;   
}

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

interface ViewProfileProps {
  user: User;
  setEditMode: (value: boolean) => void;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ user, setEditMode }) => {
  return (
    <div className="justify-center m-4">
      <UserCard user={user} />
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-center">
          <button className="mx-auto bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

interface EditProfileProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setEditMode: (value: boolean) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ user, setUser, setEditMode }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    year: user.year || "",
    major: user.major || "",
    bio: user.bio || "",
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePic(e.target.files[0]);
    }
  };

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
          Authorization: `Bearer ${document.cookie.split("token=")[1]}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to update user profile");
      }

      const data = await res.json();
      setUser(data.updatedUser);
      setEditMode(false);
      alert("Profile updated successfully!");

      if (profilePic) {
        await uploadProfilePic(user._id, profilePic);
      }
    } catch (error) {
      console.error(error);
      alert("Error updating profile.");
    }
  };

  const uploadProfilePic = async (userId: string, file: File) => {
    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const res = await fetch(`http://localhost:3001/api/users/${userId}/upload-profile-pic`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload profile picture");
      }

      const data = await res.json();
      setUser((prev) => prev ? { ...prev, profilePic: data.profilePic } : null);
    } catch (error) {
      console.error(error);
      alert("Error uploading profile picture.");
    }
  };

  return (
    <div className="p-4 border shadow-md max-w-md w-full bg-white">
      <h2 className="text-xl font-bold mb-4 text-black">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded text-black" />
        <select name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border rounded text-black">
          <option value="">Select Year</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <input type="text" name="major" value={formData.major} onChange={handleChange} className="w-full p-2 border rounded text-black" />
        <textarea name="bio" value={formData.bio} onChange={handleChange} className="w-full p-2 border rounded text-black" />

        {/* Profile Picture Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded text-black" />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Save Changes
        </button>
        <button type="button" onClick={() => setEditMode(false)} className="w-full bg-gray-500 text-white p-2 rounded">
          Back to Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
