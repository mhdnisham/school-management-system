import React from 'react';
import StNav from '../MinComponens/StNav';
import StFooter from '../MinComponens/StFooter';

function StAssiment() {
  const assignments = [
    {
      title: "History Essay: The Roman Empire",
      status: "View",
      due: "Oct 26, 2024, 11:59 PM",
    },
    {
      title: "Math Homework 5.2",
      status: "View",
      due: "Oct 28, 2024, 8:00 PM",
    },
    {
      title: "Biology Lab Report",
      status: "Submitted",
      due: "Submitted: Oct 22, 2024",
    },
  ];

  return (
    <div>
        <div className='z-30'>
            <StNav/>
        </div>
    <div className="p-6 bg-gray-50 h-screen lg:p-10">
        
      <div className="pt-20 mx-auto max-w-2xl lg:max-w-4xl">
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search assignments..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {assignments.map((data, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md flex flex-col gap-3 hover:shadow-lg transition duration-300 md:p-6"
            >
              <h1 className="text-xl font-bold text-gray-800">{data.title}</h1>

              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <div
                  className={`text-sm ${
                    data.status === "Submitted"
                      ? "text-green-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {data.due}
                </div>

                <button
                  className={`px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-md transition duration-200 ${
                    data.status === "View"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : data.status === "Submitted"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  {data.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='max-sm:pt-15'>
        <StFooter/>
    </div>
    </div>
  );
}

export default StAssiment;
