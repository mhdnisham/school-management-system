import React from "react";
import { BookOpen, Hash, User, ChevronDown } from "lucide-react";

function AdAddSub({onClose}) {
  return (
    <div className="min-h-screen flex justify-center items-center  px-4">
      <div className="bg-white w-full max-w-sm shadow-lg rounded-2xl border border-gray-100 p-6 space-y-6">
        
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Add New Subject
        </h2>

        {/* Subject Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <BookOpen className="text-blue-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="e.g., Mathematics"
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Subject Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject Code (Optional)
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <Hash className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="e.g., MATH101"
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Assign Teacher */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Assign Default Teacher
          </label>
          <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <User className="text-gray-500 mr-2" size={18} />
            <select className="w-full text-sm bg-transparent outline-none appearance-none">
              <option>Select a teacher</option>
              <option>Mr. John Smith</option>
              <option>Ms. Clara Lewis</option>
              <option>Mrs. Diana Ross</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 space-y-3">
          <button className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition">
            Save Subject
          </button>
          <button className="w-full bg-gray-100 text-gray-700 rounded-lg py-2 font-medium hover:bg-gray-200 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdAddSub