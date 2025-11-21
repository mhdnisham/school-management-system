import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import TeNav from '../MainContent/TeNav';

function TeAttentence() {
  const tabs = [
    { name: 'Mark Attendance', path: 'markattendance' },
    { name: 'Attendance History', path: 'attendancehistory' }
  ];

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Mark Attendance');

  const handleClick = (tab) => {
    setActiveTab(tab.name);     
    navigate(tab.path);         
  };

  return (
    <div>
      <div>
        <TeNav/>
      </div>
      <div className="flex mb-4">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => handleClick(tab)}
            className={`flex-1 py-2 text-center text-sm font-semibold rounded-t-lg transition duration-150 ${
              activeTab === tab.name ? 'bg-gray-200 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default TeAttentence;
