import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdAnalticsClassCart() {
    const [search, setSearch] = useState("");
    const navigation=useNavigate()

    const classes = [
    {
      className: "Class 10-A",
      teacher: "Ms. Jane Doe",
      students: 45,
      avgMarks: 82,
      attendance: 95,
      img: "https://via.placeholder.com/50",
    },
    {
      className: "Class 9-B",
      teacher: "Mr. John Smith",
      students: 42,
      avgMarks: 78,
      attendance: 92,
      img: "https://via.placeholder.com/50",
    },
    {
      className: "Class 11-C",
      teacher: "Ms. Emily White",
      students: 38,
      avgMarks: 88,
      attendance: 97,
      img: "https://via.placeholder.com/50",
    },
  ];

  const filtered = classes.filter((c) =>
    c.className.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
         <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4">
      {/* Search Bar */}
      <div className="w-full max-w-5xl mb-6">
        <input
          type="text"
          placeholder="Search by class name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl py-3 px-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Class Cards */}
      <div className="w-full max-w-5xl space-y-5">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-lg transition"
          >
            {/* Class Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.teacher}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.className}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.teacher} <span className="block">Class Teacher</span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-around flex-1 sm:justify-end sm:gap-10">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {item.students}
                </p>
                <p className="text-xs text-gray-500">Students</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {item.avgMarks}%
                </p>
                <p className="text-xs text-gray-500">Avg. Marks</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {item.attendance}%
                </p>
                <p className="text-xs text-gray-500">Attendance</p>
              </div>
            </div>

            {/* Button */}
            <button className="w-full sm:w-auto bg-blue-600 text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-blue-700 transition"
            onClick={()=>navigation('/adanalticsclassreport')}
            >
              View Report
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AdAnalticsClassCart