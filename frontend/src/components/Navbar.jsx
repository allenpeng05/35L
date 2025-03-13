import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getUserIdFromToken } from "@/utils/auth";
import {useRouter} from "next/navigation"

const Navbar = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();  

  // Check for token once on mount
  useEffect(() => {
    setUserId(getUserIdFromToken());
  }, []);

  const handleLogout = () => {
    document.cookie = "token=;path=/;max-age=0;";
    setUserId(null);
    router.push("/login");
  }

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
          <p className="px-2.75 m-2">BruinClassPals</p>
        </Link>
        <div className="flex gap-4">
          {userId ? (
            <>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/profile" className="hover:text-gray-300">
                Profile
              </Link>
              <Link href="/social" className="hover:text-gray-300">
                Social
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-2.5 py-1.5 rounded-lg hover:bg-red-600 transition"
              >
                Sign Out
              </button>
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
