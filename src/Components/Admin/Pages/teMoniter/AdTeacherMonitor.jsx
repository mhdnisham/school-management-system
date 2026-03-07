import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';


function AdTeacherMonitor() {
const navigate=useNavigate()

  return (
    <div>
      <div>
        <div className="min-h-screen bg-gray-50 p-4">
      {/* Search bar */}
      <div className="mb-4">
        <div className="flex items-center bg-white rounded-lg shadow-sm border px-3 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by teacher name..."
            className="ml-2 w-full outline-none bg-transparent text-gray-700"
          />
        </div>
      </div>

      {/* Teacher cards */}
      <div className="space-y-3">
        {[
          {
            name: "Mr. John Doe",
            details: "5 Classes, 2 Subjects",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            name: "Ms. Jane Smith",
            details: "4 Classes, 3 Subjects",
            img: "https://randomuser.me/api/portraits/women/2.jpg",
          },
          {
            name: "Mr. Robert Brown",
            details: "6 Classes, 1 Subject",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
          },
          {
            name: "Ms. Emily White",
            details: "5 Classes, 2 Subjects",
            img: "https://randomuser.me/api/portraits/women/4.jpg",
          },
          {
            name: "Mr. Michael Green",
            details: "3 Classes, 4 Subjects",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
          },
        ].map((teacher, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
            onClick={()=>navigate('/adteachermopage')}
          >
            <div className="flex items-center gap-3">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-gray-500">{teacher.details}</p>
              </div>
            </div>
            <div className="text-gray-400">{">"}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default AdTeacherMonitor