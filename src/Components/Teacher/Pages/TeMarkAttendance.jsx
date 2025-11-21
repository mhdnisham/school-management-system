import { div } from 'framer-motion/m';
import React, { useState } from 'react'

function TeMarkAttendance() {
  const [ats, setAts] = useState({})

  const students = [
    { roll: 1, name: "Arjun Kumar" },
    { roll: 2, name: "Sneha Ramesh" },
    { roll: 3, name: "Vikram Nair" },
    { roll: 4, name: "Anjali Menon" },
    { roll: 5, name: "Rahul Thomas" },
    { roll: 6, name: "Meera Varma" },
    { roll: 7, name: "Aditya Pillai" },
    { roll: 8, name: "Riya Sharma" },
    { roll: 9, name: "Kiran Das" },
    { roll: 10, name: "Neha George" }
  ];


  const handilAttentance = (roll, status) => {
    setAts({ ...ats, [roll]: status })
  }
  return (
    <div className=' bg-gray-50 p-4 space-y-6'>
      <div className="flex flex-col md:flex-row items-start gap-8 p-6 bg-white shadow-md rounded-xl">
        {/* Select Class Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Select Class</h1>
          <select
            id="class"
            className="w-64 h-10 p-2 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select --</option>
            <option>10-A</option>
            <option>10-C</option>
            <option>10-D</option>
            <option>9-A</option>
          </select>
        </div>

        {/* Date Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Select Date</h3>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 shadow-sm w-64"
          />
        </div>

        {/* Button */}
        <div className="flex items-end sm:pt-9">
          <button
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md
                 hover:bg-blue-700 transition-all duration-200"
          >
            Load Students
          </button>
        </div>
      </div>


      <div className="space-y-4">
        {students.map((std) => (
          <div key={std.roll} className='flex justify-between items-center bg-white p-4 rounded-md shadow-sm'>
            <div>
              <div className='max-sm:text-xs font-medium tex-si text-gray-700'>Roll Number: {std.roll}</div>
              <div className='text-gray-600 '>{std.name}</div>
            </div>
            <div className='flex space-x-1 max-sm:text-xs'>
              <button
                onClick={() => handilAttentance(std.roll, "present")}
                className={`px-1 py-1 text-gray-500 rounded ${ats[std.roll] == "present" && "bg-green-600"
                  }`} >Present</button>

              <button
                onClick={() => handilAttentance(std.roll, "absent")}
                className={`px-1 py-1 text-gray-500 rounded ${ats[std.roll] == "absent" && "bg-red-600"
                  }`}>Absent</button>

              <button
                onClick={() => handilAttentance(std.roll, "late")}
                className={`px-1 py-1 text-gray-500 rounded ${ats[std.roll] == "late" && "bg-yellow-600"
                  }`}>Late</button>
            </div>

          </div>
        ))}
        <div className="flex  flex-row space-y-0 space-x-2 mt-4 w-full">
          <button className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
            Reset
          </button>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Save
          </button>
        </div>

      </div>
    </div>


  )
}

export default TeMarkAttendance