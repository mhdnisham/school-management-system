import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TeNav from '../MainContent/TeNav';

function TeClasses() {
    const[active,setActive]=useState("Assignments")
  const tabs = [
    { name: 'Assignments', path: 'assignments' },
    { name: 'Materials', path: 'materials' },
    { name: 'Marks', path: 'testsmarks' },
    { name: 'announcement', path: 'teannouncement' },
  ];

  return (
    <div>
      <TeNav />

      <div className="p-2 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">SELECT CLASS</h1>
          <select
            id="class"
            className="w-64 h-10 p-2 border border-gray-300 rounded-lg shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>10-A</option>
            <option>10-C</option>
            <option>10-D</option>
            <option>9-A</option>
          </select>
        </div>

        <nav className="flex px-4 border-b border-gray-200 ">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              onClick={()=>setActive(tab.name)}
              className={`pb-2 mr-4 sm:mr-8 text-base font-medium transition-all duration-300 ${
              active === tab.name
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 border-b-4 border-transparent '
            }`}
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeClasses;
