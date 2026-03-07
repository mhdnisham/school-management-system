import { div } from 'framer-motion/m';
import React, { useState } from "react";
function TeTestsMarks() {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {students.map((std) => (
        <div
          key={std.roll}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-gray-700 font-semibold">Roll Number: {std.roll}</div>
          <div className="text-gray-900 text-lg font-medium">{std.name}</div>
        </div>
      ))}
    </div>

  )
}

export default TeTestsMarks