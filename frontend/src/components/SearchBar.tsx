import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  return (
    <div className="relative mt-3 mb-4">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 pr-10 border rounded-md focus:outline-none text-black"
      />
      <Search className="absolute right-3 top-2 w-5 text-gray-500" />
    </div>
  );
}
