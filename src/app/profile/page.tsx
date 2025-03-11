"use client";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import { useState } from 'react';
import UserCard from "@/components/UserCard.jsx";

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
    const user = {
        profilePicture: "https://example.com/profile.jpg", // optional, can be null
        name: "John Doe",
        major: "Computer Science",
        grade: "Junior",
        bio: "I love building web apps!",
        contactInfo: "john.doe@email.com", // optional, can be null
        coursesInterested: ["CS 35L", "CS 188", "CS 131"] // array of strings
      };

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
        <div className="justify-center m-4">
            <UserCard user={user} />
            <div className="max-w-md mx-auto p-4">
                <div className="flex justify-center">
                    <button className="mx-auto bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setEditMode(true)}>edit</button>
                </div>
            </div>
        </div>
    );
};

const EditProfile = ({ editMode, setEditMode }: { editMode: boolean, setEditMode: (value: boolean) => void }) => {
    const [formData, setFormData] = useState({
        year: "",
        major: "",
        name: "",
      });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //  API CALL NEEDED HERE
        let response = false;

        if (response) {
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
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded placeholder-blue-900 text-black"
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
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    placeholder="Enter your major"
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