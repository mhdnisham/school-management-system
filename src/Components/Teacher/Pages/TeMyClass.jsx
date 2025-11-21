import { div } from 'framer-motion/m';
import React from 'react'
import TeNav from '../MainContent/TeNav';
import { useNavigate } from 'react-router-dom';

function TeMyClass() {
    const navigation=useNavigate()
    const total = 40
    const history = [
        { date: "2025-10-25", present: 25, absent: 5, late: 2 },
        { date: "2025-10-24", present: 24, absent: 6, late: 1 },
        { date: "2025-10-23", present: 27, absent: 3, late: 2 },
        { date: "2025-10-22", present: 26, absent: 4, late: 2 },
        { date: "2025-10-21", present: 28, absent: 2, late: 1 },
        { date: "2025-10-20", present: 29, absent: 1, late: 0 },
        { date: "2025-10-19", present: 30, absent: 0, late: 0 },
    ];

    const cards = [
    { title: "Student Mgmt", description: "Manage students and details", nav:'/testudentmnt'},
    { title: "Assignment", description: "Track assignments" },
    { title: "Class Settings", description: "Configure class details" },
  ];

    const parcentage = (count) => ((count / total) * 100).toFixed(1);

    const lastThree = history.slice(-3)
    // console.log(lastThree);

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "long" });
    };
    return (
        <div>
            <div >
                <TeNav/>
            </div>
            <div className="p-6 bg-gray-100 min-h-screen space-y-8">
            <div>
                <div className="text-lg font-semibold mb-4">My Class : 10-A</div>
                <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-lg shadow-md p-5 h-36 flex flex-col justify-between">
                        <h4 className="text-gray-500 text-base font-medium mb-2">Total Students</h4>
                        <p className="text-4xl font-bold text-gray-800">40</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5 h-36 flex flex-col justify-between">
                        <h4 className="text-gray-500 text-base font-medium mb-2">Present Today</h4>
                        <p className="text-4xl font-bold text-green-500">18</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5 h-36 flex flex-col justify-between">
                        <h4 className="text-gray-500 text-base font-medium mb-2">Absent Today</h4>
                        <p className="text-4xl font-bold text-red-500">1</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5 h-36 flex flex-col justify-between">
                        <h4 className="text-gray-500 text-base font-medium mb-2">Late</h4>
                        <p className="text-4xl font-bold text-orange-500">1</p>
                    </div>

                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-gray-700">Attendance History</div>
                    <div className="text-blue-600 font-medium hover:underline cursor-pointer">See All</div>
                </div>
                <div className="space-y-4">
                    {lastThree.map((info, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                            <div className="flex flex-col">
                                <div className="text-gray-700 font-medium">{info.date}</div>
                                <div className="text-gray-500">{getDayName(info.date)}</div>
                            </div>
                            <div className="text-green-600 font-semibold">{parcentage(info.present)}% Present</div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform duration-200"
            onClick={()=>navigation(card.nav)}
          >
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
            </div>
        </div>
        </div>
    )
}

export default TeMyClass