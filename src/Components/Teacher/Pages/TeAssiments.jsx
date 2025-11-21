import { div } from 'framer-motion/m';
import React from 'react'
import { Plus, Palette, CalendarDays } from 'lucide-react';

function TeAssiments() {
  const assignments = [
    { id: 1, title: 'Math Chapter 3 - Algebra Worksheet',  dueDate: '2025-10-25' },
    { id: 2, title: 'English Essay on “My School”',  dueDate: '2025-10-26'},
    { id: 3, title: 'Science - Water Cycle Project',  dueDate: '2025-10-28'},
    { id: 4, title: 'Social Studies - Map Work',  dueDate: '2025-10-29'},
  ];
  return (
     <div className="relative p-6 min-h-screen bg-gray-50">
      {/* Header with Palette icon */}
      <div className="flex items-center gap-2 mb-4">
        <Palette size={26} className="text-blue-600" />
        <h1 className="text-2xl font-semibold text-gray-800">Assignments</h1>
      </div>

      {/* Assignment Cards */}
      <div className="space-y-4">
        {assignments.map((a) => (
          <div
            key={a.id}
            className="bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-medium text-gray-800">{a.title}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <CalendarDays size={18} className="text-blue-500" />
              <span>Due Date: {a.dueDate}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Plus Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-105"
        title="Add Assignment"
      >
        <Plus size={28} />
      </button>
    </div>
  )
}

export default TeAssiments