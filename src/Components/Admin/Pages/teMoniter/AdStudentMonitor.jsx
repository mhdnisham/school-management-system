import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdStudentMonitor() {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("Class 10-A");
  const navigation = useNavigate()

  const students = [
    { name: "Dwight Schrute", class: "Class 10-B", id: "S45678", img: "https://via.placeholder.com/50" },
    { name: "Pamela Beesly", class: "Class 10-A", id: "S12345", img: "https://via.placeholder.com/50" },
    { name: "Michael Scott", class: "Class 10-A", id: "S98765", img: "https://via.placeholder.com/50" },
    { name: "Jim Halpert", class: "Class 10-B", id: "S54321", img: "https://via.placeholder.com/50" },
    { name: "Angela Martin", class: "Class 10-B", id: "S67890", img: "https://via.placeholder.com/50" },
    { name: "Kevin Malone", class: "Class 10-A", id: "S11223", img: "https://via.placeholder.com/50" },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      student.class.includes(selectedClass)
  );

  return (
    <div className=" bg-gray-50 flex justify-center items-center">
      <div className="w-full  bg-white  shadow-md p-6 h-screen">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by student name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 mb-5">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border border-gray-200 text-sm rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option>Class 10-A</option>
            <option>Class 10-B</option>
          </select>
        </div>

        <div className="space-y-2 overflow-y-auto max-h-[65vh]">
          {filteredStudents.map((student, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition"
              onClick={()=>navigation('/adstudentmopage')}
            >
              <div className="flex items-center gap-3">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm md:text-base font-medium text-gray-800">
                    {student.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {student.class}
                  </p>
                  <p className="text-xs text-gray-400">ID: {student.id}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdStudentMonitor;
