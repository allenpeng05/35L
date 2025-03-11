import { User } from "lucide-react";

export default function ClassCard({
  classId,
  className,
  professor,
}: {
  classId: string;
  className: string;
  professor: string;
}) {
  return (
    <li className="bg-white shadow-md rounded-lg p-4 w-full">
      <span className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
        {classId}
      </span>
      <h2 className="text-xl font-bold mt-2 text-black font-roboto">{className}</h2>
      <p className="text-blue-600 font-medium mt-2 flex items-center">
        <User className="w-5 h-5 mr-2 text-blue-600" />
        Professor: {professor}
      </p>
    </li>
  );
}
