import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import jwt from "jsonwebtoken";

const Navbar = () => {
  const [userId, setUserId] = useState(null);

  const getUserIdFromToken = () => {
    try {
      const cookies = document.cookie.split(";");
      const tokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("token=")
      );
  
      if (!tokenCookie) {
        return null;
      }
  
      const token = tokenCookie.split("=")[1];
      const decoded = jwt.decode(token);
      return decoded && decoded.userId ? decoded.userId : null;
    } catch (error) {
      console.error("Error parsing JWT token:", error);
      return null;
    }
  };
  
  

  // Check for token once on mount
  useEffect(() => {
    setUserId(getUserIdFromToken());
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-700 text-white shadow-md font-roboto">
      <div className="flex container mx-auto justify-between items-center">
        <Link href="/" className="text-xl font-bold flex">
          <Image
            src="/favicon.png"
            alt="Bruin Class Mates Logo"
            width={40}
            height={40}
          />
          <p className="px-3 m-2">BruinClassPals</p>
        </Link>
        <div className="flex gap-4">
          {userId ? (
            <>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/profile" className="hover:text-gray-300">
                Edit Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
