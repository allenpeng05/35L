import React from "react";
import ClassCard from "@/components/ClassCard";

interface Class {
  classId: string;
  className: string;
  professor: string;
}

interface ClassListProps {
  classes: Class[];
}

export default function ClassList({ classes }: ClassListProps) {
  return (
    <div className="w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl">
      <h1 className="text-3xl text-center font-bold text-black font-roboto m-2">
        Your Planned Classes
      </h1>
      <div className="mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2">
        <ul className="list-none space-y-2">
          {classes.map((course, index) => (
            <ClassCard
              key={index}
              classId={course.classId}
              className={course.className}
              professor={course.professor}
            />
          ))}
        </ul>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Add / Remove Class
        </button>
      </div>
    </div>
  );
}
