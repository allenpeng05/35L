"use client";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ViewProfileProps {
    editMode: boolean;
    setEditMode: (value: boolean) => void;
    user: {
      email: string;
      year: string;
      profilePicture: string;
      major: string;
    };
}

// user profile page
const Profile = () => {
    const [user, setUser] = useState({
        email: 'loading...',
        year: 'loading...',
        profilePicture: 'https://via.placeholder.com/150',
        major: 'loading...',
      });
    
      // Simulate fetching user data
      useEffect(() => {
        setTimeout(() => {
          // Replace with real data after loading (e.g., from an API)
          setUser({
            email: 'user@example.com',
            year: 'Sophomore',
            profilePicture: 'https://example.com/profile.jpg',
            major: 'Computer Science',
          });
        }, 2000); // 2-second delay to simulate data loading
      }, []);

    const [editMode, setEditMode] = useState(false);

    const renderComponent = () => {
        if (editMode) {
            return <EditProfile editMode={editMode} setEditMode={setEditMode} />
        }
        else {
            return <ViewProfile editMode={editMode} setEditMode={setEditMode} user={user}/>
        }
    }

    return (
        <div className="flex flex-col h-screen max-h-screen bg-white">
            <Navbar />
            <div className="justify-center flex-1 flex">
                {renderComponent()}
            </div>
            <Footer />
        </div>
    );
};

const ViewProfile: React.FC<ViewProfileProps> = ({ editMode, setEditMode, user }) => {
    return (
        <div className="justify-center">
            <div className="max-w-md mx-auto p-4">
                <div className="flex items-center mb-4">
                    <img
                    src={user.profilePicture} // Will show the placeholder or the real picture
                    alt="Profile"
                    className="w-24 h-24 rounded-full mr-4"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-black">{user.email}</h3>
                        <p className="text-sm text-gray-500 text-black">{user.year}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-medium text-black">Major:</span>
                        <span className="text-black">{user.major}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-black">Email:</span>
                        <span className="text-black">{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-black">Year:</span>
                        <span className="text-black">{user.year}</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="mx-auto bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setEditMode(true)}>edit</button>
                </div>
            </div>
        </div>
    );
};

const EditProfile = ({ editMode, setEditMode }: { editMode: boolean, setEditMode: (value: boolean) => void }) => {
    const [formData, setFormData] = useState({
        email: "",
        year: "",
        profilePicture: "",
        major: "",
      });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/edit-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Profile updated!");
          setEditMode(false);
        } else {
          alert("Error updating profile.");
        }
    };
    return (
        <div className="p-4 border shadow-md max-w-[60%]">
            <h2 className="text-xl font-bold mb-4 text-black">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 border rounded placeholder-blue-900 text-black"
                    required
                />
                <select name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border rounded text-blue-900">
                    <option value="">Select Year</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>
                <input 
                    type="text"
                    name="profilePicture"
                    value={formData.profilePicture}
                    onChange={handleChange}
                    placeholder="Profile Picture URL"
                    className="w-full p-2 border rounded placeholder-blue-900 text-black"
                />
                <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    placeholder="Major"
                    className="w-full p-2 border rounded placeholder-blue-900 text-black"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Save Changes
                </button>
                <button onClick={() => setEditMode(false)} className="w-full bg-blue-500 text-white p-2 rounded">
                    Back to profile
                </button>
            </form>
        </div>
    );
};

export default Profile;