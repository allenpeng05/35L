import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 p-4">
        <h1> Your Planned Classes</h1>
      </div>
      <div className="w-1/2 bg-gray-200 p-4">
        <h1>Friends' Planned Classes</h1>
      </div>
    </div>
  );
}
