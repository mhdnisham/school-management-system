import React, { useState } from "react";
import { FileText, CalendarDays, CheckCircle, BarChart3 } from "lucide-react";


function AdStudentMoPage() {
    return (
        <div> 
            <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
                <div className="w-full  bg-white  shadow-md p-6 md:p-10 overflow-y-auto">
                    {/* Profile Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="Student"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="font-semibold text-xl text-gray-800">Alex Morgan</h2>
                                <p className="text-sm text-gray-500">ID: 21BCE1024</p>
                                <p className="text-sm text-gray-500">Class 10 - A</p>
                            </div>
                        </div>
                    </div>

                    {/* Performance Summary */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <h3 className="font-semibold text-gray-800 mb-3 text-lg">Performance Summary</h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    Attendance
                                </div>
                                <div className="flex items-center gap-2 w-full sm:w-1/2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                                    </div>
                                    <span className="text-gray-700 font-medium">92%</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <BarChart3 className="w-5 h-5 text-green-500" />
                                    Average Marks
                                </div>
                                <span className="text-gray-700 font-medium">88%</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <BarChart3 className="w-5 h-5 text-purple-500" />
                                    Academic Progress
                                </div>
                                <span className="text-green-600 font-semibold">Improving</span>
                            </div>
                        </div>
                    </div>

                    {/* Mark List */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <h3 className="font-semibold text-gray-800 mb-3 text-lg">Mark List</h3>

                        <div className="space-y-3">
                            {[
                                { label: "Term 1" },
                                { label: "Term 2" },
                                { label: "Final Exams" },
                                { label: "View All Class Tests", icon: CalendarDays },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                                >
                                    <div className="flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-blue-500" />
                                        <span>{item.label}</span>
                                    </div>
                                    <span className="text-gray-400">{">"}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Feedback */}
                    <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-800 mb-3 text-lg">Recent Feedback</h3>

                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-800">Mr. Davies</span>
                                    <span className="text-gray-400 text-xs">Oct 16, 2023</span>
                                </div>
                                <p className="text-gray-600">
                                    Alex has shown great improvement in algebra. Excellent participation in class discussions.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-800">Ms. Potts</span>
                                    <span className="text-gray-400 text-xs">Oct 09, 2023</span>
                                </div>
                                <p className="text-gray-600">
                                    Needs to be more attentive during practical lab sessions. Submitted the last assignment a day late.
                                </p>
                            </div>
                        </div>

                        <button className="w-full bg-gray-200 text-gray-800 py-2 mt-4 rounded-lg font-medium hover:bg-gray-300 transition">
                            See All Feedback
                        </button>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default AdStudentMoPage