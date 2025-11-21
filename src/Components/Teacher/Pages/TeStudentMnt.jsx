import React from "react";
import TeNav from "../MainContent/TeNav";

function TeStudentMnt() {
  const students = [
    { roll: 1, name: "Arjun Kumar", photo: "https://i.pravatar.cc/100?img=1" },
    { roll: 2, name: "Sneha Ramesh", photo: "https://i.pravatar.cc/100?img=2" },
    { roll: 3, name: "Vikram Nair", photo: "https://i.pravatar.cc/100?img=3" },
    { roll: 4, name: "Anjali Menon", photo: "https://i.pravatar.cc/100?img=4" },
    { roll: 5, name: "Rahul Thomas", photo: "https://i.pravatar.cc/100?img=5" },
    { roll: 6, name: "Meera Varma", photo: "https://i.pravatar.cc/100?img=6" },
    { roll: 7, name: "Aditya Pillai", photo: "https://i.pravatar.cc/100?img=7" },
    { roll: 8, name: "Riya Sharma", photo: "https://i.pravatar.cc/100?img=8" },
    { roll: 9, name: "Kiran Das", photo: "https://i.pravatar.cc/100?img=9" },
    { roll: 10, name: "Neha George", photo: "https://i.pravatar.cc/100?img=10" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TeNav />

      {/* Header and Search Bar */}
      <div className="p-6 flex flex-col sm:flex-row justify-between items-center ">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Student Management
        </h1>
        <input
          type="search"
          placeholder="Search students..."
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Student Grid */}
      <div className="px-6 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10 ">
        {students.map((info) => (
          <div
            key={info.roll}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-200 h-[180px]"
          >
            <img
              src={info.photo}
              alt={info.name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">{info.name}</h2>
            <p className="text-sm text-gray-500">Roll No: {info.roll}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeStudentMnt;
