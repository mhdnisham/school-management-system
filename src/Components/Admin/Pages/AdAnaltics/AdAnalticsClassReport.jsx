import React, { useState } from "react";

function AdAnalticsClassReport() {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center  ">
            <div className="w-full  bg-white  shadow-md p-6 md:p-10 space-y-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://via.placeholder.com/60"
                            alt="Teacher"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                Class 10 - Section B
                            </h2>
                            <p className="text-sm text-gray-500">Ms. Eleanor Vance</p>
                            <p className="text-xs text-gray-400">eleanorv@school.com</p>
                        </div>
                    </div>
                    <div className="text-right mt-3 md:mt-0">
                        <p className="text-blue-600 font-semibold text-base">35</p>
                        <p className="text-xs text-gray-500">Students</p>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {[
                        { label: "Average Marks", value: "82.5%" },
                        { label: "Top Student", value: "Aria Patel" },
                        { label: "Assignments", value: "95%" },
                        { label: "Attendance", value: "98%" },
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 shadow-sm">
                            <p className="text-xs text-gray-500">{item.label}</p>
                            <p className="text-lg font-semibold text-gray-800 mt-1">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Subject Performance */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <p className="text-sm font-medium text-gray-700 mb-3">
                        Subject Performance
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                        <p className="text-2xl font-semibold text-gray-800">82.5%</p>
                        <p className="text-xs text-green-500">This Term +2.1%</p>
                    </div>

                    <div className=" items-end flex justify-between mt-2 text-xs gap-9 ">
                        <div className="bg-blue-400 rounded-t-lg w-8 h-6"></div>
                        <div className="bg-blue-400 rounded-t-lg w-8 h-12"></div>
                        <div className="bg-blue-400 rounded-t-lg w-8 h-14"></div>
                        <div className="bg-blue-400 rounded-t-lg w-8 h-10"></div>
                        <div className="bg-blue-400 rounded-t-lg w-8 h-16"></div>
                    </div>

                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <p>Math</p>
                        <p>Eng</p>
                        <p>Geo</p>
                        <p>Sci</p>
                        <p>Hist</p>
                    </div>
                </div>

                {/* Teacher Reviews */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-4">
                        Teacher Reviews
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: "Mr. David Chen", subject: "Mathematics", rating: 4.8 },
                            { name: "Ms. Sophia Rodriguez", subject: "Science", rating: 4.9 },
                            { name: "Mr. Michael Johnson", subject: "History", rating: 4.7 },
                        ].map((teacher, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt={teacher.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {teacher.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{teacher.subject}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                                    ★ {teacher.rating}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Attendance Trend */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <p className="text-sm font-medium text-gray-700 mb-3">
                        Attendance Trend (Last 30 Days)
                    </p>
                    <div className="flex items-end justify-between h-20">
                        {[40, 50, 60, 80, 70, 90, 100].map((h, i) => (
                            <div
                                key={i}
                                className="bg-blue-500 rounded-md w-2 md:w-3"
                                style={{ height: `${h}%` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Download Button */}
                <div className="pt-4 border-t">
                    <button
                        onClick={() => window.print()}
                        className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Download Report
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdAnalticsClassReport;
