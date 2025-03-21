import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-700 text-white shadow-md font-roboto">
      <div className="flex container mx-auto flex justify-between items-center">
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
          <Link href="/profile" className="hover:text-gray-300">
            Edit Profile
          </Link>
          <Link href="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link href="/social" className="hover:text-gray-300">
            Social
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
