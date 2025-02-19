import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">BruinClassMates</Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/login" className="hover:text-gray-300">Login</Link>
            <Link href="/register" className="hover:text-gray-300">Register</Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;