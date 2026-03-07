import React, { useState } from "react";
import { MessageSquare, User, BookOpen, Star } from "lucide-react";

function AdTeacherMoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <div className="w-full max-w-6xl grid md:grid-cols-3 gap-6">
        
        {/* Left Section — Teacher Info + Performance */}
        <div className="space-y-6 md:col-span-1">
          {/* Teacher Info */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Teacher"
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">Isabella Rossi</h2>
            <p className="text-sm text-gray-500">Senior Math Teacher</p>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Performance Summary
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-lg bg-blue-50">
                <p className="text-3xl font-semibold text-blue-600">88%</p>
                <p className="text-xs text-gray-600">Avg Student Score</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50">
                <p className="text-3xl font-semibold text-blue-600">93%</p>
                <p className="text-xs text-gray-600">Class Attendance</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">Teacher Rating Score</p>
              <p className="text-2xl font-semibold text-gray-800">
                4.8 <span className="text-gray-500 text-sm">/ 5.0</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section — Subjects & Feedback */}
        <div className="space-y-6 md:col-span-2">
          {/* Subjects & Classes */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Subjects & Classes
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">Mathematics</p>
                <p>Grade 10-A</p>
                <p>Grade 12-A</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Calculus</p>
                <p>Grade 11-B</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Algebra</p>
                <p>Grade 11-B</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Trigonometry</p>
                <p>Grade 12-A</p>
              </div>
            </div>
          </div>

          {/* Feedback View */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-800 font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                Feedback View
              </h3>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                See All
              </a>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium flex items-center gap-1">
                  <User className="w-4 h-4 text-green-500" /> Parent
                </p>
                <p className="text-gray-500 text-xs mb-1">Mar 13, 2024</p>
                <p>
                  “Ms. Rossi has been an incredible influence on my daughter. Her
                  passion for math is contagious!”
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium flex items-center gap-1">
                  <User className="w-4 h-4 text-blue-500" /> Student
                </p>
                <p className="text-gray-500 text-xs mb-1">Mar 10, 2024</p>
                <p>
                  “Calculus used to be hard but Ms. Rossi’s teaching just clicks.
                  Best teacher ever!”
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium flex items-center gap-1">
                  <User className="w-4 h-4 text-yellow-500" /> Admin
                </p>
                <p className="text-gray-500 text-xs mb-1">Feb 28, 2024</p>
                <p>
                  “Observed class on 2/27. Good engagement and pacing — all
                  curriculum goals are being met.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdTeacherMoPage;
