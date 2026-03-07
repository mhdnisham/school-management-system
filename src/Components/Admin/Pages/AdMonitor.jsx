import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'

function AdMonitor() {
  const navigate = useNavigate()

  const cart = [
    { name: "Teachers", path: "/adteachermonitor" },
    { name: "Students", path: "/adStudentnonitor" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Nav area */}
      <div className="flex gap-4 bg-gray-200 p-4">
        {cart.map((ca, index) => (
          <button
            key={index}
            onClick={() => navigate(ca.path)}
            className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100"
          >
            {ca.name}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  )
}

export default AdMonitor
