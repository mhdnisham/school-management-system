import React, { useState } from "react";
import StNav from '../MinComponens/StNav';
import StFooter from '../MinComponens/StFooter';

function StHomeWork() {
  const homeworkData = [
    { title: "History Homework", topic: "The Roman Empire", due: "Oct 26, 2024" },
    { title: "Math Homework", topic: "Algebra Chapter 5", due: "Oct 28, 2024" },
    { title: "Science Homework", topic: "Photosynthesis Lab Report", due: "Oct 30, 2024" },
    { title: "English Homework", topic: "Essay on 'The Great Gatsby'", due: "Nov 1, 2024" },
    { title: "Computer Science Homework", topic: "React Component Practice", due: "Nov 3, 2024" },
    { title: "Computer Science Homework", topic: "React Component Practice", due: "Nov 3, 2024" },
    { title: "Computer Science Homework", topic: "React Component Practice", due: "Nov 3, 2024" },
  ];

  return (
    <div>
      {/* Navigation */}
      <div className="pb-20">
        <StNav />
      </div>

      {/* Main Content */}
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Page Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Home Work
        </h1>

        {/* Filter Buttons */}
        <div className="flex items-center justify-between rounded-full bg-gray-200 p-1 mb-6">
          <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-300 transition">
            Today
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition">
            This Week
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-300 transition">
            All
          </button>
        </div>

        {/* Homework List */}
        <div className="space-y-4">
          {homeworkData.map((hw, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md flex flex-col gap-2 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-lg font-bold text-gray-800">{hw.title}</h2>
              <p className="text-gray-600">Topic: {hw.topic}</p>
              <p className="text-sm text-gray-500">Due: {hw.due}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-sm:pt-20">
        <StFooter />
      </div>
    </div>
  );
}

export default StHomeWork;
