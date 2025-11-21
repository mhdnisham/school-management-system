import React from 'react'
import {Search,Users,ChevronRight,Plus,UserCircle2,GraduationCap} from "lucide-react";

const classes = [
  { grade: "Grade 10 - Section A", teacher: "Ms. Davis", students: 28 },
  { grade: "Grade 10 - Section B", teacher: "Mr. Wilson", students: 32 },
  { grade: "Grade 11 - Section A", teacher: "Ms. Moore", students: 25 },
];

function AdClasess() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 relative">
      <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2 mb-4 shadow-sm">
        <Search className="text-blue-500" size={18} />
        <input
          type="text"
          placeholder="Search by class name or teacher..."
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="space-y-3">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 
                       hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{cls.grade}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <UserCircle2 className="text-blue-500" size={14} />
                  Teacher:{" "}
                  <span className="text-blue-600 font-medium">{cls.teacher}</span>
                  <Users className="text-green-500 ml-2" size={14} />
                  Students: {cls.students}
                </p>
              </div>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
        ))}
      </div>

      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg 
                   hover:bg-blue-700 hover:scale-105 transition-all duration-300"
      >
        <Plus size={24} />
      </button>
    </div>
  )
}

export default AdClasess